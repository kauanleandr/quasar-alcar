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
        <div class="custom-caption">
          <div class="TextCarousel">
            <a>OBRAS EM<br />PRODUÇÃO</a>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="2"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMykdRsXvDkem2y4ZtpIH4d8w_z-OXUpe-Aj4vyjS1fohqHHL8Nf4DRZVN4s7aRyOxktE&usqp=CAU"
      >
        <div class="custom-caption">
          <div class="TextCarousel">REFORMAS E <br />CONSTRUÇÕES</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="3"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJWuNmCa_IX2aMWJSOEFSByEUo4OBSbp-ocEYHRar9zzeHnWHJ8h5ej0KE1TzYn45CdQ&usqp=CAU"
      >
        <div class="custom-caption">
          <div class="TextCarousel">
            SOLUÇÕES DE<br />
            ENGENHARIA
          </div>
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
  position: absolute
  top: 50%
  left: 5%
  transform: translateY(-50%)
  text-align: left
  color: white
  background-color: rgba(0, 0, 0, 0.5)
  padding: 16px
  border-radius: 8px

.custom-carousel
  height: 800px

.TextCarousel
  font-size: 45px
  font-family: sans-serif

@media (max-width: 768px)
  .custom-caption
    left: 10%
    padding: 12px
    font-size: 16px

  .TextCarousel
    font-size: 24px

  .custom-carousel
    height: 500px

@media (max-width: 480px)
  .custom-caption
    left: 11%
    padding: 8px

  .TextCarousel
    font-size: 18px

  .custom-carousel
    height: 500px
</style>
