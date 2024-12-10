<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import UserNavBar from '../../components/User/UserNavBar.vue';
const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

<template>
  <transition name="fade-slide">
    <section v-if="show">
      <UserNavBar navColor="black" />
      <div class="residences-container">
        <h1>Résidences</h1>
        <div class="residences">
          <div class="residence">
            <div class="img-container">
              <img src="../../assets/webp/chalet-cimes.webp" alt="Chalet des Cimes">
            </div>
            <div class="link-to-residence">
              <p>Chalet des Cimes</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="residence">
            <div class="img-container">
              <img src="../../assets/webp/chalet-alpestre.webp" alt="Refuge Alpestre">
            </div>
            <div class="link-to-residence">
              <p>Refuge Alpestre</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="residence">
            <div class="img-container">
              <img src="../../assets/webp/evasion-montagnarde.webp" alt="Évasion montagnarde">
            </div>
            <div class="link-to-residence">
              <p>La montagne</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="residence">
            <div class="img-container">
              <img src="../../assets/webp/chalet-enchante.webp" alt="Chalet enchanté">
            </div>
            <div class="link-to-residence">
              <p>Chalet enchanté</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="residence">
            <div class="img-container">
              <img src="../../assets/webp/abri-des-sommets.webp" alt="Abri des sommets">
            </div>
            <div class="link-to-residence">
              <p>Abri des sommets</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="residence">
            <div class="img-container">
              <img src="../../assets/webp/lumiere-des-alpes.webp" alt="Lumière des Alpes">
            </div>
            <div class="link-to-residence">
              <p>Lumière des Alpes</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="residence">
            <div class="img-container">
              <img src="../../assets/webp/retraite-montagnarde.webp" alt="Retraite montagnarde">
            </div>
            <div class="link-to-residence">
              <p>Retraite de neige</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="residence">
            <div class="img-container">
              <img src="../../assets/webp/chalet-des-neiges.webp" alt="Chalet des neiges">
            </div>
            <div class="link-to-residence">
              <p>Chalet des neiges</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="residence">
            <div class="img-container">
              <img src="../../assets/webp/chalet-alpin.webp" alt="Chalet Alpin">
            </div>
            <div class="link-to-residence">
              <p>Chalet Alpin</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<style scoped>
/****** Animation de chargement ******/
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/***** Animation de chargement de section *****/
.transition-section {
  opacity: 0;
  transform: translateY(0px);
  transition: all 0.9s ease-in-out;
}

.transition-section.visible {
  opacity: 1;
  transform: translateY(0);
}


/****** Global ******/
.residences-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
}

h1 {
  font-size: var(--heading-size);
  padding-bottom: 4rem;
}

.residences {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1300px;
  margin-bottom: 5rem;
}

.img-container {
  width: 320px;
  height: 420px;
  overflow: hidden;
  border-radius: var(--radius);
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.25);
  transition: .3s ease-in-out;
  cursor: pointer;
}

.img-container img:hover {
  transform: scale(1);
}

.link-to-residence {
  position: relative;
}

.link-to-residence p {
  font-size: 18px;
  font-weight: var(--font-weight-strong);
  text-align: center;
  padding-top: 1rem;
  cursor: pointer;
}

.link-to-residence svg {
  position: absolute;
  bottom: 3px;
  right: 30px;
  opacity: 0;
  transform: rotate(90deg);
  transition: opacity .3s ease-in-out, transform .5s ease-in-out;
  cursor: pointer;
}

.residence:hover svg {
  opacity: 1;
  transform: rotate(0deg);
}


/****** MEDIA QUERIES ******/
@media (width > 1087px) {

  /* tous les éléments qui sont le deuxième élément dans un groupe de 3 : 3×0+2 = 2, 3×1+2 = 5, 3×2+2 = 8… */
  .residences .residence:nth-child(3n + 2) .img-container {
    height: 500px;
  }

  .residences {
    gap: 5rem 2rem;
  }
}
</style>