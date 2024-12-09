<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserNavBar from '../../components/User/UserNavBar.vue';
const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

<template>
  <transition name="fade-slide">
    <div v-if="show">
      <UserNavBar navColor="black" />
      <section v-once class="todo-section">
        <h1>À faire</h1>
        <div class="activities">
          <div class="activity">
            <div class="activity-content">
              <h2>Ascension du Mont Blanc</h2>
              <p>Rejoignez-nous pour une aventure inoubliable en gravissant le Mont-Blanc, le plus haut sommet d’Europe,
                avec nos guides expérimentés qui vous assureront une ascension en toute sécurité et pleine de défis.
              </p>
              <div class="features-container">
                <ul class="features">
                  <li>Encadrement par des guides expérimentés</li>
                  <li>Matériel de haute qualité fourni</li>
                  <li>Itinéraires adaptés à tous les niveaux </li>
                  <li>Hébergements en refuge inclus</li>
                  <li>Une expérience inoubliable en haute altitude</li>
                </ul>
              </div>
              <RouterLink to="#" aria-label="En savoir plus">En savoir plus</RouterLink>
            </div>
            <div class="activity-img">
              <img width="343" height="400" src="../../assets/webp/alpes-mont-blanc.webp" alt="Vue du Mont Blanc">
            </div>
          </div>
          <div class="activity">
            <div class="activity-content">
              <h2>Alpinisme</h2>
              <p>Partez à l’assaut des plus hauts sommets des Alpes avec des guides expérimentés. Une aventure
                inoubliable pour les alpinistes chevronnés et les aventuriers passionnés.
              </p>
              <div class="features-container">
                <ul class="features">
                  <li>Expéditions guidées vers les plus hauts sommets</li>
                  <li>Équipement spécialisé fourni</li>
                  <li>Formation et préparation avant l’ascension</li>
                  <li>Vues imprenables depuis les cimes</li>
                  <li>Camps de base pour le repos et l’acclimatation</li>
                </ul>
              </div>
              <RouterLink to="#" aria-label="En savoir plus">En savoir plus</RouterLink>
            </div>
            <div class="activity-img">
              <img width="343" height="400" src="../../assets/webp/alpes-alpinisme.webp" alt="Vue du Mont Blanc">
            </div>
          </div>
          <div class="activity">
            <div class="activity-content">
              <h2>Escalade Vertigineuse</h2>
              <p>Défiez les parois rocheuses des Alpes avec des itinéraires d’escalade adaptés à tous les niveaux.
                Parfait pour les amateurs de sensations fortes et d’aventure.
              </p>
              <div class="features-container">
                <ul class="features">
                  <li>Voies d’escalade de différents niveaux de difficulté</li>
                  <li>Équipement de sécurité fourni</li>
                  <li>Instructeurs expérimentés pour les débutants</li>
                  <li>Paysages à couper le souffle depuis les sommets</li>
                  <li>Possibilité d’escalade en solo ou en groupe</li>
                </ul>
              </div>
              <RouterLink to="#" aria-label="En savoir plus">En savoir plus</RouterLink>
            </div>
            <div class="activity-img">
              <!-- <img width="343" height="400" src="../../assets/webp/grimper-alpes.jpg" alt="Vue du Mont Blanc"> -->
              <img width="343" height="400" src="../../assets/webp/grimper-les-alpes-2.jpg" alt="Vue du Mont Blanc">
            </div>
          </div>
          <div class="activity">
            <div class="activity-content">
              <h2>Randonnée Panoramique</h2>
              <p>Explorez des sentiers pittoresques offrant des vues à couper le souffle sur les Alpes. Parfait pour les
                amateurs de nature et les passionnés de randonnée.
              </p>
              <div class="features-container">
                <ul class="features">
                  <li>Sentiers balisés adaptés à tous les niveaux</li>
                  <li>Vues panoramiques sur les sommets alpins</li>
                  <li>Points de repos et de pique-nique en chemin</li>
                  <li>Faune et flore diversifiées à observer</li>
                  <li>Guides disponibles pour des randonnées organisées</li>
                </ul>
              </div>
              <RouterLink to="#" aria-label="En savoir plus">En savoir plus</RouterLink>
            </div>
            <div class="activity-img">
              <img width="343" height="400" src="../../assets/webp/randonnee-the-alps.jpg" alt="Vue du Mont Blanc">
            </div>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<style scoped>
/***** Animation de chargement *****/
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

/****** Général ******/
.todo-section h1 {
  font-size: var(--fs-heading);
  text-align: center;
  padding-bottom: 5rem;
}

.activities {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
}

.activities p {
  padding: 1rem 0rem;
}

.activity {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10rem;
}

.features-container {
  text-align: left;
}

ul li {
  position: relative;
  min-height: 45px;
  color: var(--color-text-info);
  padding-top: 10px;
  padding-left: 35px;
  overflow: hidden;
  z-index: 0;
}

/****** Checkmarks *******/
ul li::before {
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
  width: 100%;
  height: 400px;
  margin-top: 2rem;
  overflow: hidden;
  border-radius: var(--radius);
}

.activity-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  border-radius: var(--radius);

  &:hover {
    transform: scale(1.05);
  }
}

.activity:nth-child(2) img {
  object-position: center calc(100% + 110px);
  /* object-position: [horizontal] [vertical]; */
}


/******** MEDIA QUERIES ********/
@media (width > 600px) {
  .activities {
    padding: 1rem 2rem;
  }

  .activity:nth-child(2) img {
    object-position: center calc(100% + 200px);
  }
}

@media (width > 800px) {
  .activities {
    padding: 1rem 3rem;
  }

  .activity-img {
    height: 500px;
  }

  .activity:nth-child(2) img {
    object-position: center calc(100% + 270px);
  }
}

@media (width > 1050px) {
  .activity {
    flex-direction: row;
    gap: 8rem;
    max-width: 1171px;
  }

  .activity-content {
    width: 700px;
  }

  .activity-img {
    max-width: 550px;
    height: 600px;
    margin-top: 0rem;
  }

  .activity:nth-child(2) img {
    object-position: center calc(100% + 210px);
  }
}
</style>