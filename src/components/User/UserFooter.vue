<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());

const active = ref('active');
</script>

<template>
  <div class="footer-container">
    <footer>
      <div class="footer-content">
        <ul class="footer-links-container">
          <li>
            <div class="copyright copyright-desktop">
              <RouterLink :active-class="active" to="/" aria-label="Accueil">
                ALPES
              </RouterLink>
              <span>© {{ currentYear }} ALPES</span>
            </div>
          </li>
          <div class="experiences-container">
            <li>
              EXPÉRIENCES
            </li>
            <li>
              <RouterLink :active-class="active" class="experiences-links" to="/a-faire" aria-label="À faire">
                À faire
              </RouterLink>
            </li>
            <li>
              <RouterLink :active-class="active" class="experiences-links" to="/residences" aria-label="Résidences">
                Résidences
              </RouterLink>
            </li>
          </div>
          <li>
            <RouterLink :active-class="active" to="/reservations" aria-label="Réservations">
              RÉSERVATIONS
            </RouterLink>
          </li>
          <li>
            <RouterLink :active-class="active" to="/a-propos" aria-label="À propos">
              À PROPOS
            </RouterLink>
          </li>
          <li>
            <RouterLink :active-class="active" to="/contact" aria-label="Contact">
              CONTACT
            </RouterLink>
          </li>
          <li>
            <RouterLink :active-class="active" to="/mentions-legales" aria-label="Mentions légales">
              MENTIONS LÉGALES
            </RouterLink>
          </li>
        </ul>
      </div>

      <!----- Version Mobile : Liens de navigation ----->
      <ul class="mobile-footer-links-container">
        <div class="mobile-footer-links">
          <li>
            EXPÉRIENCES
          </li>
          <li>
            <RouterLink class="experiences-links" to="/a-faire" :active-class="active" aria-label="À faire">
              À faire
            </RouterLink>
          </li>
          <li>
            <RouterLink class="experiences-links" to="/residences" :active-class="active" aria-label="Résidences">
              Résidences
            </RouterLink>
          </li>
        </div>
        <div class="mobile-footer-links">
          <li>
            <RouterLink to="/reservations" :active-class="active" aria-label="Réservations">
              RÉSERVATIONS
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/a-propos" :active-class="active" aria-label="À propos">
              À PROPOS
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" :active-class="active" aria-label="Contact">
              CONTACT
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/mentions-legales" :active-class="active" aria-label="Mentions légales">
              MENTIONS LÉGALES
            </RouterLink>
          </li>
        </div>
      </ul>
      <div class="mobile-copyright-container">
        <div class="mobile-copyright copyright">
          <RouterLink to="/" :active-class="active" aria-label="Accueil">
            ALPES
          </RouterLink>
          <span>© {{ currentYear }} ALPES</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/****** Global ******/
.footer-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70px;
  padding: 15px 0;
}

.footer-container::before {
  content: '';
  position: absolute;
  top: 0;
  width: 80%;
  height: 1px;
  background-color: var(--color-divider);
}

footer {
  display: flex;
  flex-direction: column;
}

.footer-content {
  display: none;
  align-items: center;
  justify-content: center;
}

.footer-content ul {
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
}

ul li {
  font-weight: var(--fw-strong);
}

li a {
  color: var(--text-color-primary);
}

li a:hover,
li a:focus {
  color: var(--color-background-dark);
}

.experiences-container li:nth-child(1) {
  padding-bottom: 15px;
}

.experiences-container li {
  padding-bottom: 5px;
}

.experiences-links {
  font-size: 15px;
  font-weight: var(--fw-highlight);
}

.copyright {
  gap: 10px;
}

.copyright span {
  font-size: 15px;
  font-weight: var(--fw-highlight);
}

.active {
  color: var(--color-background-dark);
}


/****** Version Mobile ******/
.mobile-footer-links-container {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 25px 0;
}

.mobile-footer-links {
  padding: 0 10px;
}

.mobile-footer-links li {
  padding: 5px 0;
}

.mobile-copyright-container {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 10px 0 10px;
}

.mobile-copyright {
  display: flex;
  flex-direction: column;
}

.mobile-copyright a {
  font-weight: var(--fw-strong);
}


/****** Media queries ******/
@media (width > 1020px) {
  .footer-content {
    display: flex;
    align-items: center;
  }

  .experiences-container {
    padding-left: 60px;
  }

  .copyright-desktop {
    display: flex;
    flex-direction: column;
  }

  .mobile-copyright-container {
    display: none;
  }

  .mobile-footer-links-container {
    display: none;
  }
}
</style>