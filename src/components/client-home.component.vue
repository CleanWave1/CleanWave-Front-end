<script>
export default {
  name: "client-home",
  data() {
    return {
      searchText: '',
    };
  },
}
</script>

<template>
  <div class="home-content flex flex-column">
    <div class="searcher flex justify-content-center">
      <pv-icon-field iconPosition="left">
        <pv-input-icon class="pi pi-search"></pv-input-icon>
        <pv-input-text v-model="searchText" placeholder="Buscar..." class="search-input"/>
      </pv-icon-field>
      <pv-button label="Buscar" severity="contrast"/>
    </div>

    <div class="container flex gap-7 justify-content-center">
      <pv-card class="recommended">
        <template #content>
          <h2>RECOMENDADOS</h2>
          <p class="subtext">Mejor valoradas<br>Más contratadas</p>
          <br>
          <h2>CATEGORÍAS</h2>
          <p class="subtext">Limpieza general<br>Limpieza profunda<br>Limpieza de alfombras<br>Limpieza de ventanas<br>Limpieza
            de oficinas</p>
          <br>
          <h2>GÉNERO</h2>
          <p class="subtext">Residencial<br>Comercial<br>Áreas exteriores<br>Especializada</p>
        </template>
      </pv-card>

      <div class="cards-container flex gap-6 flex-wrap flex-center flex-column">
        <pv-card class="info-card">
          <template #content>
            <div class="info-card-content flex align-items-center gap-5">
              <div class="info-card-content flex-column justify-content-center text-center">
                <img alt="logo" src="@/assets/logo-home-client.png" class="logo-img"/>
                <div class="actions flex gap-2">
                  <pv-button icon="pi pi-plus" aria-label="Filter" class="action-button"/>
                  <pv-button icon="pi pi-calendar" aria-label="Filter" class="action-button"/>
                  <pv-button icon="pi pi-thumbtack" aria-label="Filter" class="action-button"/>
                </div>
              </div>
              <div>
                <h2>ShineBright</h2>
                <p>Es una empresa independiente dedicada a brindar servicios de limpieza residencial y comercial.</p>
                <div class="rating flex gap-1 justify-content-center">
                  <i class="pi pi-star-fill rating-star"></i>
                  <i class="pi pi-star-fill rating-star"></i>
                  <i class="pi pi-star-fill rating-star"></i>
                  <i class="pi pi-star-fill rating-star"></i>
                  <i class="pi pi-star-fill rating-star"></i>
                </div>
              </div>
            </div>
          </template>
        </pv-card>

        <!-- Repetir las cards como necesites -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.searcher {
  display: flex;
  padding: 30px 0 60px;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
}

.search-input {
  width: 800px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.recommended {
  width: 22rem;
  padding: 1rem;
  background-color: #CCFFD5;
}

.subtext {
  color: #9d9d9d;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 900px;
}

.info-card {
  width: 100%;
  padding: 1rem;
  background-color: #CCFFD5;
}

.logo-img {
  height: 80px;
  width: auto;
  padding-bottom: 10px;
}

.action-button {
  height: 30px;
  width: 30px;
  background-color: #6e9a6e;
}

.rating-star {
  font-size: 1.5rem;
  color: #d5d506;
}

@media (max-width: 768px) {
  .searcher {
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
  }

  .search-input {
    width: 100%;
  }

  .container {
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
  }

  .recommended,
  .info-card {
    width: 100%;
  }

  .logo-img {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>