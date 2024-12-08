<template>
  <div class="tudo">
    <Topbar msg="topbar da pagina" />
    <section class="diferenciais">
      <div class="container">
        <h2>Nosso Serviços</h2>
        <ul>
          <li>
            Projetos Arquitetônico, Estrutural, Elétrico e Hidrossanitário
          </li>
          <li>Execução de Obras Residenciais, Comerciais e Industriais</li>
          <li>Execução de Reformas</li>
          <li>Construção de Edifícios</li>
          <li>Construção de Casas</li>
          <li>Regularização de Obras</li>
        </ul>
      </div>
    </section>
    <VueFooter msg="footer da pagina" />
  </div>
</template>
<script>
import Topbar from "src/layouts/Topbar.vue";
import VueFooter from "src/layouts/VueFooter.vue";

export default {
  name: "VueServiços",
  components: {
    Topbar,
    VueFooter,
  },
};
</script>

<style>
.container {
  margin-top: 90px;
}

.diferenciais {
  background-color: #ffffff;
  padding: 20px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: -10px auto;
}

.diferenciais h2 {
  font-family: serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.diferenciais ul {
  list-style: none;
  padding: 0;
}

.diferenciais ul li {
  font-size: 1.2rem;
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-left: 5px solid #23bacf;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.diferenciais ul li:hover {
  transform: translateX(10px);
  background-color: #e9f7ff;
}

.diferenciais ul li::before {
  content: "✔";
  color: #23bacf;
  font-weight: bold;
  margin-right: 15px;
}
@media (max-width: 768px) {
  .diferenciais h2 {
    font-size: 20px;
  }
  .diferenciais ul li {
    font-size: 15px;
  }
}
</style>
