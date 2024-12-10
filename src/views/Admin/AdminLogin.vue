<script setup lang="ts">
// import { ref } from 'vue'
// // import axios from 'axios'
// import { useRouter } from 'vue-router'

// const email = ref('')
// const password = ref('')
// const errorMessage = ref('')
// const router = useRouter()

// // si je suis en mode dév, alors je suis sur localhost sinon je suis sur vercel
// const apiBaseUrl = import.meta.env.MODE === 'development'
//   ? import.meta.env.VITE_API_BASE_URL_DEV
//   : import.meta.env.VITE_API_BASE_URL;

// const login = async () => {
//   try {
//     const response = await axios.post(`${apiBaseUrl}/api/login`, { email: email.value, password: password.value })
//     if (response.data.success) {
//       localStorage.setItem('authToken', response.data.token);
//       localStorage.setItem('adminId', response.data.adminId);
//       router.push('/admin/dashboard');
//     } else {
//       errorMessage.value = response.data.message
//     }
//   } catch (error) {
//     errorMessage.value = 'An error occurred. Please try again.'
//   }
// }
</script>

<template>
  <!-- <nav>
    <div class="brand-container">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="inner-path" d="M24.6123 26.2207L27.1567 29.5103" stroke="black" stroke-width="3"
          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path class="inner-path" d="M5.53516 32.8398L17.8923 17.5273L24.612 26.2197L31.6226 17.5273L43.4642 32.8398"
          stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>ALPES</span>
    </div>
  </nav> -->
  <section class="login-page">
    <!-- <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="inner-path" d="M24.6123 26.2207L27.1567 29.5103" stroke="black" stroke-width="3"
        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path class="inner-path" d="M5.53516 32.8398L17.8923 17.5273L24.612 26.2197L31.6226 17.5273L43.4642 32.8398"
        stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <h2>Connexion</h2>
    <p>Content de vous revoir !</p>
    <div class="login-form-container">
      <form @submit.prevent="login">
        <div class="contact-form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" name="email" placeholder="jean.dupont@gmail.com" required>
        </div>
        <div class="contact-form-group">
          <label for="password">Mot de passe</label>
          <input type="password" v-model="password" id="password" name="password" placeholder="●●●●●●●●" required>
        </div>
        <input type="submit" value="Me connecter"></input>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <br>
        <br>
      </form>
    </div> -->
  </section>
</template>

<style scoped>
/******* NAV *******/
/* nav {
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
  font-weight: var(--font-weight-strong);
}

.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
}

.login-form-container {
  width: 100%;
  padding: 0 32px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  padding-top: 32px;
  align-items: center;
}

p {
  color: #475467;
}

.contact-form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  padding-bottom: 5px;
  font-weight: var(--font-weight-highlight);
}

input {
  min-width: 330px;
  width: 100%;
  max-width: 400px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: var(--radius);
}

input[type='submit'] {
  min-width: 330px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: var(--color-background-button-secondary);
  padding: 10px;
  margin: 15px 0 20px;
  transition: background-color 0.3s ease-in-out;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
}

input[type='submit']:hover {
  opacity: 0.9;
}

@media (width > 499px) {
  input {
    min-width: 400px;
  }
} */
</style>