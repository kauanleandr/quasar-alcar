<template>
  <div class="circulos-exemplos">
    <div class="circulos-container">
      <!-- Círculo superior -->
      <a href="/#/Residencial" class="circulo circulo-topo">
        <div class="circulo circulo-topo">
          <img
            src="/src/assets/imgcirculos/RESIDENCIAL.jpg"
            alt="Residencial"
          />
          <span>RESIDENCIAL</span>
        </div>
      </a>

      <!-- Círculo canto esquerdo -->
      <a href="/#/Comercial" class="circulo circulo-esquerdo">
        <div class="circulo circulo-esquerdo">
          <img src="/src/assets/imgcirculos/COMERCIAL.jpg" alt="Comercial" />
          <span>COMERCIAL</span>
        </div>
      </a>

      <!-- Círculo canto direito -->
      <a href="/#/Industrial" class="circulo circulo-direito">
        <div class="circulo circulo-direito">
          <img src="/src/assets/imgcirculos/INDUSTRIAL.webp" alt="Industrial" />
          <span>INDUSTRIAL</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueCirculos",
};
</script>

<style scoped>
/* circulos */

.circulos-exemplos {
  text-align: center;
  margin: 40px 0;
}

.circulos-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 400px; /* Definir uma altura fixa para o formato "A" */
}

.circulo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.circulo img {
  width: 300px; /* Tamanho das imagens */
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ccc;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.circulo img:hover {
  transform: scale(1.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.circulo span {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

/* Posicionamento específico para os círculos */
.circulo-topo {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%); /* Centralizar no topo */
}

.circulo-esquerdo {
  position: absolute;
  bottom: 0;
  left: 10%;
}

.circulo-direito {
  position: absolute;
  bottom: 0;
  right: 10%;
}
/* Responsividade */
@media (max-width: 768px) {
  .circulos-container {
    height: 300px;
    gap: 30px; /* Aumentando o espaçamento entre os círculos */
    justify-content: center; /* Centralizando os círculos */
  }

  .circulo img {
    width: 150px; /* Ajustar o tamanho das imagens */
    height: 150px;
  }

  .circulo span {
    font-size: 16px; /* Ajustar o tamanho da fonte */
  }
}
@media (max-width: 480px) {
  .circulos-container {
    height: 250px;
    gap: 20px; /* Aumentando o espaçamento entre os círculos */
  }

  .circulo img {
    width: 120px;
    height: 120px;
  }

  .circulo span {
    font-size: 14px;
    display: none; /* Removendo o texto */
  }
}
</style>
