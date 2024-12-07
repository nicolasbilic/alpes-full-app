<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserNavBar from '../../components/User/UserNavBar.vue'
import NewsletterSignup from '../../components/NewsletterSignup.vue'

const show = ref(false);
onMounted(() => {
  show.value = true;
})
</script>

<template>
  <transition name="fade-slide">
    <div v-if="show">
      <!-------- homepage-header -------->
      <section class="hero hero-overlay">
        <UserNavBar />
        <div class="hero-content">
          <div class="hero-text">
            <h1>GRAVISSEZ <br> LES <br> <span>ALPES</span></h1>
          </div>

          <div class="hero-booking">
            <RouterLink to="/reservations" aria-label="Réservations">JE GRIMPE</RouterLink>
          </div>
          <div class="social-networks-container">
            <div class="social-networks">
              <a href="https://www.facebook.com/" target="_blank">
                <svg class="icon" width="10" height="17" viewBox="0 0 10 17" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.659 2.71461H9.351V0.114495C8.53178 0.0371024 7.70864 -0.00110733 6.885 2.44183e-05C4.437 2.44183e-05 2.763 1.35732 2.763 3.84297V5.9852H0V8.89602H2.763V16.353H6.075V8.89602H8.829L9.243 5.9852H6.075V4.12914C6.075 3.27061 6.327 2.71461 7.659 2.71461Z"
                    fill="white" />
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <svg class="icon" width="18" height="18" viewBox="0 0 20 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.34 16.5369C15.1027 16.5369 14.8707 16.4703 14.6733 16.3457C14.476 16.221 14.3222 16.0438 14.2313 15.8364C14.1405 15.6291 14.1168 15.4009 14.1631 15.1808C14.2094 14.9607 14.3236 14.7585 14.4915 14.5998C14.6593 14.4412 14.8731 14.3331 15.1059 14.2893C15.3387 14.2455 15.5799 14.268 15.7992 14.3539C16.0185 14.4398 16.2059 14.5852 16.3378 14.7718C16.4696 14.9584 16.54 15.1778 16.54 15.4022C16.54 15.7031 16.4136 15.9918 16.1885 16.2045C15.9635 16.4173 15.6583 16.5369 15.34 16.5369ZM19.94 14.2486C19.9206 15.0331 19.7652 15.8094 19.48 16.5463C19.2257 17.1769 18.83 17.7479 18.32 18.22C17.8248 18.7047 17.2196 19.0765 16.55 19.3074C15.7727 19.5853 14.9508 19.7356 14.12 19.7519C13.06 19.8086 12.72 19.8086 10 19.8086C7.28 19.8086 6.94 19.8086 5.88 19.7519C5.04915 19.7356 4.22734 19.5853 3.45 19.3074C2.78168 19.0742 2.17693 18.7027 1.68 18.22C1.16743 17.7518 0.774176 17.1795 0.53 16.5463C0.236161 15.8113 0.07721 15.0342 0.0599999 14.2486C-5.58794e-08 13.2463 0 12.9248 0 10.3528C0 7.78084 -5.58794e-08 7.45934 0.0599999 6.45703C0.07721 5.6714 0.236161 4.89431 0.53 4.15928C0.774176 3.52615 1.16743 2.95383 1.68 2.4856C2.17693 2.00294 2.78168 1.63141 3.45 1.39819C4.22734 1.12034 5.04915 0.970037 5.88 0.953764C6.94 0.897028 7.28 0.89703 10 0.89703C12.72 0.89703 13.06 0.897028 14.12 0.953764C14.9508 0.970037 15.7727 1.12034 16.55 1.39819C17.2196 1.62907 17.8248 2.00092 18.32 2.4856C18.8322 2.95595 19.2283 3.52744 19.48 4.15928C19.7652 4.89626 19.9206 5.67248 19.94 6.45703C19.94 7.45934 20 7.78084 20 10.3528C20 12.9248 20 13.2463 19.94 14.2486ZM18.14 6.5705C18.1327 5.97027 18.0178 5.37557 17.8 4.81172C17.6403 4.40021 17.3839 4.02838 17.05 3.72431C16.7256 3.41179 16.3332 3.16979 15.9 3.01513C15.3037 2.80922 14.6748 2.70051 14.04 2.69363C13.04 2.64635 12.67 2.63689 10.04 2.63689C7.41 2.63689 7.04 2.63689 6.04 2.69363C5.38089 2.68196 4.72459 2.77793 4.1 2.9773C3.68578 3.13987 3.31136 3.38127 3 3.68649C2.66809 3.99025 2.41484 4.36239 2.26 4.7739C2.01586 5.34583 1.88044 5.95404 1.86 6.5705C1.86 7.51608 1.8 7.86594 1.8 10.3528C1.8 12.8397 1.8 13.1895 1.86 14.1351C1.86448 14.7488 1.98295 15.3569 2.21 15.9317C2.38605 16.3308 2.65627 16.6866 3 16.9719C3.30381 17.297 3.67929 17.5552 4.1 17.7283C4.70955 17.9363 5.352 18.045 6 18.0498C7 18.0498 7.37 18.1066 10 18.1066C12.63 18.1066 13 18.1066 14 18.0498C14.6348 18.0429 15.2637 17.9342 15.86 17.7283C16.3144 17.5688 16.7223 17.3096 17.05 16.9719C17.3777 16.6814 17.6338 16.3263 17.8 15.9317C18.0223 15.3559 18.1373 14.7481 18.14 14.1351C18.19 13.1895 18.2 12.8397 18.2 10.3528C18.2 7.86594 18.19 7.51608 18.14 6.5705ZM10 15.2036C8.98581 15.2018 7.99496 14.9157 7.15265 14.3815C6.31035 13.8474 5.65438 13.0891 5.26763 12.2026C4.88089 11.3161 4.78072 10.341 4.97979 9.40068C5.17886 8.46034 5.66824 7.59689 6.38608 6.91944C7.10392 6.24198 8.01801 5.78093 9.01286 5.59452C10.0077 5.40812 11.0387 5.50473 11.9755 5.87215C12.9123 6.23958 13.7129 6.86132 14.2761 7.65883C14.8394 8.45633 15.14 9.39381 15.14 10.3528C15.1413 10.991 15.0092 11.6231 14.7512 12.2128C14.4933 12.8025 14.1146 13.3382 13.6369 13.789C13.1592 14.2398 12.5919 14.5969 11.9678 14.8396C11.3436 15.0824 10.6749 15.2061 10 15.2036ZM10 7.20404C9.34139 7.20404 8.69757 7.38871 8.14995 7.7347C7.60234 8.08069 7.17552 8.57246 6.92348 9.14783C6.67144 9.72319 6.6055 10.3563 6.73398 10.9671C6.86247 11.5779 7.17963 12.139 7.64533 12.5793C8.11104 13.0197 8.70439 13.3196 9.35035 13.4411C9.99631 13.5626 10.6659 13.5002 11.2743 13.2619C11.8828 13.0236 12.4029 12.62 12.7688 12.1022C13.1347 11.5844 13.33 10.9756 13.33 10.3528C13.33 9.93931 13.2439 9.52985 13.0765 9.14783C12.9092 8.7658 12.6639 8.41868 12.3547 8.12629C12.0454 7.8339 11.6784 7.60196 11.2743 7.44372C10.8703 7.28548 10.4373 7.20404 10 7.20404Z"
                    fill="white" />
                </svg>
              </a>
              <a href="https://x.com/" target="_blank">
                <svg class="icon" width="19" height="17.42" viewBox="0 0 24 22" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.9455 22L10.396 14.0901L3.44886 22H0.509766L9.09209 12.2311L0.509766 0H8.05571L13.286 7.45502L19.8393 0H22.7784L14.5943 9.31648L23.4914 22H15.9455ZM19.2185 19.77H17.2398L4.71811 2.23H6.6971L11.7121 9.25316L12.5793 10.4719L19.2185 19.77Z"
                    fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="activities-container">
        <div class="activity">
          <div class="activity-content">
            <h2>Ascension Épique</h2>
            <p>Participez à une aventure inoubliable en gravissant le plus haut sommet d’Europe occidentale, le Mont
              Blanc.
              <br>
              Découvrez les défis et les beautés naturelles de cette ascension légendaire avec des guides expérimentés.
              Préparez-vous à une expérience physique et mentale qui vous poussera à vos limites tout en vous offrant
              des panoramas époustouflants sur les Alpes.
            </p>
            <RouterLink to="/a-faire" aria-label="À faire">En savoir plus</RouterLink>
          </div>
          <div class="activity-img">
            <img src="../../assets/webp/the-alps-man-walking.webp"
              alt="Homme marchant sur la neige pendant l'ascension des Alpes" width="550" height="550">
          </div>
        </div>
        <div class="activity">
          <div class="activity-content order-2">
            <h2>La Mer de Glace</h2>
            <p>Affrontez l’un des glaciers les plus impressionnants des Alpes lors d’une traversée technique de la Mer
              de Glace.
              <br>
              Ce défi exige une maîtrise des techniques d’alpinisme sur glace, y compris l’utilisation de piolets ainsi
              qu’une excellente condition physique.
              <br>
              Traversez des crevasses profondes et des formations de glace spectaculaires.
            </p>
            <RouterLink to="/a-faire" aria-label="À faire">Faire l'ascension</RouterLink>
          </div>
          <div class="activity-img">
            <img src="../../assets/webp/alpes-mer-de-glace.webp"
              alt="Homme marchant sur la neige pendant l'ascension des Alpes" width="550" height="550">
          </div>
        </div>
        <div class="activity">
          <div class="activity-content">
            <h2>Le Tour du Mont Rose</h2>
            <p>Engagez-vous dans une aventure exigeante en entreprenant le tour du Mont Rose, une expédition de
              plusieurs jours qui vous mènera à travers des paysages alpins à couper le souffle.
              <br>
              Ce trek intense nécessite endurance et compétences en alpinisme pour naviguer sur des sentiers escarpés
              aux glaciers étendus.
            </p>
            <RouterLink to="/a-faire" aria-label="À faire">Je grimpe</RouterLink>
          </div>
          <div class="activity-img">
            <img src="../../assets/webp/les-alpes-mont-rose.webp"
              alt="Homme marchant sur la neige pendant l'ascension des Alpes" width="550" height="550">
          </div>
        </div>
      </div>

      <!---------- Forfaits ---------->
      <section class="package-section">
        <h2>Forfaits</h2>
        <div class="package-grid">
          <div class="package-card-container">
            <div class="package-card">
              <div class="price-tag">199€</div>
              <div class="pass-type">Forfait de base</div>
              <div class="features-container">
                <ul class="features">
                  <li>Guide certifié</li>
                  <li>Équipement de base inclus</li>
                  <li>Briefing sécurité</li>
                  <li>Accès aux refuges</li>
                  <li>Souvenirs photos</li>
                </ul>
              </div>
              <RouterLink to="/reservations" title="Je réserve">
                <button class="book-it">Je réserve</button>
              </RouterLink>
            </div>
          </div>
          <div class="package-card-container popular-card">
            <div class="package-card">
              <div class="price-tag">299€</div>
              <div class="pass-type">Forfait grimpeur</div>
              <div class="features-container">
                <ul class="features">
                  <li>Guide certifié expert</li>
                  <li>Équipement complet</li>
                  <li>Briefing avancé</li>
                  <li>En-cas énergétiques</li>
                  <li>Vidéo de l'ascension</li>
                </ul>
              </div>
              <RouterLink to="/reservations" title="Je réserve">
                <button class="book-it">Je réserve</button>
              </RouterLink>
            </div>
            <svg width="60" height="46" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.21934 42.4487C9.06199 43.262 9.59378 44.0489 10.4071 44.2063C11.2205 44.3636 12.0074 43.8318 12.1647 43.0185L9.21934 42.4487ZM50.5829 3.79132C51.4038 3.68035 51.9794 2.92487 51.8684 2.10391C51.7574 1.28295 51.0019 0.707389 50.181 0.818364L50.5829 3.79132ZM4.78603 32.3309C4.35916 31.6209 3.43756 31.3914 2.72758 31.8183C2.0176 32.2452 1.78809 33.1668 2.21496 33.8768L4.78603 32.3309ZM8.97548 42.21L7.68995 42.9829L7.69067 42.9841L8.97548 42.21ZM12.592 43.2607L11.9791 41.8917L11.9778 41.8922L12.592 43.2607ZM23.5111 40.0157C24.2672 39.6772 24.6057 38.7898 24.2672 38.0337C23.9287 37.2776 23.0413 36.939 22.2852 37.2776L23.5111 40.0157ZM10.692 42.7336C12.1647 43.0185 12.1647 43.0188 12.1646 43.0191C12.1646 43.0191 12.1646 43.0193 12.1646 43.0193C12.1646 43.0193 12.1646 43.019 12.1647 43.0185C12.1649 43.0174 12.1654 43.0153 12.166 43.0122C12.1672 43.0059 12.1693 42.9954 12.1722 42.9809C12.1781 42.9518 12.1875 42.9065 12.2004 42.8457C12.2262 42.7241 12.2663 42.5405 12.3221 42.3009C12.4337 41.8218 12.6076 41.1194 12.8539 40.2422C13.3469 38.4864 14.1279 36.0372 15.2761 33.2783C17.5821 27.7376 21.3224 21.0616 27.0826 16.2003L25.1477 13.9077C18.8751 19.2014 14.9038 26.3652 12.5064 32.1256C11.303 35.0172 10.4843 37.5838 9.96562 39.4312C9.70608 40.3556 9.52112 41.1017 9.4003 41.6205C9.33987 41.88 9.29545 42.0828 9.26573 42.2229C9.25087 42.2929 9.23968 42.3472 9.23201 42.3851C9.22817 42.404 9.22521 42.4189 9.2231 42.4295C9.22205 42.4348 9.22121 42.4391 9.22059 42.4423C9.22027 42.4439 9.22001 42.4452 9.21981 42.4463C9.2197 42.4468 9.21959 42.4474 9.21953 42.4477C9.21943 42.4482 9.21934 42.4487 10.692 42.7336ZM27.0826 16.2003C38.8951 6.23119 48.2836 4.10213 50.5829 3.79132L50.181 0.818364C47.3224 1.20477 37.4008 3.56674 25.1477 13.9077L27.0826 16.2003ZM2.21496 33.8768L7.68995 42.9829L10.261 41.437L4.78603 32.3309L2.21496 33.8768ZM7.69067 42.9841C8.83293 44.8799 11.2192 45.521 13.2062 44.6292L11.9778 41.8922C11.2767 42.2069 10.5649 41.9414 10.2603 41.4358L7.69067 42.9841ZM13.2049 44.6298L23.5111 40.0157L22.2852 37.2776L11.9791 41.8917L13.2049 44.6298Z"
                fill="#080808" />
            </svg>
            <span>Le plus populaire !</span>
          </div>
          <div class="package-card-container">
            <div class="package-card">
              <div class="price-tag">399€</div>
              <div class="pass-type">Forfait légende</div>
              <div class="features-container">
                <ul class="features">
                  <li>Guide de renommée</li>
                  <li>Équipement premium</li>
                  <li>Briefing personnalisé</li>
                  <li>Repas gastronomiques</li>
                  <li>Reportage photo pro.</li>
                </ul>
              </div>
              <RouterLink to="/reservations" title="Je réserve">
                <button class="book-it">Je réserve</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>


      <!---------- Newsletter de grimpeur ---------->
      <section class="newsletter-section">
        <h2>Newsletter de grimpeur</h2>
        <p>Recevez notre newsletter quotidienne sur les ascensions actuelles des légendaires Alpes.</p>
        <NewsletterSignup />
      </section>
    </div>
  </transition>
