<template>
  <div>
    <div class="error-404">
      <div class="error-404-content">
        <h1>La page recherchée est introuvable</h1>
        <a href="/" aria-label="Retourner à l'accueil">
          Retourner à l'accueil
        </a>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
</script>

<style scoped>
.error-404 {
  background-image: url('../assets/webp/404-alpes.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.error-404-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  text-align: center;
  padding: 1rem;
}

.error-404 h1 {
  font-size: 18px;
  color: var(--color-text-accent-dark);
  font-weight: var(--fw-strong);
  text-transform: uppercase;
  padding: 10px 20px 10px;
  margin-bottom: 5px;
  box-shadow: 0 0px 10px 10px var(--color-background);
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  background-color: var(--color-background);
  transition: 0.3s ease-in-out;
  border-radius: var(--radius);
}

.error-404 a {
  font-size: 18px;
  color: var(--c-white-mute);
  font-weight: var(--fw-strong);
  text-transform: uppercase;
  padding: 10px 20px;
  background-color: var(--color-background-dark);
  border-radius: var(--radius);
}

.error-404 a:hover {
  color: var(--color-text-accent-dark);
  background-color: var(--color-background);
  outline: 2px solid var(--color-outline-dark);
}
</style>