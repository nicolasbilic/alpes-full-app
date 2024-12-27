<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import Dropdown from "./Dropdown.vue";

const props = defineProps({
  navColor: {
    type: String,
    default: "white",
  },
});
const navColorClass = computed(() => {
  return props.navColor === "black" ? "secondary-nav" : "primary-nav";
});

// Burger Menu
const BM = ref(false);
const toggleBM = () => {
  BM.value = !BM.value;
  // Add or remove the class active-burger-menu to the div with class burger-menu
  document
    .getElementsByClassName("burger-menu")[0]
    .classList.toggle("active-burger-menu");
};

const closeBM = () => {
  BM.value = false;
  document
    .getElementsByClassName("burger-menu")[0]
    .classList.remove("active-burger-menu");
};

// elements of dropdown menu
const services = ref([
  { title: "À faire", link: "/a-faire" },
  { title: "Résidences", link: "/residences" },
]);

const active = ref("active");

const isHovered = ref(false); // état du survol simulé

function handleClick() {
  toggleBM();
  isHovered.value = true; // Active l'effet de "survol"

  // Désactive l'effet après un court délai
  setTimeout(() => {
    isHovered.value = false;
  }, 300); // Ajustez le délai en fonction de l'effet CSS
}
</script>

<template>
  <header>
    <nav :class="navColorClass">
      <div class="brand-container" :class="navColorClass">
        <RouterLink class="brand" to="/" title="Accueil Alpes">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="inner-path"
              d="M24.6123 26.2207L27.1567 29.5103"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="inner-path"
              d="M5.53516 32.8398L17.8923 17.5273L24.612 26.2197L31.6226 17.5273L43.4642 32.8398"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          ALPES
        </RouterLink>
      </div>
      <div class="links-container">
        <ul class="links" :class="navColorClass">
          <li>
            <RouterLink :active-class="active" to="/" aria-label="Accueil">
              Accueil
            </RouterLink>
          </li>
          <li>
            <Dropdown
              :active-class="active"
              title="Expériences"
              :items="services"
            />
          </li>
          <li>
            <RouterLink
              :active-class="active"
              to="/reservations"
              aria-label="Réservations"
            >
              Réservations
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :active-class="active"
              to="/a-propos"
              aria-label="À propos"
            >
              À propos
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :active-class="active"
              to="/contact"
              aria-label="Contact"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="booking-container">
        <RouterLink to="/reservations" aria-label="Réservations">
          JE RÉSERVE
        </RouterLink>
      </div>
      <!------------- Burger Button ------------->
      <a
        id="openBtn"
        @click="handleClick"
        :class="{ 'hamburger-white': BM, 'hover-effect': isHovered }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke-width="2.0"
          stroke="currentColor"
        >
          <title>Ouvrir le menu</title>
          <path
            class="bar top"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5"
          />
          <path
            class="bar middle"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 12.75h16.5"
          />
          <path
            class="bar bottom"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 18.75h16.5"
          />
        </svg>
      </a>
      <!--- NavMenu Mobile --->
      <div class="burger-menu">
        <ul>
          <li>
            <RouterLink
              :active-class="active"
              to="/"
              @click="closeBM"
              aria-label="Accueil"
            >
              Accueil
            </RouterLink>
          </li>
          <li>
            <Dropdown
              title="Expériences"
              :items="services"
              :active-class="active"
            />
          </li>
          <li>
            <RouterLink
              :active-class="active"
              to="/reservations"
              @click="closeBM"
              aria-label="Réservations"
            >
              Réservations
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :active-class="active"
              to="/a-propos"
              @click="closeBM"
              aria-label="À propos"
            >
              À propos
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :active-class="active"
              to="/contact"
              @click="closeBM"
              aria-label="Contact"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/******* Global *******/
header {
  display: flex;
  justify-content: center;
  max-height: 70px;
  margin-bottom: 48px;
}

nav {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  width: 100%;
  max-width: 1440px;
  padding: 10px 0;
}

/******* Liens *******/
.links-container {
  display: none;
  justify-content: center;
  width: 60%;
}

.links {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.links li a {
  font-size: 15px;
}

.links a:hover,
.links a:focus,
.burger-menu a:hover,
.burger-menu a:focus {
  opacity: 0.8;
}

.links a {
  position: relative;
}

/* stalactites */
.links a::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%) scale(0) rotateX(180deg);
  width: 90px;
  height: 30px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><path d="M0 30 L5 10 L10 20 L15 5 L20 25 L25 15 L30 30 L35 10 L40 20 L45 5 L50 25 L55 15 L60 30 L65 10 L70 20 L75 5 L80 25 L85 15 L90 30 L95 10 L100 30 Z" fill="white"/></svg>')
    no-repeat center;
  background-size: contain;
  transition: transform 0.3s ease;
}

.links a:hover::after {
  transform: translateX(-50%) scale(0.6) rotateX(180deg);
}

/******* Logo *******/
.brand-container {
  width: 20%;
  padding-left: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-accent-light);
  font-weight: var(--font-weight-strong);
  font-size: 16px;
  margin-right: auto;
}

nav .secondary-nav .brand:hover::after {
  transform: translateX(-50%) scale(0) rotateX(180deg);
}

.brand svg {
  min-width: 50px;
  min-height: 50px;
}

