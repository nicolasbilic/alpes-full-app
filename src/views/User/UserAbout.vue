<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import UserNavBar from '../../components/User/UserNavBar.vue';
const show = ref(false);
const showHeader = ref(false);

// Références pour chaque élément (avec un état de visibilité unique)
const isElementVisible = ref([false, false, false, false, false]); // Un état pour chaque div visible
// Suivi des éléments déjà animés pour éviter les répétitions (reste en place)
const hasElementBeenVisible = ref([false, false, false, false, false]);

const checkVisibility = () => {
  const elements = [
    document.getElementById('target1'),
    document.getElementById('target2'),
    document.getElementById('target3'),
    document.getElementById('target4'),
    document.getElementById('target5'),
  ];

  elements.forEach((element, index) => {
    if (element && !hasElementBeenVisible.value[index]) {
      const rect = element.getBoundingClientRect();
      // Si l'élément est visible et qu'il n'a pas déjà été marqué comme visible
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        isElementVisible.value[index] = true;
        hasElementBeenVisible.value[index] = true;  // Marquer l'élément comme déjà visible
      }
    }
  });
};

onMounted(() => {
  show.value = true;
  // vue.js anime show et showHeader en même temps à moins que showHeader ait un delay, même 0 (fonctionnement interne de vue.js)
  setTimeout(() => {
    showHeader.value = true;
  }, 0);
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility);
  window.removeEventListener('resize', checkVisibility);
});
</script>

