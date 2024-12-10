<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserNavBar from '../../components/User/UserNavBar.vue'
const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

<template>
  <transition name="fade-slide">
    <section v-if="show">
      <UserNavBar navColor="black" />
      <div class="relative-container">
        <div class="centered-container">
          <div class="padding-container">
            <h1 class="animated-text">
              Mentions légales
            </h1>
            <p class="sub-text">
              En vigueur au 06/07/2024
            </p>
          </div>
        </div>
      </div>

      <div class="relative-background">
        <div class="content-container">
          <section>
            <article>
              <p>
                Conformément aux dispositions des Articles 6-III et 19 de la Loi
                n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
                numérique, dite L.C.E.N., il est porté à la connaissance des
                utilisateurs et visiteurs, ci-après l'"Utilisateur", du site
                www.alpes.com , ci-après le "Site", les présentes mentions
                légales.
              </p>
              <p>
                La connexion et la navigation sur le Site par l’Utilisateur implique
                acceptation intégrale et sans réserve des présentes mentions
                légales.
              </p>
              <h2>
                ARTICLE 1 - L'ÉDITEUR
              </h2>
              <p>
                L’édition et la direction de la publication du Site est assurée par
                Nicolas Bilic, contact au 30 Bd Jean Moulin, 83780 Flayosc, dont le
                numéro de téléphone est 0645901345, et l'adresse e-mail
                <b>nicolasbilic.dev@nicolasbilic.com</b>, ci-après l'"Éditeur".
              </p>
              <h2>
                ARTICLE 2 - L'HÉBERGEUR
              </h2>
              <p>
                L'hébergeur du Site est la société VERCEL Inc., dont le siège social
                est situé au Vercel Inc. 340 S Lemon Ave #4133. Walnut, CA 91789,
                dont le numéro de téléphone est (559) 288-7060.
              </p>
              <h2>
                ARTICLE 3 - ACCÈS AU SITE
              </h2>
              <p>
                Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
                force majeure, interruption programmée ou non et pouvant découlant
                d’une nécessité de maintenance. En cas de modification, interruption
                ou suspension du Site, l'Éditeur ne saurait être tenu responsable.
              </p>
              <h2>
                ARTICLE 4 - COLLECTE DES DONNEES
              </h2>
              <p>
                Le Site assure à l'Utilisateur une collecte et un traitement
                d'informations personnelles dans le respect de la vie privée
                conformément à la loi n°78-17 du 6 janvier 1978 relative à
                l'informatique, aux fichiers et aux libertés.
              </p>
              <h3>
                4.1 Nature des données collectées
              </h3>
              <p>
                Le site collecte uniquement l’adresse e-mail des utilisateurs
                lorsqu’ils choisissent de nous contacter via le lien sur le site.
              </p>
              <h3>
                4.2 Finalité de la collecte des données
              </h3>
              <p>
                Les adresses e-mail collectées sont utilisées uniquement pour
                répondre aux demandes de contact des utilisateurs.
              </p>
              <h3>
                4.3 Base légale du traitement
              </h3>
              <p>
                La collecte et le traitement des adresses e-mail sont basés sur le
                consentement de l’utilisateur, exprimé lorsqu’il choisit de nous
                envoyer un e-mail.
              </p>
              <h3>
                4.4 Durée de conservation des données
              </h3>
              <p>
                Les adresses e-mail et les messages associés sont conservés pendant
                le temps nécessaire pour traiter et répondre aux demandes des
                utilisateurs. Elles peuvent être conservées ultérieurement si
                nécessaire pour des raisons de suivi ou de gestion des projets.
              </p>
              <h3>
                4.5 Partage des données
              </h3>
              <p>
                Les adresses e-mail et les messages ne sont pas partagés avec des
                tiers, sauf si cela est nécessaire pour répondre à une demande
                spécifique de l’utilisateur ou si la loi l’exige.
              </p>
              <h3>
                4.6 Droits des utilisateurs
              </h3>
              <p>
                Les utilisateurs ont le droit d’accéder, de rectifier ou de demander
                la suppression de leurs données personnelles. Pour exercer ces
                droits, ils peuvent nous contacter à l’adresse e-mail suivante :
                nicolasbilic.dev@nicolasbilic.com.
              </p>
              <p>
                Les utilisateurs ont également le droit d’introduire une réclamation
                auprès de la Commission Nationale de l’Informatique et des Libertés
                (CNIL) s’ils estiment que leurs droits ne sont pas respectés. Pour
                plus d’informations, ils peuvent visiter le site de la CNIL :
                www.cnil.fr.
              </p>
              <h3>
                4.7 Sécurité des données
              </h3>
              <p>
                Nous prenons les mesures nécessaires pour protéger les données
                personnelles contre tout accès non autorisé, altération ou
                destruction.
              </p>
              <br />
              <p>
                Toute utilisation, reproduction, diffusion, commercialisation,
                modification de toute ou partie du Site, sans autorisation de
                l’Editeur est prohibée et pourra entraîner des actions et poursuites
                judiciaires telles que notamment prévues par le Code de la propriété
                intellectuelle et le Code civil.
              </p>
              <h2>
                ARTICLE 5 - ATTRIBUTION
              </h2>
              <p>
                Le site a utilisé une vidéo provenant de Vecteezy :
                <a href="https://www.vecteezy.com/free-videos/ink-splash" target="_blank">Ink Splash Stock Videos by
                  Vecteezy</a>
              </p>
            </article>
          </section>
        </div>
      </div>
    </section v-if="show" class="section-container">
  </transition>
</template>

<style scoped>
/****** Transition de la page au chargement ******/
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
.relative-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;
}

.centered-container {
  text-align: center;
  padding: 1.25rem;
}

.padding-container {
  text-align: center;
  padding: 1.25rem;
}

.relative-container h1 {
  font-size: 1.625rem;
  font-weight: bold;
  color: #202020;
}

.sub-text {
  font-size: 0.875rem;
  opacity: 0.75;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.relative-background {
  position: relative;
  padding: 0 1.5rem;
}

.content-container {
  margin: 0 auto;
  max-width: 40rem;
}

article {
  padding-bottom: 5rem;
}

article h2 {
  font-size: var(--text-20px-size);
  color: #202020;
  margin: 30px 0 15px;
}

article h3 {
  font-size: 1.25rem;
  color: #202020;
  margin: 20px 0 10px;
}

article p {
  padding-bottom: 10px;
}

/****** MEDIA QUERIES ******/
@media screen and (min-width: 700px) {
  .relative-container {
    padding-bottom: 3rem;
  }

  .relative-container h1 {
    font-size: var(--heading-size);
  }

  article h2 {
    font-size: 1.5rem;
    margin: 40px 0 20px;
  }
}
</style>