/******* Réservation button *******/
nav .booking-container {
  display: none;
  align-items: center;
  width: 20%;
  padding-left: 20px;
}

.booking-container a {
  color: var(--color-text-accent-light);
  font-weight: var(--font-weight-strong);
  padding: 5px 15px;
  outline: 2px solid var(--color-outline-light);
  border-radius: var(--radius);
}

.booking-container a:hover {
  background-color: var(--color-background-dark);
}

/******* Primary Nav (white) *******/
nav .primary-nav li a {
  color: var(--c-white-mute);
}

nav .primary-nav li a.active {
  color: var(--color-text-accent-light);
}

nav .primary-nav li a.active::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 50%;
  width: 90px;
  height: 30px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><path d="M0 30 L5 10 L10 20 L15 5 L20 25 L25 15 L30 30 L35 10 L40 20 L45 5 L50 25 L55 15 L60 30 L65 10 L70 20 L75 5 L80 25 L85 15 L90 30 L95 10 L100 30 Z" fill="white"/></svg>')
    no-repeat center;
  background-size: contain;
  transform: translateX(-50%) scale(0.6) rotateX(180deg);
}

/******* Secondary Nav (black) *******/
nav .secondary-nav li a {
  color: var(--color-text-primary);
}

nav .secondary-nav a:hover,
nav .secondary-nav a:focus {
  color: var(--color-background-dark);
}

nav .secondary-nav a::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%) scale(0) rotateX(180deg);
  width: 90px;
  height: 30px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><path d="M0 30 L5 10 L10 20 L15 5 L20 25 L25 15 L30 30 L35 10 L40 20 L45 5 L50 25 L55 15 L60 30 L65 10 L70 20 L75 5 L80 25 L85 15 L90 30 L95 10 L100 30 Z" fill="black"/></svg>')
    no-repeat center;
  background-size: contain;
  transition: transform 0.3s ease;
}

nav .secondary-nav a:hover::after {
  transform: translateX(-50%) scale(0.6) rotateX(180deg);
}

.secondary-nav .brand {
  color: var(--color-text-primary);
}

.secondary-nav .brand .inner-path {
  stroke: var(--color-text-primary);
}

.secondary-nav .booking-container a {
  color: var(--color-text-primary);
  outline: 2px solid var(--color-outline-dark);
}

.secondary-nav .booking-container a:hover {
  color: var(--color-text-accent-light);
  background-color: var(--color-background-dark);
}

.secondary-nav #openBtn svg .bar {
  stroke: var(--color-text-primary);
}

.secondary-nav li a.active {
  color: var(--color-background-dark);
}

.secondary-nav li a.active::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 50%;
  width: 90px;
  height: 30px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><path d="M0 30 L5 10 L10 20 L15 5 L20 25 L25 15 L30 30 L35 10 L40 20 L45 5 L50 25 L55 15 L60 30 L65 10 L70 20 L75 5 L80 25 L85 15 L90 30 L95 10 L100 30 Z" fill="black"/></svg>')
    no-repeat center;
  background-size: contain;
  transform: translateX(-50%) scale(0.6) rotateX(180deg);
}

/******* Burger Menu *******/
nav #openBtn {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 20px;
  z-index: 101;
  cursor: pointer;
}

svg .bar {
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

#openBtn:hover svg .top,
#openBtn.hover-effect svg .top {
  transform: translateX(-40%);
}

#openBtn:hover svg .middle,
#openBtn.hover-effect svg .middle {
  opacity: 0;
}

#openBtn:hover svg .bottom,
#openBtn.hover-effect svg .bottom {
  transform: translateX(40%);
}

.burger-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  transform: translateY(100%);
  transition: transform 0.65s ease-in-out;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to bottom, #396180, #1e4265);
  z-index: 100;
}

.burger-menu.active-burger-menu {
  transform: translateY(0);
}

.burger-menu ul {
  text-align: center;
}

.burger-menu li:nth-child(2) {
  font-size: 18px;
}

.burger-menu a {
  position: relative;
  display: block;
  font-size: 18px;
  color: var(--c-white-mute);
  padding: 18px 0px;
}

nav .burger-menu li a.active::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 50%;
  width: 90px;
  height: 30px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><path d="M0 30 L5 10 L10 20 L15 5 L20 25 L25 15 L30 30 L35 10 L40 20 L45 5 L50 25 L55 15 L60 30 L65 10 L70 20 L75 5 L80 25 L85 15 L90 30 L95 10 L100 30 Z" fill="white"/></svg>')
    no-repeat center;
  background-size: contain;
  transform: translateX(-50%) scale(0) rotateX(180deg);
}

.burger-menu a:hover {
  background-color: rgb(86, 127, 155);
}

.burger-menu a.active {
  color: var(--color-text-accent-light);
}

.secondary-nav .burger-menu li a.active {
  color: var(--color-text-accent-light);
}

.secondary-nav #openBtn.hamburger-white svg .bar {
  stroke: var(--color-background);
  transition: stroke 0.3s ease-in-out;
}

/******* Media Queries *******/
@media (width > 1099px) {
  .brand-container {
    padding-left: 100px;
  }

  nav .brand {
    font-size: var(--text-20px-size);
  }

  .links-container {
    display: flex;
  }

  nav .booking-container {
    display: flex;
  }

  nav #openBtn {
    display: none;
  }

  .burger-menu {
    display: none;
  }
}
</style>
