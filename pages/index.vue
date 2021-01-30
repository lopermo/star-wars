<template>
  <div class="relative">
    <div
      class="absolute lg:left-10 z-30 flex top-1/2 transform -translate-y-1/2 items-center lg:w-1/2"
    >
      <div class="lg:text-7xl lg:font-black text-white">
        A long time ago in a galaxy far, far away....
      </div>
    </div>
    <client-only placeholder="Cargando...">
      <swiper
        ref="carousel"
        :options="swiperOptions"
        class="h-screen max-h-screen w-full relative"
      >
        <div slot="pagination" class="swiper-pagination" />
        <!-- slide 1 -->
        <swiper-slide class="overflow-hidden">
          <div class="h-screen max-h-screen w-full relative">
            <div
              class="absolute h-full w-full bg-gray-900 opacity-60 top-0 left-0 z-0"
            />
            <img
              src="/slider3.jpg"
              class="h-full w-full object-center object-cover z-10"
              alt="C3-P0 and R2-D2 contemplating the sunset"
            >
          </div>
        </swiper-slide>

        <!-- slide 2 -->
        <swiper-slide class="overflow-hidden">
          <div class="h-screen max-h-screen w-full relative">
            <div
              class="absolute h-full w-full bg-gray-900 opacity-60 top-0 left-0 z-0"
            />
            <img
              src="/slider2.jpg"
              class="h-full w-full object-center object-cover z-10"
              alt="A robot is walking on a deserted planet"
            >
          </div>
        </swiper-slide>

        <!-- slide 3 -->
        <swiper-slide class="overflow-hidden">
          <div class="h-screen max-h-screen w-full relative">
            <div
              class="absolute h-full w-full bg-gray-900 opacity-60 top-0 left-0 z-0"
            />
            <img
              src="/slider1.png"
              class="h-full w-full object-center object-cover z-10"
              alt="Darth Vader and Storm troopers in a digital background"
            >
          </div>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'overlay',
  data () {
    return {
      swiperOptions: {
        speed: 1000,
        loop: true,
        effect: 'fade',
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true
        }
      },
      swiper: undefined
    }
  }
})
</script>
