<script>
import TableRequest from "@/request/components/table-request.component.vue";

export default {
  name: "professional-home",
  components: {TableRequest}
}
</script>

<template>
  <main id="home">
    <h1>Solicitudes de Servicio</h1>
    <pv-toolbar class="toolbar">
      <template #start>
        <div class="flex align-items-center gap-2">
          <pv-dropdown placeholder="Todos los servicios" />
          <div class="flex-auto">
            <pv-calendar showIcon :showOnFocus="false" inputId="buttondisplay" placeholder="31/04/2024" class="calendar" />
          </div>
          <pv-icon-field iconPosition="right" class="search">
            <pv-input-icon class="pi pi-search"></pv-input-icon>
            <pv-input-text placeholder="Buscar" class="labelBuscar" />
          </pv-icon-field>
        </div>
      </template>

      <template #end>
        <div class="flex align-items-center gap-2">
          <pv-button label="Share" severity="contrast" size="small" />
        </div>
      </template>
    </pv-toolbar>
    <table-request></table-request>
  </main>
</template>

<style scoped>
h1 {
  color: black;
  font-weight: bold;
  margin-bottom: 2rem;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  border-radius: 3rem;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
}
.calendar {
  height: 30px;
  padding-left: 10px;
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
}
.labelBuscar {
  height: 30px;
  padding: 0 1rem;
}
</style>