<template>
  <transition name="fade-slide">
    <section class="about-page" v-if="show">
      <UserNavBar navColor="black" />
      <transition name="fade-slide-up">
        <div class="about-header" v-if="showHeader">
          <figure>
            <img src="../../assets/webp/alpes-soleil.webp" alt="Les Alpes ensoleillées" width="337" height="202">
            <figcaption>La nature est reine ici.</figcaption>
          </figure>
        </div>
      </transition>

      <div class="our-company transition-section" id="target1" :class="{ visible: isElementVisible[0] }">
        <h1>Notre entreprise</h1>
        <p>ALPES est là pour vous accompagner pendant toute votre ascension</p>
      </div>

      <div class="summit-section transition-section" id="target2" :class="{ visible: isElementVisible[1] }">
        <div class="figures-section">
          <h2>Le sommet n'est que le début</h2>
          <div class="figures">
            <div class="figures-item">
              <span>+1500</span>
              <p>Ascensions réussies</p>
            </div>
            <div class="figures-item">
              <span>99%</span>
              <p>Taux de satisfaction client</p>
            </div>
            <div class="figures-item">
              <span>15</span>
              <p>ans d'expérience</p>
            </div>
            <div class="figures-item">
              <span>+200</span>
              <p>guides certifiés</p>
            </div>
          </div>
        </div>
        <div class="summit-img-container">
          <img src="../../assets/webp/alpes-groupe.webp" alt="Groupe de personnes grimpant les Alpes" width="335"
            height="335" loading="lazy">
        </div>
      </div>

      <div class="equipment-section transition-section" id="target3" :class="{ visible: isElementVisible[2] }">
        <p>Nos équipementiers sont parmi les plus renommés</p>
        <div class="equipment-logos">
          <img src="../../assets/svg/mountain-hard-wear-logo.svg" alt="Logo de Mountain Hard Wear" width="150"
            height="78" loading="lazy">
          <img src="../../assets/svg/millet-logo.svg" alt="Logo de Millet" width="150" height="91" loading="lazy">
          <img src="../../assets/svg/mammut-logo.svg" alt="Logo de Mammut" width="150" height="117" loading="lazy">
          <img src="../../assets/svg/norrona-logo.svg" alt="Logo de Norrona" width="150" height="133" loading="lazy">
          <img src="../../assets/svg/odlo-logo.svg" alt="Logo de Odlo" width="150" height="128" loading="lazy">
        </div>
      </div>

      <div class="team-section transition-section" id="target4" :class="{ visible: isElementVisible[3] }">
        <h2>Rencontrez notre équipe</h2>
        <p>Notre philosophie est simple — embaucher une équipe diverse, passionnée et
          <span class="br"></span>
          créer une culture qui donne les moyens de réaliser ses rêves.
        </p>
        <div class="team-member-container">
          <div class="team-member">
            <img src="../../assets/webp/team-member-3.png" alt="Nicolas Trevino" width="97" height="97" loading="lazy">
            <p>Nicolas Trevino</p>
            <p>Fondateur et PDG</p>
          </div>
          <div class="team-member">
            <img src="../../assets/webp/team-member-2.png" alt="Drew Cano" width="97" height="97" loading="lazy">
            <p>Drew Cano</p>
            <p>Alpiniste Senior</p>
          </div>
          <div class="team-member">
            <img src="../../assets/webp/team-member-1.png" alt="Lyle Kauffman" width="97" height="97" loading="lazy">
            <p>Lyle Kauffman</p>
            <p>Guide de Montagne</p>
          </div>
          <div class="team-member">
            <img src="../../assets/webp/team-member-4.png" alt="Alisa Hester" width="97" height="97" loading="lazy">
            <p>Alisa Hester</p>
            <p>Chef d'Expédition</p>
          </div>
          <div class="team-member">
            <img src="../../assets/webp/team-member-5.png" alt="Leyton Fields" width="97" height="97" loading="lazy">
            <p>Leyton Fields</p>
            <p>Spécialiste en Sécurité Alpine</p>
          </div>
          <div class="team-member">
            <img src="../../assets/webp/team-member-6.png" alt="Isabelle Fournier" width="97" height="97"
              loading="lazy">
            <p>Isabelle Fournier</p>
            <p>Directeur des Expéditions</p>
          </div>
          <div class="team-member">
            <img src="../../assets/webp/team-member-7.png" alt="Liam Hood" width="97" height="97" loading="lazy">
            <p>Liam Hood</p>
            <p>Directeur de Camp</p>
          </div>
          <div class="team-member">
            <img src="../../assets/webp/team-member-8.png" alt="Rosalee Melvin" width="97" height="97" loading="lazy">
            <p>Rosalee Melvin</p>
            <p>Alpiniste Senior</p>
          </div>
        </div>
      </div>


      <div class="services-section transition-section" id="target5" :class="{ visible: isElementVisible[4] }">
        <h2>Nos services à ALPES</h2>
        <p>Nos valeurs communes guident notre équipe à grimper toujours plus haut.
        </p>
        <div class="services">
          <div class="service">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 3.46776C17.4817 4.20411 18.5 5.73314 18.5 7.5C18.5 9.26686 17.4817 10.7959 16 11.5322M18 16.7664C19.5115 17.4503 20.8725 18.565 22 20M2 20C3.94649 17.5226 6.58918 16 9.5 16C12.4108 16 15.0535 17.5226 17 20M14 7.5C14 9.98528 11.9853 12 9.5 12C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3C11.9853 3 14 5.01472 14 7.5Z"
                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Qui Sommes-Nous ?</p>
            <p>AlPeak a été fondé par des passionnés de montagne avec des années d’expérience en alpinisme.</p>
          </div>
          <div class="service">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 15.0903V22L11.7029 20.1188C11.8126 20.0749 11.8675 20.053 11.9242 20.0443C11.9744 20.0366 12.0256 20.0366 12.0758 20.0443C12.1325 20.053 12.1874 20.0749 12.2971 20.1188L17 22V15.0903M19.5 9.5C19.5 13.6421 16.1421 17 12 17C7.85786 17 4.5 13.6421 4.5 9.5C4.5 5.35786 7.85786 2 12 2C16.1421 2 19.5 5.35786 19.5 9.5Z"
                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Accompagnateurs certifiés</p>
            <p>Notre équipe se compose de guides certifiés, prêts à vous accompagner dans chaque étape de votre
              ascension.</p>
          </div>
          <div class="service">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2" stroke="black"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Expéditions guidées</p>
            <p>Pour tous les niveaux, de l’initiation aux ascensions avancées.</p>
          </div>
          <div class="service">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Formations et stages</p>
            <p>Apprenez les techniques d’alpinisme et de sécurité en montagne.</p>
          </div>
          <div class="service">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M12.8 17.5H17.7C17.98 17.5 18.12 17.5 18.227 17.4455C18.3211 17.3976 18.3976 17.3211 18.4455 17.227C18.5 17.12 18.5 16.98 18.5 16.7V14.3C18.5 14.02 18.5 13.88 18.4455 13.773C18.3976 13.6789 18.3211 13.6024 18.227 13.5545C18.12 13.5 17.98 13.5 17.7 13.5H12.8C12.52 13.5 12.38 13.5 12.273 13.5545C12.1789 13.6024 12.1024 13.6789 12.0545 13.773C12 13.88 12 14.02 12 14.3V16.7C12 16.98 12 17.12 12.0545 17.227C12.1024 17.3211 12.1789 17.3976 12.273 17.4455C12.38 17.5 12.52 17.5 12.8 17.5ZM6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Locations d’équipement</p>
            <p>Tout ce dont vous avez besoin pour votre aventure.</p>
          </div>
          <div class="service">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
                stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Conseils personnalisés</p>
            <p>Pour planifier votre itinéraire et préparer votre ascension.</p>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<style scoped>
