<script>
export default {
  name: "password-recovery-phonenumber"
}
</script>

<template>
  <div>
    <div class="back-icon">
      <a href="/login">
        <span class="pi pi-arrow-left"></span>
      </a>
    </div>
    <div class="card flex justify-content-center">
      <img src="@/assets/cleanwave-logo.png" alt="logo-cleanwave" class="separator-image" />
      <h2>¡Revisa tu SMS!</h2>
      <div>
        <p>Te enviamos un mensaje SMS con las instrucciones para recuperar tu contraseña</p>
      </div>

      <div class="button-container">
        <pv-button label="Listo"/>
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

.recovery-options input[type="checkbox"] {
  font-size: 18px;
}

</style>