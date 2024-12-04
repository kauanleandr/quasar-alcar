<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      class="custom-carousel"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H4PZrSs0p0fQXR6f-IUvezMdjcgxrFjCkg&s"
      >
        <div class="absolute-bottom custom-caption">
          <div class="TextCarousel">
            <a>OBRAS EM<br />PRODUÇÃO</a>
          </div>
          <div class="text-subtitle1"></div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="2"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMykdRsXvDkem2y4ZtpIH4d8w_z-OXUpe-Aj4vyjS1fohqHHL8Nf4DRZVN4s7aRyOxktE&usqp=CAU"
      >
        <div class="absolute-bottom custom-caption">
          <div class="TextCarousel">REFORMAS E <br />CONSTRUÇÕES</div>
          <div class="text-subtitle1"></div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="3"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJWuNmCa_IX2aMWJSOEFSByEUo4OBSbp-ocEYHRar9zzeHnWHJ8h5ej0KE1TzYn45CdQ&usqp=CAU"
      >
        <div class="absolute-bottom custom-caption">
          <div class="TextCarousel">
            SOLUÇÕES DE<br />
            ENGENHARIA
          </div>
          <div class="text-subtitle1"></div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "VueCarousel",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, 0.3)

.custom-carousel
  height: 500px // Ajuste o tamanho do carrossel
</style>

<style>
.TextCarousel {
  font-size: 50px;
  font-family: sans-serif;
}

.q-pa-md {
  margin-top: 90px;
}
</style>
