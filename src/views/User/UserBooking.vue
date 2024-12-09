<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserNavBar from '../../components/User/UserNavBar.vue';
import TidyCalWidgetBase from '../../components/TidyCalWidgetBase.vue';
import TidyCalWidgetGrimpeur from '../../components/TidyCalWidgetGrimpeur.vue';
import TidyCalWidgetLegende from '../../components/TidyCalWidgetLegende.vue';
const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

<template>
  <transition name="fade-slide">
    <div v-if="show">
      <UserNavBar navColor="black" />
      <div class="price-page">

        <!---------- Forfaits ---------->
        <section class="package-section">
          <h1>Forfaits</h1>
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
                <TidyCalWidgetBase />
              </div>
            </div>
            <div class="package-card-container">
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
                  <svg width="60" height="46" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.21934 42.4487C9.06199 43.262 9.59378 44.0489 10.4071 44.2063C11.2205 44.3636 12.0074 43.8318 12.1647 43.0185L9.21934 42.4487ZM50.5829 3.79132C51.4038 3.68035 51.9794 2.92487 51.8684 2.10391C51.7574 1.28295 51.0019 0.707389 50.181 0.818364L50.5829 3.79132ZM4.78603 32.3309C4.35916 31.6209 3.43756 31.3914 2.72758 31.8183C2.0176 32.2452 1.78809 33.1668 2.21496 33.8768L4.78603 32.3309ZM8.97548 42.21L7.68995 42.9829L7.69067 42.9841L8.97548 42.21ZM12.592 43.2607L11.9791 41.8917L11.9778 41.8922L12.592 43.2607ZM23.5111 40.0157C24.2672 39.6772 24.6057 38.7898 24.2672 38.0337C23.9287 37.2776 23.0413 36.939 22.2852 37.2776L23.5111 40.0157ZM10.692 42.7336C12.1647 43.0185 12.1647 43.0188 12.1646 43.0191C12.1646 43.0191 12.1646 43.0193 12.1646 43.0193C12.1646 43.0193 12.1646 43.019 12.1647 43.0185C12.1649 43.0174 12.1654 43.0153 12.166 43.0122C12.1672 43.0059 12.1693 42.9954 12.1722 42.9809C12.1781 42.9518 12.1875 42.9065 12.2004 42.8457C12.2262 42.7241 12.2663 42.5405 12.3221 42.3009C12.4337 41.8218 12.6076 41.1194 12.8539 40.2422C13.3469 38.4864 14.1279 36.0372 15.2761 33.2783C17.5821 27.7376 21.3224 21.0616 27.0826 16.2003L25.1477 13.9077C18.8751 19.2014 14.9038 26.3652 12.5064 32.1256C11.303 35.0172 10.4843 37.5838 9.96562 39.4312C9.70608 40.3556 9.52112 41.1017 9.4003 41.6205C9.33987 41.88 9.29545 42.0828 9.26573 42.2229C9.25087 42.2929 9.23968 42.3472 9.23201 42.3851C9.22817 42.404 9.22521 42.4189 9.2231 42.4295C9.22205 42.4348 9.22121 42.4391 9.22059 42.4423C9.22027 42.4439 9.22001 42.4452 9.21981 42.4463C9.2197 42.4468 9.21959 42.4474 9.21953 42.4477C9.21943 42.4482 9.21934 42.4487 10.692 42.7336ZM27.0826 16.2003C38.8951 6.23119 48.2836 4.10213 50.5829 3.79132L50.181 0.818364C47.3224 1.20477 37.4008 3.56674 25.1477 13.9077L27.0826 16.2003ZM2.21496 33.8768L7.68995 42.9829L10.261 41.437L4.78603 32.3309L2.21496 33.8768ZM7.69067 42.9841C8.83293 44.8799 11.2192 45.521 13.2062 44.6292L11.9778 41.8922C11.2767 42.2069 10.5649 41.9414 10.2603 41.4358L7.69067 42.9841ZM13.2049 44.6298L23.5111 40.0157L22.2852 37.2776L11.9791 41.8917L13.2049 44.6298Z"
                      fill="#080808" />
                  </svg>
                  <span>Le plus populaire !</span>
                </div>
                <TidyCalWidgetGrimpeur />
              </div>

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
                    <li>Reportage photo</li>
                  </ul>
                </div>
                <TidyCalWidgetLegende />
              </div>
            </div>
          </div>
        </section>
        <figure>
          <img src="../../assets/webp/snowy-mountain-alps.webp" alt="Les Alpes enneigées" width="745" height="447"
            loading="lazy">
        </figure>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/****** Transition de chargement ******/
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

/****** Global ******/
.price-page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 48px;
}

/****** Forfaits section ******/
.package-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.package-section h1 {
  font-size: var(--fs-heading);
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
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background: var(--color-background);
  border-radius: var(--radius);
}

.package-card .price-tag {
  font-size: 45px;
  font-weight: var(--fw-strong);
  padding-bottom: 10px;
}

.package-card .pass-type {
  font-size: 20px;
  font-weight: var(--fw-highlight);
  margin-bottom: 20px;
}

.package-card .features-container {
  text-align: left;
}

.features li {
  position: relative;
  color: var(--color-text-info);
  min-height: 50px;
  padding-left: 35px;
  padding-top: 13px;
  overflow: hidden;
}

/****** Checkmarks ******/
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


.features-container {
  position: relative;
}

.features-container svg {
  position: absolute;
  top: -192px;
  right: 125px;
}

.features-container span {
  position: absolute;
  top: -204px;
  right: -25px;
  font-weight: var(--fw-highlight);
}

figure {
  display: none;
  padding: 3rem 0;
}

figure img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
}


/****** Media queries ******/
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

  figure {
    display: block;
  }

  figure img {
    max-width: 745px;
  }
}

@media (width > 1285px) {
  .package-card-container {
    grid-column: span 2;
  }

  figure img {
    max-width: 1148px;
  }
}
</style>