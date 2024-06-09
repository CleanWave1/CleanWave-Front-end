<script>
import {ref} from 'vue'
import logoURL from '/src/assets/logo.png'
import userImg from '/src/assets/user.png'

export default {
  name: "sidebar-professional",
  setup() {
    const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
    const ToggleMenu = () => {
      is_expanded.value = !is_expanded.value
      localStorage.setItem("is_expanded", is_expanded.value)
    }
    return {
      is_expanded,
      ToggleMenu,
      logoURL,
      userImg
    }
  }
}
</script>

<template>
  <aside :class="is_expanded ? 'is-expanded' : ''">
    <div class="logo">
      <img :class="{ 'hidden': !is_expanded }" :src="logoURL" alt="Vue"/>
      <img :class="{ 'hidden': !is_expanded }" :src="userImg" alt="Vue"/>
      <h4 :class="{ 'hidden': !is_expanded }">Nombre</h4>
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/professional-home" class="button">
        <span class="material-icons">home</span>
        <span class="text">Inicio</span>
      </router-link>
      <router-link to="/about" class="button">
        <span class="material-icons">description</span>
        <span class="text">Perfil</span>
      </router-link>
      <router-link to="/availability" class="button">
        <span class="material-icons">event_available</span>
        <span class="text">Disponibilidad</span>
      </router-link>
      <router-link to="/comments" class="button">
        <span class="material-icons">forum</span>
        <span class="text">Comentarios y Calificaciones </span>
      </router-link>
    </div>
    <div class="flex"></div>
    <div class="menu">
      <router-link to="/ayuda-profesional" class="button">
        <span class="material-icons">info</span>
        <span class="text">Soporte</span>
      </router-link>
      <router-link to="/settings" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Configuraciones</span>
      </router-link>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: black;

    img {
      width: 8rem;
      margin-bottom: 20px;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3, .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-icons, .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .material-icons, .text {
          color: var(--primary);
        }
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3, .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>