</template>

<style scoped>
/**** Transition de la page au chargement ****/
.fade-slide-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/************ Hero section **************/
.hero {
  position: relative;
  text-align: center;
  min-block-size: 100vh;
}

/* image hero et transition gif avec mask-image */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('../../assets/webp/alps-hero.webp');
  background-size: cover;
  z-index: -1;
  /* Mask-image (gif) */
  mask-image: url('../../assets/video-gifs/gif-alpes.gif');
  mask-size: cover;
  mask-position: center;
}

.hero-overlay {
  border-image: linear-gradient(hsla(0, 0%, 0%, 0.44),
      hsla(0, 0%, 0%, 0.44)) fill 1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-block-size: 90vh;
}

.hero-text {
  padding: 0px 20px;
}

.hero h1 {
  color: var(--c-white-mute);
  font-weight: var(--fw-strong);
  letter-spacing: 15px;
  line-height: 60px;
  margin-left: calc(15px / 2);
}

.hero h1 span {
  font-size: 70px;
  font-weight: var(--fw-extrabold);
  line-height: 90px;
}

.hero-booking {
  display: flex;
  justify-content: center;
  padding-top: 15px;
}

.hero-booking a {
  font-size: 18px;
  color: var(--color-text-accent-dark);
  font-weight: var(--fw-strong);
  background-color: var(--c-white-mute);
  border-radius: var(--radius);
  padding: 10px 20px;
  transition: 0.3s ease-in-out;
  animation: 8s linear 1s infinite climb-and-fall;
  /* @keyframes duration | timing-function | delay |
     iteration-count | direction | fill-mode | play-state | name */
}

