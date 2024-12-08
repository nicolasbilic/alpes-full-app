<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserNavBar from '../../components/User/UserNavBar.vue';
// import emailjs from '@emailjs/browser';
const show = ref(false);
onMounted(() => {
  show.value = true;
});

// const apiKey = import.meta.env.VITE_EMAIL_API_KEY; // à changer dans .env
const form = ref<HTMLFormElement | null>(null);
const isEmailSent = ref(false);

//Prénom
const firstName = ref('');
const firstNameValid = ref(true);
const firstNameTouched = ref(false);

const validateFirstName = () => {
  const firstNameRegex = /^[a-zA-ZÀ-ÿ\s']*$/;
  firstNameValid.value = firstNameRegex.test(firstName.value) && firstName.value.length <= 50;
}
const markFirstNameTouched = () => {
  firstNameTouched.value = true;
}

//Nom
const name = ref('');
const nameValid = ref(true);
const nameTouched = ref(false);

const validateName = () => {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s']*$/;
  nameValid.value = nameRegex.test(name.value) && name.value.length <= 50; //nameValid existera (true) si le nom respecte l'expression régulière sinon non 
  nameValid.value = nameValid.value && name.value !== '';
};
const markNameTouched = () => {
  nameTouched.value = true;
};

//Email
const email = ref('');
const emailValid = ref(true);
const emailTouched = ref(false);

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailValid.value = emailRegex.test(email.value) && email.value.length <= 100;
  emailValid.value = emailValid.value && email.value !== '';
};
const markEmailTouched = () => {
  emailTouched.value = true;
};

// Téléphone
const phone = ref('');
const phoneValid = ref(true);
const phoneTouched = ref(false);

const validatePhone = () => {
  const phoneRegex = /^(0[1-9](\s?\d{2}){4}|(\+33\s?[1-9](\s?\d{2}){4}))$/;
  // 0[1-9](\s?\d{2}){4} : Numéros locaux en France (10 chiffres); \+33\s?[1-9](\s?\d{2}){4} : Format international pour les numéros français
  phoneValid.value = phoneRegex.test(phone.value);
  phoneValid.value = phoneValid.value && phone.value !== '';
};
const markPhoneTouched = () => {
  phoneTouched.value = true;
};

//Message
const message = ref('');
const messageValid = ref(true);
const messageTouched = ref(false);

