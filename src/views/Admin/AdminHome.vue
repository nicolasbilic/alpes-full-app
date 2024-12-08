<script setup lang="ts">

</script>

<template>
  <div class="admin-home-page">
    <!-- <div class="nav-container">
      <nav>
        <div class="brand-container">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="inner-path" d="M24.6123 26.2207L27.1567 29.5103" stroke="white" stroke-width="3"
              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path class="inner-path" d="M5.53516 32.8398L17.8923 17.5273L24.612 26.2197L31.6226 17.5273L43.4642 32.8398"
              stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>ALPES</span>
        </div>
        <a>
          <button>
            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8571 6.57465V4.35808C14.8571 4.02229 14.7956 3.69015 14.6765 3.38266C14.5574 3.07516 14.3833 2.79901 14.1652 2.57164C13.9471 2.34427 13.6898 2.17063 13.4094 2.0617C13.129 1.95278 12.8318 1.91093 12.5364 1.9388L3.965 2.74725C3.42934 2.79779 2.93001 3.07457 2.56604 3.52269C2.20206 3.97082 2.00003 4.55755 2 5.16653V20.1217C2.00003 20.7306 2.20206 21.3174 2.56604 21.7655C2.93001 22.2136 3.42934 22.4904 3.965 22.5409L12.5364 23.3506C12.8319 23.3785 13.1292 23.3366 13.4097 23.2276C13.6901 23.1186 13.9475 22.9449 14.1656 22.7174C14.3837 22.4899 14.5578 22.2136 14.6769 21.9059C14.7959 21.5983 14.8573 21.266 14.8571 20.9301V18.7136M13.7857 12.6441H23.4286H13.7857ZM23.4286 12.6441L19.8575 7.78854L23.4286 12.6441ZM23.4286 12.6441L19.8575 17.4997L23.4286 12.6441Z"
                stroke="white" stroke-width="2.14286" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Me déconnecter
          </button>
        </a>
      </nav>
    </div>

    <div class="main-content">
      <div class="content-container">
        <div class="newsletter-container">
          <div class="newsletter-header">
            <svg width="30" height="28" viewBox="0 0 53 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.5 12.3125H30.5625M26.5 20.4375H30.5625M10.25 28.5625H30.5625M10.25 36.6875H30.5625M38.6875 12.3125H47.8281C49.51 12.3125 50.875 13.6775 50.875 15.3594V40.75C50.875 42.3662 50.233 43.9161 49.0902 45.0589C47.9474 46.2017 46.3974 46.8437 44.7812 46.8437M38.6875 12.3125V40.75C38.6875 42.3662 39.3295 43.9161 40.4723 45.0589C41.6151 46.2017 43.1651 46.8437 44.7812 46.8437M38.6875 12.3125V5.20312C38.6875 3.52125 37.3225 2.15625 35.6406 2.15625H5.17187C3.49 2.15625 2.125 3.52125 2.125 5.20312V40.75C2.125 42.3662 2.76702 43.9161 3.90982 45.0589C5.05262 46.2017 6.60259 46.8437 8.21875 46.8437H44.7812M10.25 12.3125H18.375V20.4375H10.25V12.3125Z"
                stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h1>Newsletter</h1>
          </div>

          <a href="/#">Lien vers Mailchimp</a>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
/* .admin-home-page {
  background-image: url('../../assets/webp/snowy-mountain-alps.webp');
  background-size: cover;
  background-repeat: no-repeat;
  min-block-size: 100vh;
}

h1,
a {
  color: var(--c-white-mute);
}

.main-content {
  display: flex;
  justify-content: center;
}

.content-container {
  width: 1440px;
}

.newsletter-container {
  margin-top: 48px;
  background-color: var(--color-background-button-secondary);
  border-radius: var(--radius);
  border: none;
  padding: 20px;
  width: 315px;
  margin-left: 10%;
}

.newsletter-container a:hover {
  opacity: 0.8;
}

.newsletter-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

button:hover {
  opacity: 0.9;
} */

/******* NAV *******/
/* nav {
  display: flex;
  align-items: center;
  min-height: 60px;
  padding: 10px 0;
  max-width: 1440px;
  width: 100%;
}

.brand-container {
  display: flex;
  align-items: center;
  padding-left: 10%;
  gap: 10px;
}

.brand-container span {
  padding-top: 6px;
  font-weight: var(--fw-strong);
  color: var(--c-white-mute);
}

.nav-container {
  display: flex;
  justify-content: center;
}

nav {
  max-width: 1440px;
}

nav a {
  margin-left: auto;
  margin-right: 5%;
}

nav button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 170px;
  padding: 10px 0;
  font-weight: var(--fw-strong);
  color: var(--c-white-mute);
  background-color: var(--color-background-button-secondary);
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
} */
</style>