<script>
import ToolbarProfessionalComponent from "@/public/toolbar-professional/toolbar-professional.component.vue";
import SidebarProfessionalComponent from "@/public/sidebar-professional/sidebar-professional.component.vue";

export default {
  name: "professional-layout",
  components: {
    ToolbarProfessionalComponent,
    SidebarProfessionalComponent,
  },
};

</script>

<template>
  <div class="professional-layout">
    <SidebarProfessionalComponent/>
    <div class="main-content">
      <ToolbarProfessionalComponent/>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.professional-layout {
  display: flex;
}

.sidebar-profesional {
  width: 250px;
  /* otros estilos específicos del sidebar */
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>