/***** Animation de chargement de la page *****/
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


/***** Animation de chargement du header *****/
.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-up-enter-active {
  transition: opacity 0.7s ease, transform 0.7s ease;
  /* transition: nom | durée de transition | animation /| délai */
}

.fade-slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}


/***** Animation de chargement de section *****/
.transition-section {
  opacity: 0;
  transform: translateY(250px);
  transition: all 0.9s ease-in-out;
}

.transition-section.visible {
  opacity: 1;
  transform: translateY(0);
}


/****** Global ******/
.about-page {
  padding-bottom: 4rem;
}

h1 {
  font-size: var(--fs-heading);
  padding: 0 1rem;
}

h2 {
  padding: 1rem 0;
}


/****** Header ******/
.about-header {
  display: flex;
  justify-content: center;
  width: 100%;
}

.about-header figure {
  width: 90%;
}

.about-header figure img {
  width: 100%;
  height: auto;
  border-radius: var(--radius);
}

figure figcaption {
  color: var(--color-text-info);
  padding-top: 5px;
}


/****** Our company ******/
.our-company {
  padding: 6rem 0 5rem;
  text-align: center;
}

.our-company p {
  font-size: 20px;
  color: var(--color-text-info);
  padding: 0 1rem;
}


/****** Summit section ******/
.summit-section {
  display: flex;
  flex-direction: column;
  padding: 4rem 20px;
  margin-bottom: 15rem;
  background-color: var(--color-background-soft);
}

.figures-section {
  display: flex;
  flex-direction: column;
}

.summit-section h2 {
  text-align: center;
  padding-bottom: 3rem;
}

.figures {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 0 auto;
}

.figures-item {
  max-width: 300px;
  text-align: center;
}

.figures-item span {
  display: inline-block;
  font-size: 40px;
  font-weight: var(--fw-strong);
  color: var(--c-blue);
  transition: transform .3s;
}

.figures-item span:hover,
.figures-item span:focus {
  transform: scale(1.1);
}

.figures p {
  font-weight: var(--fw-highlight);
}

.summit-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
}

.summit-img-container img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: var(--radius);
}


/****** Equipment section ******/
.equipment-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0rem 20px 15rem;
  margin: 0 2rem;
}

.equipment-section p {
  font-size: 18px;
  padding-bottom: 3rem;
}

.equipment-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem 5rem;
}


/*********** Team section ***********/
.team-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0rem 20px 15rem;
}

.team-section p {
  padding: 0 1rem;
}

.br {
  display: none;
}

.team-member-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1440px;
  gap: 3rem 2rem;
  padding-top: 3rem;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 216px;
  background-color: var(--color-background-soft);
  border-radius: var(--radius);
  transition: transform 0.3s ease;
}

.team-member img {
  transition: scale .3s;
}

.team-member img:hover,
.team-member img:focus {
  scale: 1.10;
}

.team-member p:nth-child(2) {
  font-weight: var(--fw-highlight);
  padding-top: 16px;
}

/* cible un .team-member s'il est immédiatement suivi (grâce à +) par un autre .team-member qui est en état de survol (:hover) */
/* si un membre d'équipe est survolé, le membre qui suit immédiatement sera affecté. */
.team-member:has(+ .team-member:hover),
.team-member:hover+.team-member {
  transform: translateY(10px);
}


/*********** Services section ***********/
.services-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0rem 20px 10rem;
}

.services-section p {
  padding: 0 1rem;
}

.services {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  gap: 3rem 2rem;
  padding-top: 3rem;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 216px;
  border-radius: var(--radius);
}

.service p:nth-child(2) {
  font-weight: var(--fw-highlight);
  padding-top: 16px;
}

.service svg {
  outline: 1px solid var(--color-divider);
  padding: 10px;
  border-radius: var(--radius);
  transition: scale 500ms;
}

.service svg:hover,
.service svg:focus {
  scale: 1.10;
}



/****** Media Queries ******/
@media (width > 500px) {
  .figures {
    grid-template-columns: repeat(2, minmax(150px, 300px));
  }
}

@media (width > 695px) {
  .br {
    display: block;
  }
}

@media (width > 1024px) {
  .summit-section {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }

  .figures-section {
    width: 50%;
    max-width: 590px;
    order: 2;
  }

  .summit-section h2 {
    padding-top: 3rem;
  }

  .figures {
    grid-template-columns: repeat(2, minmax(150px, 230px));
  }

  .summit-img-container {
    width: 40%;
    max-width: 470px;
    padding-top: 0rem;
  }

  .summit-img-container img {
    max-width: 420px;
  }

}
</style>