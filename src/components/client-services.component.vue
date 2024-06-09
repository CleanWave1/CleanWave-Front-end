<script>
export default {
  name: "client-services"
}
</script>

<template>
  <div class="cards-container">
    <pv-card style="width: 25rem; overflow: hidden; background-color: #DCFFE2; min-height: 200px; color:black;">
      <template #title>Básico</template>
      <template #subtitle>S/ 20.00/m</template>
      <template #content>
        <div class="content-container">
          <div class="item">
            <i class="pi pi-check"></i>
            <p class="m-0">Ideal para espacios de tamaño estándar</p>
          </div>
          <br>
          <div class="item">
            <i class="pi pi-check"></i>
            <p>Perfecto para limpieza de rutina</p>
          </div>
          <br>
          <div class="item">
            <i class="pi pi-check"></i>
            <p>Posibilidad de personalizar el servicio</p>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-3 justify-content-center">
          <router-link to="/pay-service">
            <pv-button label="Seleccionar" severity="success"/>
          </router-link>
        </div>
      </template>
    </pv-card>

    <pv-card style="width: 25rem; overflow: hidden;  background-color: #DCFFE2;">
      <template #title>Profundo</template>
      <template #subtitle>S/ 30.00/m</template>
      <template #content>
        <div class="content-container">
          <div class="item">
            <i class="pi pi-check"></i>
            <p class="m-0">Recomendado para espacios medianos</p>
          </div>
          <br>
          <div class="item">
            <i class="pi pi-check"></i>
            <p>Incluye servicios especializados</p>
          </div>
          <br>
          <div class="item">
            <i class="pi pi-check"></i>
            <p>Acceso a un horario flexible de reservas</p>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-3 justify-content-center" >
          <router-link to="/pay-service">
            <pv-button label="Seleccionar"  severity="success"/>
          </router-link>
        </div>
      </template>
    </pv-card>

    <pv-card style="width: 25rem; overflow: hidden;  background-color: #DCFFE2;">
      <template #title>Muy profundo</template>
      <template #subtitle>S/ 40.00/m</template>
      <template #content>
        <div class="content-container">
          <div class="item">
            <i class="pi pi-check"></i>
            <p class="m-0">Diseñado para espacios grandes o complejos</p>
          </div>
          <br>
          <div class="item">
            <i class="pi pi-check"></i>
            <p>Inspección de calidad post-rutina</p>
          </div>
          <br>
          <div class="item">
            <i class="pi pi-check"></i>
            <p>Descuentos en servicios adicionales</p>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-3 justify-content-center">
          <router-link to="/pay-service">
            <pv-button label="Seleccionar"  severity="success"/>
          </router-link>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.cards-container {
  display: flex;
  margin: 0 auto;
  gap: 2rem;
  justify-content:center;
  align-items: center;
  flex-wrap:wrap;
  padding: 170px 0;
}

.content-container {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  align-items: center;
}

.item i {
  margin-right: 0.5rem;
}
</style>