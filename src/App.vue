<script setup>

import {computed} from "vue";
import {useRoute} from "vue-router";
import NavbarClient from "@/public/navbar-client/navbar-client.component.vue";

const route = useRoute();

const clientPaths = ['/client-home', '/services', '/client-help', '/request-service','/pay-service', 'profile'];

const showClientNavbar = computed(() => clientPaths.includes(route.path));
</script>

<template>
  <div class="app">
    <NavbarClient v-if="showClientNavbar"/>
    <router-view/>
  </div>
</template>

<style lang="scss">
:root {
  --primary: #3b9f70;
  --primary-alt: #9FFFB0;
  --grey: #64748b;
  --dark: #2a2c2a;
  --dark-alt: #9FFFB0;
  --light: #21272A;
  --sidebar-width: 300px;
}

* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background: whitesmoke;
  display: block;
  color: var(--black);
  margin: 0;
}

.app {
  height: 100vh;
}

.main-content {
  flex-grow: 1;
  transition: margin-left 0.2s ease-in-out;
}

.main-content.showSidebar {
  margin-left: var(--sidebar-width);
}

#app {
  display: block;
  padding: 0;
  max-width: 100%;
}
</style>
