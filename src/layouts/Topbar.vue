<template>
  <div class="topbar">
    <a href="/">
      <div class="logo"><img src="/src/assets/logo.png" alt="logo" /></div>
    </a>
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <nav class="menu" :class="{ 'menu-open': isMenuOpen }">
      <a href="/">HOME</a>
      <a href="/#/Sobre">SOBRE</a>
      <a href="/#/Servicos">SERVIÇOS</a>
      <a href="/public/assets/portfolioAlçar2022.pdf" target="_blank"
        >PORTFÓLIO</a
      >
      <a href="#contato">CONTATO</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      isMenuOpen: false, // Controla o estado do menu para telas menores
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Alterna entre abrir/fechar o menu
    },
  },
};
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0rem;
  background-color: #f2f2f2;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}

.menu a {
  font-weight: bold;
  margin-left: 2rem;
  text-decoration: none;
  color: #3e4d54;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #23bacf;
}

/* INÍCIO: Estilos adicionados para telas menores */
.menu-toggle {
  display: none; /* Oculta o botão para telas maiores */
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #3e4d54;
  cursor: pointer;
  position: absolute;
  right: 1rem;
}

@media (max-width: 768px) {
  .menu {
    display: none; /* Esconde o menu padrão */
    flex-direction: column;
    position: absolute;
    top: 75px;
    right: 0;
    background-color: #f2f2f2;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .menu.menu-open {
    display: flex; /* Mostra o menu quando aberto */
  }

  .menu a {
    margin: 0.5rem 0;
    text-align: center;
  }

  .menu-toggle {
    display: block; /* Exibe o botão em telas menores */
  }
}
/* FIM: Estilos adicionados para telas menores */
</style>
