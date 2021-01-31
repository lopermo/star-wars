<template>
  <div
    :class="[
      'w-screen h-auto py-6 lg:py-8 px-6 lg:px-12',
      {
        'absolute bottom-0 left-0 text-white z-20': overlay,
      },
      {
        'bg-bg text-gray-600': !overlay,
      },
    ]"
  >
    <div class="flex flex-wrap lg:flex-nowrap items-center justify-between">
      <nuxt-link to="/" class="mb-1.5 md:md-0">
        <img
          svg-inline
          src="~/assets/star-wars.svg"
          class="h-4 lg:h-7 w-auto fill-current mx-auto md:mx-0"
          alt="Star Wars' franchise logo"
        />
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
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  props: {
    overlay: {
      type: Boolean,
      required: false,
      default: false,
    } as PropOptions<Boolean>,
  },
});
</script>
