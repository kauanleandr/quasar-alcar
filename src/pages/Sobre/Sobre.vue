<template>
  <div class="sobre">
    <!-- Topbar -->
    <Topbar msg="Topbar da página" />

    <!-- Conteúdo principal -->
    <div class="content">
      <h1>Quem Somos?</h1>
      <p>
        A ALÇAR ENGENHARIA desenvolve, projeta e executa obras residenciais,
        comerciais e industriais nos mais diversos segmentos. Uma empresa
        genuinamente paraense atuando no segmento da construção civil com o
        objetivo de oferecer soluções completas e customizadas para seus
        clientes e parceiros. Trabalhamos no mais alto padrão de qualidade, e
        para isso coordenamos de perto todas as etapas das obras, desde o
        projeto até a entrega. Visamos sempre atender nosso cliente com toda
        atenção e qualidade para isso investimos no aprimoramento contínuo da
        nossa equipe para manter a qualificação e experiência dos nossos
        colaboradores.
      </p>
    </div>

    <!-- Footer -->
    <VueFooter msg="Footer da página" />
  </div>
</template>

<script>
import Topbar from "src/layouts/Topbar.vue";
import VueFooter from "src/layouts/VueFooter.vue";

export default {
  name: "VueSobre",
  components: {
    Topbar,
    VueFooter,
  },
};
</script>

<style scoped>
.sobre {
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
}

.content {
  flex: 1;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.content h1 {
  font-family: serif;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 30px;
}

.content p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: justify;
}
</style>
