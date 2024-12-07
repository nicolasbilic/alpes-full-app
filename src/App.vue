<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import UserFooter from './components/User/UserFooter.vue';

const route = useRoute();
const AdminPage = ref(route.path.includes('/admin'));
watch(() => route.path, (newPath) => {
  AdminPage.value = newPath.includes('/admin');
});
</script>

<template>
  <div v-if="!AdminPage">
    <RouterView />
    <UserFooter />
  </div>
  <div v-if="AdminPage">
    <RouterView />
  </div>
</template>

<style scoped></style>