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
        :src="`/src/assets/midia/residencial/${currentCategory}/${image}`"
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
        "APARTAMENTO 601 SAVONNA": [],
        "APARTAMENTO 602 SAVONNA": [],
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
