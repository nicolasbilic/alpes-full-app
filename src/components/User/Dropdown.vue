<script setup lang="ts">
import { ref } from "vue";

defineProps(['title', 'items']);
const isDropdownOpen = ref(false);
let timeout: ReturnType<typeof setTimeout>;

const showDropdown = () => {
  clearTimeout(timeout); // Annule la fermeture si elle est en cours
  isDropdownOpen.value = true;
};

const hideDropdown = () => {
  timeout = setTimeout(() => {
    isDropdownOpen.value = false;
  }, 300);
};
const active = ref('active');
</script>

<template>
  <div class="menu-wrapper">
    <div class="menu-item" @mouseover="showDropdown" @mouseleave="hideDropdown">
      <a href="#">
        {{ title }}
      </a>
      <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="inner-path"
          d="M6.40362 0.349316C6.28652 0.24067 6.12812 0.179688 5.963 0.179688C5.79788 0.179688 5.63948 0.24067 5.52237 0.349316L3.27862 2.41432L1.06612 0.349316C0.949022 0.24067 0.790615 0.179688 0.625499 0.179688C0.460383 0.179688 0.301975 0.24067 0.184874 0.349316C0.126294 0.403545 0.0797971 0.468062 0.0480667 0.539147C0.0163363 0.610231 0 0.686476 0 0.763483C0 0.84049 0.0163363 0.916735 0.0480667 0.98782C0.0797971 1.0589 0.126294 1.12342 0.184874 1.17765L2.83487 3.65098C2.89298 3.70566 2.9621 3.74905 3.03826 3.77867C3.11443 3.80828 3.19612 3.82353 3.27862 3.82353C3.36113 3.82353 3.44282 3.80828 3.51898 3.77867C3.59515 3.74905 3.66427 3.70566 3.72237 3.65098L6.40362 1.17765C6.4622 1.12342 6.5087 1.0589 6.54043 0.98782C6.57216 0.916735 6.5885 0.84049 6.5885 0.763483C6.5885 0.686476 6.57216 0.610231 6.54043 0.539147C6.5087 0.468062 6.4622 0.403545 6.40362 0.349316Z"
          fill="white" />
      </svg>
      <transition name="fade" appear>
        <div class="sub-menu" v-if="isDropdownOpen">
          <div class="menu-item" v-for="(item, index) in items" :key="index">
            <RouterLink :active-class="active" :to="item.link">{{ item.title }}</RouterLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/****** Effet d'apparition du déroulant ******/
.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/****** Global ******/
.menu-wrapper {
  position: relative;
}

nav .menu-item {
  position: relative;
  z-index: 3;
  cursor: pointer;
  /* padding-bottom: 10px; */
}

nav .menu-item a:hover,
nav .menu-item a:focus {
  opacity: 0.8;
}

nav .menu-item a::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%) scale(0) rotateX(180deg);
  width: 90px;
  height: 30px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><path d="M0 30 L5 10 L10 20 L15 5 L20 25 L25 15 L30 30 L35 10 L40 20 L45 5 L50 25 L55 15 L60 30 L65 10 L70 20 L75 5 L80 25 L85 15 L90 30 L95 10 L100 30 Z" fill="white"/></svg>') no-repeat center;
  background-size: contain;
  transition: transform 0.3s ease;
}

nav .menu-item a:hover::after {
  transform: translateX(-50%) scale(0.6) rotateX(180deg);
}


/****** Active state ******/
nav .menu-item a.active::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 50%;
  width: 90px;
  height: 30px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><path d="M0 30 L5 10 L10 20 L15 5 L20 25 L25 15 L30 30 L35 10 L40 20 L45 5 L50 25 L55 15 L60 30 L65 10 L70 20 L75 5 L80 25 L85 15 L90 30 L95 10 L100 30 Z" fill="black"/></svg>') no-repeat center;
  background-size: contain;
  transform: translateX(-50%) scale(0.6) rotateX(180deg);
}

