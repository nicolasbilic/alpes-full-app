import './style/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, type RouteMeta } from 'vue-router'
import UserHome from './views/User/UserHome.vue'
import UserAbout from './views/User/UserAbout.vue'
import UserToDo from './views/User/UserToDo.vue'
import UserAccommodation from './views/User/UserAccommodation.vue'
import UserBooking from './views/User/UserBooking.vue'
import UserContact from './views/User/UserContact.vue'
import UserLegal from './views/User/UserLegal.vue'
import AdminLogin from './views/Admin/AdminLogin.vue'
import AdminHome from './views/Admin/AdminHome.vue'

import NotFound from '@/components/NotFound.vue'

interface Meta extends RouteMeta {
  title?: string;
  description?: string;
}

const routes = [
  { path: '/', component: UserHome, meta: { title: 'Alpes - Site officiel des Alpes', description: 'Bienvenue sur le site des Alpes, lieu d\'Alpinisme dans la région Provence Alpes Côte d\'Azur du Sud de la France.' } as Meta },
  { path: '/a-propos', component: UserAbout, meta: { title: 'Alpes - À propos', description: 'Notre entreprise' } as Meta },
  { path: '/a-faire', component: UserToDo, meta: { title: 'Alpes - À faire', description: 'Nos activités' } as Meta },
  { path: '/residences', component: UserAccommodation, meta: { title: 'Alpes - Résidences', description: 'Consultez les résidences des Alpes' } as Meta },
  { path: '/reservations', component: UserBooking, meta: { title: 'Alpes - Réservations', description: 'Réservez votre place au Sommet' } as Meta },
  { path: '/contact', component: UserContact, meta: { title: 'Alpes - Contact', description: 'Contactez-nous' } as Meta },
  { path: '/mentions-legales', component: UserLegal, meta: { title: 'Mentions légales des Alpes', description: 'Retrouvez les mentions légales des Alpes' } as Meta },
  { path: '/admin/login', component: AdminLogin, meta: { title: 'Admin - Connexion', description: 'Connectez-vous à l\'interface d\'administration' } as Meta },
  { path: '/admin/home', component: AdminHome, meta: { title: 'Admin - Accueil', description: 'Bienvenue sur l\'interface d\'administration' } as Meta },
  { path: '/404', component: NotFound, meta: { title: 'Page non trouvée Alpes', description: 'La page que vous recherchez n\'existe pas.' } as Meta },
  { path: '/:catchAll(.*)', redirect: '/404' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
})

// guarde de navigation
router.beforeEach((to, from, next) => {
  const meta = to.meta as Meta;

  document.title = meta.title || "Alpes - Site officiel des Alpes";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', meta.description || "Bienvenue sur le site des Alpes, lieu d\'Alpinisme dans la région Provence Alpes Côte d\'Azur du Sud de la France.");
  }
  next();
});

createApp(App)
  .use(router)
  .mount('#app')