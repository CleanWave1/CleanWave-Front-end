<script>
export default {
  name: "client-register",
  data() {
    return {
      checked: false,
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
  }
}
</script>

<template>
  <div class="card flex justify-content-center">
    <div class="button-containers">
      <router-link to="/log-in">
        <pv-button label="Iniciar sesión" link class="bigger-button"/>
      </router-link>
      <span class="separator">|</span>
      <router-link to="/client-register">
        <pv-button label="Registrarse" link class="bigger-button"/>
      </router-link>
    </div>
    <img src="@/assets/cleanwave-logo.png" alt="logo-cleanwave" class="separator-image" />
    <pv-float-label class="wide-floatlabel">
      <pv-input-text id="names" v-model="name" style="width: 700px"/>
      <label for="names" style="background-color: transparent;">Nombres</label>
    </pv-float-label>

    <pv-float-label class="wide-floatlabel">
      <pv-input-text id="lastnames" v-model="lastname" style="width: 700px"/>
      <label for="lastnames" style="background-color: transparent;">Apellidos</label>
    </pv-float-label>

    <pv-float-label class="wide-floatlabel">
      <pv-input-text id="email" v-model="email" style="width: 700px"/>
      <label for="email" style="background-color: transparent;">Correo Electronico</label>
    </pv-float-label>

    <div class="password-containers">
      <pv-float-label class="wide-floatlabel">
        <pv-password v-model="password" :feedback="false" inputId="password" toggle-mask showPassword="showPassword"/>
        <label for="password" style="background-color: transparent;">Contraseña</label>
      </pv-float-label>

      <pv-float-label class="wide-floatlabel">
        <pv-password v-model="confirmPassword" :feedback="false" inputId="confirmPassword" toggle-mask showPassword="showConfirmPassword"/>
        <label for="confirmPassword" style="background-color: transparent;">Confirmar Contraseña</label>
      </pv-float-label>
    </div>

    <pv-float-label class="wide-floatlabel">
      <pv-input-text id="phonenumber" v-model="phonenumber" style="width: 700px"/>
      <label for="phonenumber" style="background-color: transparent;">Celular</label>
    </pv-float-label>

    <div class="flex align-items-center">
      <pv-checkbox v-model="checked" :binary="true" style="margin-right: 10px;"/>
      <label for="checkboxlabel" style="color: black; margin-left: 10px;">Acepto los términos y condiciones</label>
    </div>
    <div class="button-container">
      <router-link to="/client-home">
        <pv-button label="Crear Cuenta"/>
      </router-link>
    </div>
    <p class="redirect-text">
      <router-link to="/professional-register">¿Eres personal de limpieza? Regístrate aquí</router-link>
    </p>
  </div>
</template>

<style scoped>
.flex{
  display:flex;
  padding: 20px;
  margin-left: 20px;
}

.password-containers {
  display: flex;
  gap: 200px;
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
.button-containers {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.separator {
  margin: 0 100px;
}

.redirect-text{
  display: flex;
  margin-left: 200px;
}

.bigger-button {
  font-size: 32px;
  padding: 10px 20px;
}

.separator-image {
  width: 150px;
  height: auto;
  margin: 0 250px;
}
</style>