nav .burger-menu .menu-item a.active::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 50%;
  width: 90px;
  height: 30px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><path d="M0 30 L5 10 L10 20 L15 5 L20 25 L25 15 L30 30 L35 10 L40 20 L45 5 L50 25 L55 15 L60 30 L65 10 L70 20 L75 5 L80 25 L85 15 L90 30 L95 10 L100 30 Z" fill="black"/></svg>') no-repeat center;
  background-size: contain;
  transform: translateX(-50%) scale(0) rotateX(180deg);
}

nav .menu-item svg {
  margin-left: 10px;
  margin-bottom: 2px;
  cursor: pointer;
}

/******* Secondary Nav (black) *******/
nav .secondary-nav .menu-item a {
  color: var(--color-text-primary);
}

nav .secondary-nav .menu-item .inner-path {
  fill: var(--color-background-dark);
}

nav .secondary-nav .menu-item a:hover,
nav .secondary-nav .menu-item a:focus {
  color: var(--color-background-dark);
}

nav .secondary-nav .menu-item a::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%) scale(0) rotateX(180deg);
  width: 90px;
  height: 30px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><path d="M0 30 L5 10 L10 20 L15 5 L20 25 L25 15 L30 30 L35 10 L40 20 L45 5 L50 25 L55 15 L60 30 L65 10 L70 20 L75 5 L80 25 L85 15 L90 30 L95 10 L100 30 Z" fill="black"/></svg>') no-repeat center;
  background-size: contain;
  transition: transform 0.3s ease;
}

nav .secondary-nav .menu-item a:hover::after {
  transform: translateX(-50%) scale(0.6) rotateX(180deg);
}

nav .secondary-nav .sub-menu .menu-item a:hover::after {
  transform: translateX(-50%) scale(0) rotateX(180deg);
}

/****** Sub-menu ******/
nav .menu-item .sub-menu {
  position: absolute;
  width: max-content;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 0px;
  outline: 1px solid var(--color-outline-dark);
  background-color: var(--color-background);
  border-radius: var(--radius);
  overflow: hidden;
}

nav .menu-item .sub-menu .menu-item {
  padding: 0;
}

nav .menu-item .sub-menu .menu-item:hover {
  background-color: var(--color-dropdown-hover);
}

nav .menu-item .sub-menu .menu-item a {
  display: block;
  color: var(--color-text-primary);
  font-weight: var(--font-weight-highlight);
  width: 100%;
  height: 100%;
  padding: 8px 20px;

}

nav .sub-menu .menu-item a:hover,
nav .sub-menu .menu-item a:focus {
  opacity: 1;
}

nav .sub-menu .menu-item a:hover::after {
  transform: translateX(-50%) scale(0) rotateX(180deg);
}

/******* Burger Menu *******/
nav .burger-menu .menu-item:hover {
  background-color: rgb(86, 127, 155)
}

nav .menu-item a {
  position: relative;
  color: var(--c-white-mute);
}

nav .burger-menu .menu-item a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 18px 0;
}

nav .burger-menu .menu-item a:hover {
  background-color: rgb(86, 127, 155)
}

nav .burger-menu .menu-item svg {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  display: block;
  margin-left: 65px;
  margin-top: 2px;
  cursor: pointer;
}

nav .burger-menu .menu-item a:hover::after {
  transform: translateX(-50%) scale(0) rotateX(180deg);
}

nav .burger-menu .menu-item a:hover,
nav .burger-menu .menu-item a:focus {
  opacity: 0.8;
}

nav .burger-menu .menu-item .sub-menu {
  position: absolute;
  width: max-content;
  top: 10px;
  left: calc(50% + 160px);
  transform: translateX(-50%);
  text-align: center;
  padding: 0px;
  outline: 1px solid var(--color-outline-dark);
  background-color: var(--color-background);
  border-radius: var(--radius);
  overflow: hidden;
}

nav .burger-menu .menu-item .sub-menu .menu-item a:hover {
  background-color: var(--color-dropdown-hover);
}
</style>