.hero-booking a:hover {
  color: var(--color-text-accent-light);
  background-color: rgb(0 0 0 /1);
  /* divise chaque couleur r,g,b par 0.5 pour rendre la couleur plus claire */
  outline: 2px solid var(--color-outline-light);
}

@keyframes climb-and-fall {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
    /* rotate3d(x, y, z, angle); */
  }

  5% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  65% {
    transform: rotate3d(0, 0, 1, 15deg)
  }

  70% {
    transform: rotate3d(0, 0, 1, 0deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.social-networks-container {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
}

.social-networks {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 23px;
  width: fit-content;
  /* s'adapte à la taille du conteneur */
  padding-top: 40px;
  margin-right: 2rem;
}

.social-networks a .icon {
  transition: .5s;
}

.social-networks a:hover .icon {
  transform: rotateY(360deg);
}

/******* Activities *******/
.activities-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
}

.activities-container h2 {
  font-size: var(--fs-subheading);
  font-weight: var(--fw-heading);
  text-transform: uppercase;
  padding-bottom: 16px;
}

.activity {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 0rem;
  margin: 0rem;
}

.activity-content {
  max-width: 550px;
  padding-bottom: 1rem;
}

.activity-content p {
  font-size: 18px;
}

.activity a {
  display: inline-block;
  font-size: 18px;
  color: var(--c-white-mute);
  font-weight: var(--fw-strong);
  text-transform: uppercase;
  background-color: var(--color-background-dark);
  border-radius: var(--radius);
  padding: 10px 20px;
  margin-top: 16px;
  transition: 0.3s ease-in-out;
}

.activity-content a:hover {
  color: var(--color-text-accent-dark);
  background-color: var(--color-background);
  outline: 2px solid var(--color-outline-dark);
}

.activity-img {
  display: flex;
  justify-content: center;
}

.activity-img img {
  width: 100%;
  max-width: 550px;
  height: auto;
  border-radius: var(--radius);
}


/************ Packages (forfaits) **************/
.package-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
}

