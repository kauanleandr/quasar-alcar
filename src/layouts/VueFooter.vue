<template>
  <footer class="rodape" id="contato">
    <div class="rodape-div">
      <div class="rodape-div-1">
        <div class="rodape-div-1-coluna">
          <span><b>ENDEREÇO</b></span>
          <p>
            <a href="https://maps.app.goo.gl/VturGPjQz9UuHDL99" target="_black"
              >ED. TROPICAL CENTER, AV. GOV. MAGALHES BARATA 695 SALA 103</a
            >
          </p>
        </div>
      </div>

      <div class="rodape-div-2">
        <div class="rodape-div-2-coluna">
          <span><b>Contatos</b></span>
          <p>
            <a href="https://www.instagram.com/alcarengenharia/" target="_blank"
              >@alcarengenharia</a
            >
          </p>
          <p>
            <a
              href="https://api.whatsapp.com/send/?phone=5591987377403&text&type=phone_number&app_absent=0"
              target="_blank"
              >(91) 98737-7403</a
            >
          </p>
          <p>(91) 98242-2476</p>
        </div>
      </div>

      <div class="rodape-div-3">
        <div class="rodape-div-3-coluna">
          <span><b>Links</b></span>
          <p><a href="#sobre">Sobre</a></p>
          <p><a href="#serviços">Serviços</a></p>
          <p><a href="/portfolioAlçar2022.pdf" target="_blank">Portfólio</a></p>
        </div>
      </div>
    </div>
    <p class="rodape-direitos">
      <a href="https://github.com/kauanleandr" target="_blank">Kauanleandr</a> ©
      2023 – Todos os Direitos Reservados.
    </p>
  </footer>
</template>

<script>
export default {
  name: "VueFooter",
  components: {},
};
</script>

<style scoped>
.rodape {
  background-color: #3e4d54;
  color: white;
  width: 100%;
  font-size: 14px;
  font-family: helvetica;
  padding: 0;
}

.rodape a:hover {
  color: #23bacf;
}

.rodape a {
  text-decoration: none;
  color: white;
}

.rodape p {
  margin-bottom: 5px;
}

.rodape-div {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  align-items: stretch;
  padding: 60px 10px 40px 10px;
}

/* Estilo das colunas do rodapé */
.rodape-div-1,
.rodape-div-2,
.rodape-div-3 {
  display: flex;
  width: calc(100% / 3 - 20px);
  padding: 10px;
}

.rodape span {
  font-size: 18px; /* Menor fonte para telas menores */
  color: white;
}

.rodape-direitos {
  width: 100%;
  background-color: black;
  padding: 10px;
  margin: 0px;
  text-align: center;
}

/* Responsividade para telas menores */
@media (max-width: 1024px) {
  .rodape-div-1,
  .rodape-div-2,
  .rodape-div-3 {
    width: calc(100% / 3 - 20px);
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .rodape-div-1,
  .rodape-div-2,
  .rodape-div-3 {
    width: 100%; /* Em telas menores, as colunas ficam uma embaixo da outra */
    padding: 10px;
  }

  .rodape span {
    font-size: 16px; /* Ajusta o tamanho da fonte para telas menores */
  }

  .rodape-direitos {
    font-size: 12px; /* Reduz o tamanho da fonte no rodapé */
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .rodape {
    padding: 40px 10px; /* Ajusta o padding geral em telas muito pequenas */
  }

  .rodape span {
    font-size: 14px; /* Reduz ainda mais o tamanho da fonte para dispositivos muito pequenos */
  }

  .rodape-direitos {
    font-size: 10px; /* Ajuste do tamanho da fonte no rodapé */
    padding: 5px;
  }
}
</style>
