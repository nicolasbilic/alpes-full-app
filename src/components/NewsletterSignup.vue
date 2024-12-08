<script setup lang="ts">
import { ref } from 'vue';

// Prénom
const firstName = ref('');
const firstNameTouched = ref(false);
const firstNameValid = ref(true);
const validateFirstName = () => {
  const firstNameRegex = /^[a-zA-ZÀ-ÿ\s']*$/;
  firstNameValid.value = firstNameRegex.test(firstName.value) && firstName.value.length <= 50;
};
const markFirstNameTouched = () => firstNameTouched.value = true;

// Email
const email = ref('');
const emailTouched = ref(false);
const emailValid = ref(true);
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailValid.value = emailRegex.test(email.value) && email.value.length <= 100;
};
const markEmailTouched = () => emailTouched.value = true;

// Consentement
const consent = ref(false);
const consentTouched = ref(false);
const consentValid = ref(true);
const validateConsent = () => consentValid.value = consent.value;
const markConsentTouched = () => consentTouched.value = true;

const markAllTouched = () => {
  firstNameTouched.value = true;
  emailTouched.value = true;
  consentTouched.value = true;
};

const validateForm = () => {
  validateFirstName();
  validateEmail();
  validateConsent();
  return firstNameValid.value && emailValid.value && consentValid.value;
};

const handleSubmit = (event: Event) => {
  markAllTouched();
  if (validateForm()) {
  } else {
    // Si la validation échoue, on empêche la soumission
    event.preventDefault();
  }
};
</script>

<template>
  <div id="mc_embed_signup" class="contact-form-container">
    <form
      action="https://nicolasbilic.us3.list-manage.com/subscribe/post?u=7d0e77f115f0f6dd04158e263&amp;id=cd596c35d3&amp;f_id=000d5be2f0"
      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate contact-form"
      target="_blank" novalidate @submit="handleSubmit">
      <div id="mc_embed_signup_scroll">

        <!-- Prénom -->
        <div class="mc-field-group contact-form-group">
          <label for="mce-FNAME">Prénom</label>
          <input type="text" name="FNAME" class="text" id="mce-FNAME" v-model="firstName" placeholder="Jean"
            @input="validateFirstName" @blur="markFirstNameTouched" required />
          <span v-if="firstNameTouched && (!firstNameValid || firstName === '')" class="error-message">Votre
            prénom est obligatoire et ne doit comporter que des lettres.</span>
        </div>

        <!-- Email -->
        <div class="mc-field-group contact-form-group">
          <label for="mce-EMAIL">Email</label>
          <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" v-model="email"
            placeholder="jean.dupont@gmail.com" @input="validateEmail" @blur="markEmailTouched" required />
          <span v-if="emailTouched && (!emailValid || email === '')" class="error-message">Veuillez entrer une
            adresse email valide.</span>
        </div>

        <!-- Politique de confidentialité -->
        <div class="contact-form-group checkbox-group">
          <input type="checkbox" id="consent" v-model="consent" @blur="markConsentTouched" @change="validateConsent"
            required>
          <span class="checkmark-custom"></span>
          <label for="consent">J'accepte la
            <a href="/mentions-legales" target="_blank" class="consent-link">politique de confidentialité</a>.
          </label>
        </div>
        <span v-if="!consentValid" class="error-message">Vous devez accepter la politique de confidentialité.</span>

        <div aria-hidden="true" style="position: absolute; left: -5000px;">
          <input type="text" name="b_7d0e77f115f0f6dd04158e263_cd596c35d3" tabindex="-1" value="" />
        </div>
        <div class="optionalParent">
          <div class="clear foot">
            <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Je m'abonne" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
/*************** Newsletter de grimpeur *****************/

.newsletter-section {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10rem 1rem 5rem;
}

.newsletter-section p {
  text-align: center;
}

.contact-form-container {
  padding: 1rem 2rem;
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding-top: 10px;
}

.contact-form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: row;
}

.checkbox-group label {
  padding-left: 10px;
}

.checkbox-group label .consent-link {
  color: var(--text-color-primary);
  text-decoration: underline;
}

.checkbox-group input {
  margin: 3px 0;
  width: 17px;
  height: 17px;
}

.contact-form-container label {
  font-weight: 400;
}

.contact-form-container input {
  padding: 12px;
}

.contact-form-container textarea {
  resize: none;
  height: 7rem;
}

.contact-form-container textarea[placeholder] {
  padding: 10px;
}

.contact-form-container input {
  border: 1px solid #ccc;
  border-radius: 8px;
}

.contact-form-container input[type='submit'] {
  width: 100%;
  padding: 10px;
  background-color: var(--color-background-button-secondary);
  color: #fff;
  font-weight: var(--fw-strong);
  font-size: 16px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease-in-out;
}

.contact-form-container input[type='submit']:hover {
  opacity: 0.9;
}

.error-message {
  color: red;
}

@media (width > 700px) {
  .contact-form-container {
    width: 70%;
  }
}

@media (width > 999px) {
  .contact-form-container {
    width: 50%;
  }
}

@media (width > 1120px) {
  .contact-form-container {
    width: 40%;
  }
}
</style>