.package-section h2,
.newsletter-section h2 {
  font-size: var(--fs-heading);
  font-weight: var(--fw-strong);
  padding-bottom: 1rem;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4rem;
  padding: 4rem 0;
}

.package-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 6;
}

.package-card {
  width: 320px;
  padding: 30px;
  text-align: center;
  background: var(--color-background);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}

.package-card .price-tag {
  font-size: 45px;
  font-weight: var(--fw-strong);
  color: var(--color-text-primary);
  padding-bottom: 10px;
}

.package-card .pass-type {
  font-size: 20px;
  font-weight: var(--fw-highlight);
  color: var(--color-text-primary);
  margin-bottom: 20px;
}

.package-card .features-container {
  text-align: left;
}

.package-card ul li {
  position: relative;
  min-height: 50px;
  color: var(--color-text-info);
  padding-left: 35px;
  padding-top: 13px;
  overflow: hidden;
}

/********** Checkmarks **********/
.package-card ul li::before {
  content: '';
  position: absolute;
  --bullet: 22px;
  --checkmark: 12px;
  width: var(--bullet);
  height: var(--bullet);
  border-radius: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: var(--color-text-accent-dark);
  background-image: url('../../assets/svg/checkmark-icon.svg');
  background-size: var(--checkmark) var(--checkmark);
  background-position: center;
  background-repeat: no-repeat;
}

