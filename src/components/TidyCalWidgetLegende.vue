<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const showWidget = ref(false);

const loadWidget = () => {
  showWidget.value = true;

  // vérifie si le script TidyCal est déjà chargé
  if (
    !document.querySelector(
      'script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]'
    )
  ) {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
};

// fonction pour fermer le widget
const closeWidget = () => {
  showWidget.value = false;
  window.location.reload();
};

const tidyWidget = ref();
// clique à l'extérieur du widget et le widget se ferme
onClickOutside(tidyWidget, closeWidget);
</script>

<template>
  <!-- Overlay pour couvrir le contenu -->
  <div v-if="showWidget" class="overlay"></div>

  <!-- Bouton personnalisé -->
  <button class="tidycal-button" @click="loadWidget">Je réserve</button>

  <!-- Conteneur du widget -->
  <div v-if="showWidget" class="tidycal-widget-container" ref="tidyWidget">
    <button
      class="close-button"
      @click="closeWidget"
      aria-label="Fermer le widget"
    >
      <svg
        class="close-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M18 6L6 18M6 6l12 12"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>
    </button>
    <div
      class="tidycal-embed"
      data-path="nicolasbilicdev/forfait-legende"
    ></div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 98;
  /* inférieur au widget (99) */
}

.tidycal-button {
  display: block;
  font-size: 1rem;
  font-weight: var(--font-weight-strong);
  color: var(--color-text-accent-light);
  width: 100%;
  padding: 10px;
  margin: 15px auto 0px auto;
  box-shadow: 0 4px 6px rgba(57, 118, 155, 0.2);
  background: var(--color-background-button-secondary);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
}

.tidycal-button:hover {
  opacity: 0.9;
}

.tidycal-widget-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99;
}

.close-button {
  position: absolute;
  top: -50px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  color: var(--color-text-accent-light);
  background: #3192f1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

.close-icon {
  display: block;
  /* garantit que l'icône SVG s'affiche correctement */
  width: 1em;
  height: 1em;
}
</style>
