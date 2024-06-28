<script>
import { useAuthenticationStore } from "@/iam/services/authentication.store.js";
import { SignInRequest } from "@/iam/model/sign-in.request.js";

export default {
  name: "login",
  data() {
    return {
      checkedtyo: false,
      checkedsolo: false,
      checkedgroup: false,
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: true,
    };
  },
  methods: {
    onSignIn() {
      let authenticationStore = useAuthenticationStore();
      let signInRequest = new SignInRequest(this.email, this.password);
      authenticationStore.signIn(signInRequest, this.$router);
    }
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
      <pv-input-text id="email" v-model="email" style="width: 700px"/>
      <label for="email" style="background-color: transparent;">Correo Electronico</label>
    </pv-float-label>

    <div class="password-containers">
      <pv-float-label class="wide-floatlabel">
        <pv-password v-model="password" :feedback="false" inputId="password" toggle-mask showPassword="showPassword"/>
        <label for="password" style="background-color: transparent;">Contraseña</label>
      </pv-float-label>
    </div>
    <div class="flex align-items-center">
      <pv-checkbox v-model="checkedtyo" :binary="true" style="display: flex; margin-right: 15px;"/>
      <label for="checkboxlabel" style="color: black; margin-left: 10px;">Recuerdame</label>
    </div>
    <div class="button-container">
      <pv-button @click="onSignIn" label="Iniciar Sesion" severity="success"/>
    </div>
    <p class="redirect-text">
      <router-link to="/forgot-password">¿Olvidaste tu contraseña?</router-link>
    </p>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  padding: 20px;
}

.password-containers {
  display: flex;
  gap: 205px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 15px;
}

.button-container {
  display: flex;
  padding: 20px;
  margin-left: 270px;
}

.button-containers {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.separator {
  margin: 0 100px;
}

.redirect-text {
  display: flex;
  margin-left: 270px;
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

pv-button:hover {
  text-decoration: none;
}
</style>