.package-card .book-it {
  font-size: 1rem;
  font-weight: var(--fw-strong);
  color: #fff;
  width: calc(100% - 0px);
  padding: 10px;
  margin: 15px auto 0px auto;
  background: var(--c-blue);
  box-shadow: 0 4px 6px rgba(57, 118, 155, 0.2);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
}

.package-card .book-it:hover {
  opacity: 0.9;
}

.popular-card {
  position: relative;
}

.popular-card svg {
  position: absolute;
  top: -30px;
  left: 105px;
}

.popular-card span {
  position: absolute;
  font-weight: var(--fw-highlight);
  top: -42px;
  right: 5px;
}


/*************** Newsletter de grimpeur *****************/

.newsletter-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 1rem;
}

.newsletter-section h2,
.newsletter-section p {
  text-align: center;
}


/**************** Media queries ****************/
@media (width > 700px) {
  .hero h1 {
    letter-spacing: 25px;
    margin-left: calc(25px / 2);
  }

  .hero h1 span {
    font-size: 90px;
    line-height: 110px;
  }

  .hero-booking a {
    font-size: 20px;
    padding: 10px 30px;
  }
}

@media (width > 895px) {
  .package-card-container {
    grid-column: span 3;
  }

  .package-card {
    width: 340px;
  }

  .popular-card svg {
    left: 125px;
  }
}

@media (width > 1075px) {
  .activity {
    flex-direction: row;
    gap: 5rem;
    padding: 5rem 0;
    margin: 0 3rem;
  }

  .activity .order-2 {
    order: 2;
  }

  .activity-img img {
    min-width: 425px;
  }
}

@media (width > 1285px) {
  .package-card-container {
    grid-column: span 2;
  }
}
</style>