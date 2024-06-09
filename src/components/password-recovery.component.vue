<script>
export default {
  name: "password-recovery"
}
</script>

<template>
  <div>
    <div class="back-icon">
      <router-link to="/log-in">
        <span class="pi pi-arrow-left"></span>
      </router-link>
    </div>
    <div class="card flex justify-content-center">
      <img src="@/assets/cleanwave-logo.png" alt="logo-cleanwave" class="separator-image" />
      <h2>¿Cómo desea recuperar su contraseña?</h2> <!-- Title -->
      <div class="recovery-options">
        <div class="checkbox-item">
          <input type="checkbox" id="emailCheckbox" name="recoveryOption" value="email">
          <label for="emailCheckbox" class="checkbox-label">Correo Electrónico</label>
        </div>
        <div class="checkbox-item">
          <input type="checkbox" id="phoneCheckbox" name="recoveryOption" value="phone">
          <label for="phoneCheckbox" class="checkbox-label" >Número de Teléfono</label>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/recovery-email">
          <pv-button label="Siguiente"/>
        </router-link>
      </div>

    </div>
  </div>
</template>

<style scoped>
.flex{
  display:flex;
  padding: 20px;
  color: black;
}

.back-icon {
  position: absolute;
  top: 20px;
  left: 20px;
}

.button-container {
  display: flex;
  padding: 20px;
  margin-left: 270px
}

.card{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 15px;
}

.separator-image {
  width: 150px;
  height: auto;
  margin: 100px 250px 0;
}

.checkbox-label {
  font-size: 18px;
  color: black;
  margin-left: 10px;
}

.checkbox-item {
  margin-bottom: 30px;
}

.recovery-options input[type="checkbox"] {
  font-size: 18px;
}

</style>