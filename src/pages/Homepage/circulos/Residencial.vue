<template>
  <div>
    <Topbar msg="topbar da pagina" />
    <div class="text-titulo">{{ currentTitle }}</div>
    <div class="navigation-buttons">
      <q-btn @click="changeCategory('prev')" label="<" />
      <q-btn @click="changeCategory('next')" label=">" />
    </div>
    <section class="galeria">
      <img
        v-for="(image, index) in currentImageList"
        :key="index"
        :src="`/src/assets/midia/residencial/${currentCategory}//${image}`"
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
      categories: {
        "CASA JARDINS DO LAGO": [
          "IMG_1070.jpg",
          "IMG_1073.jpg",
          "IMG_1072.jpg",
          "IMG_1071.jpg",
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
        "APARTAMENTO 01 SAVONNA": [
          "IMG_0138.JPG",
          "IMG_0139.JPG",
          "IMG_0140.JPG",
          "IMG_0152.JPG",
          "IMG_0153.JPG",
          "IMG_0154.JPG",
          "IMG_0155.JPG",
          "IMG_0156.JPG",
          "IMG_0157.JPG",
          "IMG_0159.JPG",
          "IMG_0160.JPG",
          "IMG_0162.JPG",
          "IMG_0163.JPG",
          "IMG_0164.JPG",
          "IMG_0190.JPG",
          "IMG_0192.JPG",
          "IMG_0195.JPG",
          "IMG_0198.JPG",
          "IMG_0199.JPG",
          "IMG_0296.JPG",
          "IMG_0354.JPG",
          "IMG_0355.JPG",
          "IMG_0356.JPG",
          "IMG_0357.JPG",
          "IMG_0358.JPG",
          "IMG_0359.JPG",
          "IMG_0360.JPG",
          "IMG_0361.JPG",
          "IMG_0363.JPG",
          "IMG_0364.JPG",
          "IMG_0365.JPG",
          "IMG_0366.JPG",
          "IMG_0370.JPG",
          "IMG_0371.JPG",
          "IMG_0372.JPG",
          "IMG_0373.JPG",
          "IMG_0374.JPG",
          "IMG_0375.JPG",
          "IMG_0376.JPG",
          "IMG_0969.jpg",
          "IMG_0990.jpg",
          "IMG_0991.jpg",
          "IMG_0995.jpg",
          "IMG_1068.jpg",
          "IMG_1074.jpg",
        ],
        "APARTAMENTO 02 SAVONNA": [
          "IMG_0261.jpg",
          "IMG_0262.jpg",
          "IMG_0263.jpg",
          "IMG_0264.jpg",
          "IMG_0265.jpg",
          "IMG_0271.jpg",
          "IMG_0272.jpg",
          "IMG_0273.jpg",
          "IMG_0274.jpg",
          "IMG_0275.jpg",
          "IMG_0276.jpg",
          "IMG_0277.jpg",
          "IMG_0278.jpg",
          "IMG_0279.jpg",
          "IMG_0280.jpg",
          "IMG_0281.jpg",
          "IMG_0282.jpg",
          "IMG_0283.jpg",
          "IMG_0285.jpg",
          "IMG_0289.jpg",
          "IMG_1382.jpg",
          "IMG_1383.jpg",
          "IMG_1384.jpg",
          "IMG_1385.jpg",
          "IMG_1386.jpg",
          "IMG_1387.jpg",
          "IMG_1388.jpg",
          "IMG_1389.jpg",
          "IMG_1390.jpg",
          "IMG_1391.jpg",
          "IMG_1392.jpg",
          "IMG_1393.jpg",
          "IMG_1394.jpg",
          "IMG_1395.jpg",
          "IMG_1396.jpg",
          "IMG_1397.jpg",
          "IMG_1398.jpg",
          "IMG_1399.jpg",
          "IMG_1400.jpg",
        ],

        "APARTAMENTO 1301 SAVONNA": [],
        "APARTAMENTO 1302 SAVONNA": [],
        "APARTAMENTO 1401 SAVONNA": [],
        "APARTAMENTO 1501 SAVONNA": [],
        "APARTAMENTO 2301 SAVONNA": [],
        "APARTAMENTO 2302 SAVONNA": [],
        "APARTAMENTO 2901 SAVONNA": [],
        "APARTAMENTO 2902 SAVONNA": [],
        "APARTAMENTO 1902 SAVONNA": [],
        "APARTAMENTO 801 MASSIMO": [],
        "APARTAMENTO 2801 MASSIMO": [],
        "APARTAMENTO 2802 MASSIMO": [],
        "APARTAMENTO DURHAM": [],
      },
      currentCategory: "CASA JARDINS DO LAGO",
      currentTitle: "CASA JARDINS DO LAGO",
    };
  },
  computed: {
    currentImageList() {
      return this.categories[this.currentCategory];
    },
  },
  methods: {
    changeCategory(direction) {
      const keys = Object.keys(this.categories);
      const currentIndex = keys.indexOf(this.currentCategory);
      if (direction === "next") {
        this.currentCategory = keys[(currentIndex + 1) % keys.length];
      } else if (direction === "prev") {
        this.currentCategory =
          keys[(currentIndex - 1 + keys.length) % keys.length];
      }
      this.currentTitle = this.currentCategory; // Atualiza o título
    },
  },
};
</script>

<style>
.text-titulo {
  font-size: 30px;
  text-align: center;
  margin-top: 120px;
}
.navigation-buttons {
  display: flex;
  justify-content: center;
  margin: 20px 0;
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