const validateMessage = () => {
  const messageRegex = /^[a-zA-ZÀ-ÿ0-9\s,.!?()'"`\-–—$€£]*$/; //autorise les lettres, chiffres, espaces, ponctuation Courante, certains caractères spéciaux et symboles monétaires
  messageValid.value = messageRegex.test(message.value) && message.value.length >= 5 && message.value.length <= 1000;
  messageValid.value = messageValid.value && message.value !== '';
};
const markMessageTouched = () => {
  messageTouched.value = true;
};

//Consent
const consent = ref(false);
const consentValid = ref(true);
const consentTouched = ref(false);

const validateConsent = () => {
  consentValid.value = consent.value;
};
const markConsentTouched = () => {
  consentTouched.value = true;
};

const validateForm = () => {
  validateFirstName();
  validateName();
  validateEmail();
  validateMessage();
  validateConsent();
  return firstNameValid.value && nameValid.value && emailValid.value && messageValid.value && consentValid.value;
};

// const sendEmail = () => {
//   if (form.value && validateForm()) {
//     emailjs
//       .sendForm('contact_service_aaaa', 'template_aaaa', form.value, apiKey)
//       .then(
//         () => {
//           console.log('SUCCESS! it is sent');
//           isEmailSent.value = true;
//           resetForm();
//         },
//         (error) => {
//           console.log('FAILED to send...', error.text);
//         },
//       );
//   } else {
//     console.log('Form reference is null, aucun élément html de formulaire trouvé');
//   }
// };

const markAllTouched = () => {
  firstNameTouched.value = true;
  nameTouched.value = true;
  emailTouched.value = true;
  messageTouched.value = true;
  consentTouched.value = true;
};

const handleSubmit = () => {
  markAllTouched();
  if (validateForm()) {
    // sendEmail();
  }
};

const resetForm = () => {
  name.value = '';
  nameValid.value = true;
  nameTouched.value = false;
  email.value = '';
  emailValid.value = true;
  emailTouched.value = false;
  message.value = '';
  messageValid.value = true;
  messageTouched.value = false;
  consent.value = false;
  consentValid.value = true;
  consentTouched.value = false;
};

const resetConfirmationMessage = () => {
  isEmailSent.value = false;
};

</script>

<template>
  <transition name="fade-slide">
    <section class="contact-page" v-if="show">
      <UserNavBar navColor="black" />
      <section class="contact-container">
        <div class="contact-form-container">
          <h1>Contactez-nous</h1>
          <p>Pour toute question, remplissez notre formulaire de contact.</p>
          <!-- Formulaire -->
          <form class="contact-form" ref="form" @submit.prevent="handleSubmit">

            <div class="fullname-container">
              <!-- Prénom -->
              <div class="contact-form-group">
                <label for="firstName">Prénom</label>
                <input type="text" name="user_firstName" id="firstName" v-model="firstName" @input="validateFirstName"
                  @blur="markFirstNameTouched" @click="resetConfirmationMessage" placeholder="Jean" required>
                <span class="error-message" v-if="firstNameTouched && (!firstNameValid || firstName === '')">Votre
                  prénom est obligatoire et ne doit comporter que des lettres.</span>
              </div>

              <!-- Nom -->
              <div class="contact-form-group">
                <label for="name">Nom</label>
                <input type="text" name="user_name" id="name" v-model="name" @input="validateName"
                  @blur="markNameTouched" @click="resetConfirmationMessage" placeholder="Dupont" required>
                <span class="error-message" v-if="nameTouched && (!nameValid || name === '')">Votre nom est obligatoire
                  et ne doit comporter que des lettres.</span>
              </div>
            </div>

            <!-- Email -->
            <div class="contact-form-group">
              <label for="email">Email</label>
              <input type="email" name="user_email" id="email" v-model="email" @input="validateEmail"
                @blur="markEmailTouched" @click="resetConfirmationMessage" placeholder="jean.dupont@gmail.com" required>
              <span class="error-message" v-if="emailTouched && (!emailValid || email === '')">Veuillez entrer une
                adresse email valide.</span>
            </div>

            <!-- Téléphone -->
            <div class="contact-form-group">
              <label for="phone">Numéro de téléphone</label>
              <!-- <input type="tel" name="user_tel" id="phone" placeholder="07 00 00 00 00" pattern="0[1-9][0-9]{8}"
                required> -->
              <input type="tel" name="user_tel" id="phone" v-model="phone" @input="validatePhone"
                @blur="markPhoneTouched" placeholder="07 00 00 00 00" required>
              <span class="error-message" v-if="phoneTouched && (!phoneValid || phone === '')">Veuillez entrer un numéro
                de téléphone valide.</span>
            </div>

            <!-- Message -->
            <div class="contact-form-group">
              <label for="message">Message</label>
              <textarea name="message" id="message" v-model="message" @input="validateMessage"
                @blur="markMessageTouched" @click="resetConfirmationMessage" placeholder="Mon message est ..."
                required></textarea>
              <span class="error-message" v-if="messageTouched && (!messageValid || message === '')">Ce champ est
                obligatoire et ne doit comporter que des symboles valides.</span>
            </div>

            <!-- Politique de confidentialité -->
            <div class="contact-form-group consent-group">
              <input type="checkbox" id="consent" v-model="consent" @blur="markConsentTouched" @change="validateConsent"
                required>
              <span class="checkmark-custom"></span>
              <label for="consent">J'accepte la
                <a class="consent-policy" href="/mentions-legales" target="_blank">politique de confidentialité</a>.
              </label>
            </div>
            <span class="error-message" v-if="!consentValid">Vous devez accepter la politique de confidentialité.</span>

            <!-- Envoyer -->
            <input type="submit" value="Envoyer">
            <div class="confirmation-message" v-if="isEmailSent">
              <p>Merci de nous avoir contacté ! Nous reviendrons rapidement vers vous.</p>
            </div>

          </form>
        </div>
      </section>
    </section>
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

/****** Global *******/
.contact-page {
  padding-bottom: 64px;
}

.contact-page h1 {
  font-size: var(--fs-heading);
  text-align: center;
  padding-bottom: 1rem;
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.contact-form-container {
  width: 100%;
  padding: 0 32px;
}

.contact-form-container p {
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding-top: 48px;
}

.contact-form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius);
}

input {
  padding: 12px;
}

input[type='submit'] {
  width: 100%;
  font-size: 16px;
  font-weight: var(--fw-strong);
  color: var(--color-text-accent-light);
  padding: 10px;
  margin-bottom: 20px;
  background-color: var(--color-background-button-secondary);
  border: none;
  transition: opacity 0.3s ease-in-out;
  border-radius: var(--radius);
  cursor: pointer;
}

input[type='submit']:hover {
  opacity: 0.9;
}

textarea {
  height: 7rem;
  resize: none;
}

textarea[placeholder] {
  padding: 10px;
}

.consent-group {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.consent-group label {
  padding-left: 10px;
}

.consent-group input {
  width: 17px;
  height: 17px;
}

.consent-group label .consent-policy {
  color: var(--text-color-primary);
  text-decoration: underline;
}

.error-message {
  color: var(--c-red);
}

.confirmation-message {
  display: block;
  color: var(--c-green);
  padding: 10px;
  margin-top: 20px;
  border-radius: var(--radius);
}

/*********** Media Queries ***********/

@media (width > 1024px) {
  .contact-form-container {
    width: 50%;
  }

  .fullname-container {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }

  .fullname-container .contact-form-group {
    width: 50%;
  }
}
</style>