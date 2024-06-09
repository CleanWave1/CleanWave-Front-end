<script>
import {defineComponent} from "vue";
import { ref } from 'vue';
const checked = ref(true);

export default {
  name: "settings"
}
</script>

<template>
  <div class="container">
    <div class="config">
      <h1>Configuraciones</h1>
      <div class="form">
        <div class="inputTextContainer">
          <div class="card flex justify-content-center inputText" style="flex-direction: column; color:black;">
            <p>Nombre</p>
            <pv-input-text class="input" id="username" v-model="value" placeholder="Nombre"/>
          </div>
          <div class="card flex justify-content-center inputText" style="flex-direction: column; color:black;">
            <p>Correo Electrónico</p>
            <pv-input-text class="input" id="username" v-model="value" placeholder="Correo Electrónico"/>
          </div>
          <div class="card flex justify-content-center inputText" style="flex-direction: column; color:black;">
            <p>Nombre de Usuario</p>
            <pv-input-text class="input" id="username" v-model="value" placeholder="Nombre de Usuario" />
          </div>
        </div>
        <pv-button class="buttonForm">Guardar</pv-button>
      </div>
      <div class="language" style="color: black;">
        <p>Cambiar idioma</p>
        <pv-dropdown class="dropdownIdioma" placeholder="Idioma"></pv-dropdown>
      </div>
      <div class="switchTheme">
        <div class="card flex justify-content-center" style="color:black;">
          <div  class="imgBlack" src="" alt=""/>
          <div class="textSwitchColor">
            <h3>Modo Oscuro</h3>
            <p>Habilitar el tema Oscuro</p>
          </div>
          <pv-input-switch v-model="checked"></pv-input-switch>
        </div>
      </div>
    </div>
    <img src="../assets/user-settings.png" alt="" class="usuarioImg">
  </div>
</template>

<style >
.container{
  margin: 30px 50px;
  display:flex;
}
.input{
  height: 40px;
  width:300px;
  border-radius: 30px;
  padding-left: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.inputText{
  margin-top: 10px
}
.form{
  display: flex;
}
.buttonForm{
  height: 40px;
  width:120px;
  background-color: #9FFFB0;
  color:black;
  align-self: end;
  justify-content: center;
  border-radius: 30px;
  border: black 1px solid;
  margin-left: 20px;
}
.language{
  margin-top:50px;
}
.dropdownIdioma{
  width: 300px;
  height: 40px;
  justify-content: center;
  align-items: center;
  padding-left: 10px
}
.switchTheme{
  display:flex;
  margin-top: 50px;
  border: black 1px solid;
  width: 350px;
  height: 80px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px
}
.imgBlack{
  width: 50px;
  height: 50px;
  background-color: black;
}
.textSwitchColor{
  margin: 0 20px;
}
.textSwitchColor h3{
  font-weight: bold;
}
.usuarioImg{
  width:400px;
  height:300px;
  align-self: center;
  margin-left: 50px;
  border-radius:50px
}
</style>