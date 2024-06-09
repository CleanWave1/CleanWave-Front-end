<script>
import NavbarContent from "@/public/navbar/navbar-client.component.vue"
import { ref } from 'vue';

export default {
  name: "support",
  components: {NavbarContent}
}

</script>

<template>
  <div class="support-content">
    <br><br><br>
    <h2 style="padding-bottom:30px; font-size:35px">Soporte al cliente</h2>

    <div class="card">
      <pv-accordion :multiple="true" :activeIndex="[0]">
        <pv-accordion-tab header="¿Cómo usar la aplicación?" >
          Contenido del primer panel
        </pv-accordion-tab>
        <pv-accordion-tab header="¿Qué se incluye en mi suscripción?" class="accordion-tab">
          Contenido del segundo panel
        </pv-accordion-tab>
        <pv-accordion-tab header="¿Cómo puedo programar servicios de limpieza?" class="accordion-tab">
          Contenido del tercer panel
        </pv-accordion-tab>
        <pv-accordion-tab header="¿Está mi información personal segura?" class="accordion-tab">
          Contenido del cuarto panel
        </pv-accordion-tab>
        <pv-accordion-tab header="¿Cómo me mantengo en contacto con la aplicación?" class="accordion-tab">
          Contenido del quinto panel
        </pv-accordion-tab>
      </pv-accordion>
    </div>

    <div class="floatlabel">
      <br><br><br>
      <h2 class="title formulario">Formulario de consulta</h2>
      <div class="input-container">
        <pv-float-label>
          <pv-text-area id="consulta"  style="width: 100%; height: 100px"></pv-text-area>
          <label for="consulta">Escriba su consulta</label>
        </pv-float-label>
      </div>
      <div class="button-container text-center">
        <pv-button label="Enviar"  severity="success" style="width: 200px; height: 50px; margin-top: 20px;" />
      </div>
    </div>
  </div>


</template>

<style>
.support-content{
  padding: 0 100px;
}

.formulario {
  padding-bottom: 20px;
}

</style>






