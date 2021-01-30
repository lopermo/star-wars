<template>
  <div
    :class="[
      'w-screen h-auto lg:py-8 lg:px-12',
      {
        'absolute bottom-0 left-0 text-white z-20': overlay,
      },
      {
        'dark:text-white': !overlay,
      },
    ]"
  >
    <div class="flex items-center justify-between text-white">
      <nuxt-link to="/">
        <img
          svg-inline
          src="~/assets/star-wars.svg"
          class="lg:h-7 w-auto fill-current"
          alt="Star Wars' franchise logo"
        >
      </nuxt-link>

      <div class="text-xs font-medium lg:text-right">
        This website is in no way affiliated with or endorsed by
        <span class="font-bold underline">Lucasfilm Limited</span>
        or any of its subsidiaries, employees, or associates.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    overlay: {
      type: Boolean,
      required: false,
      default: false
    } as PropOptions<Boolean>
  }
})
</script>
