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
        img-src="https://as2.ftcdn.net/v2/jpg/02/66/38/85/1000_F_266388535_6CrzACwGRYsX0EHECI78JhIr241ntOkq.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">OBRAS EM PRODUÇÃO</div>
          <div class="text-subtitle1">
            Veja as obras que a alçar está produzindo
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="2"
        img-src="https://as2.ftcdn.net/v2/jpg/04/68/02/55/1000_F_468025592_dHrfii3kGDXBhAi38RLjFUF25wShm5xU.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">REFORMAS E CONSTRUÇÕES</div>
          <div class="text-subtitle1">A</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="3"
        img-src="https://as2.ftcdn.net/v2/jpg/02/64/87/45/1000_F_264874512_asSj4QLFkdifkjMUDj80UKLKKwtH8qBZ.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">SOLUÇÕES DE ENGENHARIA</div>
          <div class="text-subtitle1">A</div>
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
.q-pa-md {
  margin-top: 85px;
}
</style>
