<template>
  <div>
    <Topbar msg="topbar da pagina" />
    <div class="text-titulo">CASA JARDINS DO LAGO</div>
    <section class="galeria">
      <img
        v-for="(image, index) in imageList"
        :key="index"
        :src="`/src/assets/midia/residencial/CASA JARDINS DO LAGO/${image}`"
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
  name: "VueResidencial",
  components: {
    Topbar,
    VueFooter,
  },
  data() {
    return {
      imageList: [
        "IMG_1074.jpg",
        "IMG_1101.jpg",
        "IMG_1102.jpg",
        "IMG_1106.jpg",
        "IMG_1107.jpg",
        "IMG_1108.jpg",
        "IMG_1111.jpg",
        "IMG_1112.jpg",
        "IMG_1114.jpg",
        "IMG_1115.jpg",
        "IMG_1116.jpg",
        "IMG_1117.jpg",
        "IMG_1119.jpg",
        "IMG_1120.jpg",
        "IMG_1123.jpg",
        "IMG_1124.jpg",
        "IMG_1125.jpg",
        "IMG_1126.jpg",
        "IMG_1128.jpg",
        "IMG_1129.jpg",
        "IMG_1130.jpg",
        "IMG_1131.jpg",
        "IMG_2093.jpg",
        "IMG_2094.jpg",
        "IMG_2095.jpg",
        "IMG_2096.jpg",
        "IMG_2097.jpg",
        "IMG_2099.jpg",
        "IMG_2100.jpg",
        "IMG_2101.jpg",
        "IMG_2102.jpg",
        "IMG_2104.jpg",
        "IMG_2105.jpg",
        "IMG_2106.jpg",
        "IMG_2107.jpg",
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
  margin-top: 0px;
  columns: 200px;
  column-gap: 0.5em;
}
img {
  width: 100%;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
}
</style>
