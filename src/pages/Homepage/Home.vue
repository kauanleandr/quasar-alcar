<template>
  <Topbar msg="topbar da pagina" />
  <div class="tudo">
    <VueCarousel msg="Carousel da pagina" />
    <VueCirculos msg="Circulos com os projetos concluidos" />
    <VueMidpage msg="parte do meio da pagina" />
  </div>
  <VueFooter msg="footer da pagina" />
</template>

<script>
import Topbar from "src/layouts/Topbar.vue";
import VueCarousel from "./VueCarousel.vue";
import VueCirculos from "./VueCirculos.vue";
import VueMidpage from "./VueMidpage.vue";
import VueFooter from "src/layouts/VueFooter.vue";

export default {
  name: "VueHome",
  components: {
    Topbar,
    VueCarousel,
    VueCirculos,
    VueMidpage,
    VueFooter,
  },
};
</script>
<style>
.tudo {
  background-color: #f4f4f4;
}
</style>
