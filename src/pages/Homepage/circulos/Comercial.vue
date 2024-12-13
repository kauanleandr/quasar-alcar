<template>
  <div>
    <Topbar msg="topbar da pagina" />
    <div class="text-titulo">CLÍNICA TROPICAL CENTER</div>
    <section class="galeria">
      <img
        v-for="(image, index) in imageList"
        :key="index"
        :src="`/src/assets/midia/comercial/CLÍNICA TROPICAL CENTER/${image}`"
        alt="Imagem da galeria"
      />
    </section>
    <VueFooter msg="footer da pagina" />
  </div>
</template>

<script>
import Topbar from "src/layouts/Topbar.vue";
import VueFooter from "src/layouts/VueFooter.vue";

export default {
  name: "VueComercial",
  components: {
    Topbar,
    VueFooter,
  },
  data() {
    return {
      imageList: [
        "IMG_2131.jpg",
        "IMG_2132.jpg",
        "IMG_2133.jpg",
        "IMG_2134.jpg",
        "IMG_2135.jpg",
        "IMG_2136.jpg",
        "IMG_2137.jpg",
        "IMG_2138.jpg",
        "IMG_2139.jpg",
        "IMG_2140.jpg",
        "IMG_2486.jpg",
        "IMG_2489.jpg",
        "IMG_2490.jpg",
        "IMG_2491.jpg",
        "IMG_2492.jpg",
        "IMG_2493.jpg",
        "IMG_2494.jpg",
        "IMG_2495.jpg",
        "IMG_2500.jpg",
        "IMG_2501.jpg",
        "IMG_2502.jpg",
        "IMG_2503.jpg",
        "IMG_2504.jpg",
        "IMG_2505.jpg",
        "IMG_2506.jpg",
        "IMG_2508.jpg",
        "IMG_2509.jpg",
        "IMG_2558.jpg",
        "IMG_2559.jpg",
        "IMG_2560.jpg",
        "IMG_2561.jpg",
        "IMG_2749.jpg",
        "IMG_2751.jpg",
        "IMG_2759.jpg",
        "IMG_2784.jpg",
        "IMG_2787.jpg",
      ],
    };
  },
};
</script>

<style>
.text-titulo {
  font-size: 30px;
  text-align: center;
  margin-top: 120px;
}
.galeria {
  margin-top: 0;
  columns: 200px;
  column-gap: 0.5em;
}
img {
  width: 100%;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
}
</style>
