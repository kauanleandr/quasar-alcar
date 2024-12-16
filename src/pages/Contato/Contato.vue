<template>
  <div class="tudo">
    <Topbar msg="topbar da pagina" />
    <section class="diferenciais">
      <div class="container">
        <h2>Contatos</h2>
        <ul>
          <li>(91) 98737-7403</li>
          <li>(91) 98242-2476</li>
          <li>@alcarengenharia</li>
          <li></li>
          <li>
            ED. TROPICAL CENTER, AV. GOV. MAGALHES BARATA 695 SALA 103, BELÉM-PA
          </li>
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
  name: "VueContato",
  components: {
    Topbar,
    VueFooter,
  },
};
</script>
<style>
.contatos {
  margin-top: 110px;
}
</style>
