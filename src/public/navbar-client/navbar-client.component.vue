<script>
export default {
  name: "navbar-client"
}
</script>

<template>
  <pv-toolbar style=" padding:12px; background-color: #9FFFB0;">
    <template #start>
      <div>
        <img src="@/assets/cleanwave-logo.png" height="50px" alt="logo-cleanwave">
      </div>
    </template>
    <template #end>
      <div class="nav-links flex align-items-center gap-2">
        <router-link to="/inicio">
          <pv-button label="Inicio" text plain/>
        </router-link>
        <router-link to="/servicios">
          <pv-button label="Servicios" text plain/>
        </router-link>
        <router-link to="/ayuda">
          <pv-button label="Ayuda" text plain/>
        </router-link>
        <div class="flex align-items-center gap-3">
          <router-link to="/programar-limpieza">
            <pv-button label="Programar limpieza" severity="contrast" outlined style="background-color:white; "/>
          </router-link>
          <router-link to="/perfil">
            <pv-button icon="pi pi-user" severity="primary" rounded aria-label="User" style="color:gray; width:2.5rem; height:2.5rem; background-color:rgba(239,239,239,0.83)" />
          </router-link>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
@media (max-width: 768px) {
  pv-toolbar {
    padding: 0.4rem;
  }

  .nav-links {
    font-size: 0.8rem;
    gap: 0.5rem;
  }

}
</style>