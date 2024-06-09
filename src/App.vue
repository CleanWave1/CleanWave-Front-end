<script setup>

import {computed} from "vue";
import {useRoute} from "vue-router";
import NavbarClient from "@/public/navbar-client/navbar-client.component.vue";

const route = useRoute();

const clientPaths = ['/inicio', '/servicios', '/ayuda', '/programar-limpieza','/pay-service'];

const showClientNavbar = computed(() => clientPaths.includes(route.path));
</script>

<template>
  <div class="app">
    <NavbarClient v-if="showClientNavbar"/>
    <router-view/>
  </div>
</template>

<style scoped>

:root{
  --sidebar-width: 300px;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .main-content.showSidebar {
    margin-left: var(--sidebar-width);
  }
}
</style>
