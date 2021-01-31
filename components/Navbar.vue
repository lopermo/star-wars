<template>
  <div
    :class="[
      'w-screen h-auto min-h-full lg:py-8 lg:px-12',
      {
        'absolute top-0 left-0 text-white z-20 bg-gradient-to-b from-gray-800': overlay,
      },
      {
        'bg-jedi-blue text-white dark:bg-darth-dark text-inherit dark:text-white border-b border-gray-900': !overlay,
      },
    ]"
  >
    <div class="flex items-center justify-between">
      <nuxt-link to="/" class="w-4/12">
        <img
          svg-inline
          src="~/assets/star-wars.svg"
          class="lg:h-16 w-auto fill-current"
          alt="Star Wars' franchise logo"
        />
      </nuxt-link>

      <nuxt-link
        to="/list/1"
        class="uppercase tracking-widest font-bold transition-all px-5 py-1.5 rounded-md"
        :class="{
          'hover:bg-opacity-20 hover:text-white hover:bg-gray-50': overlay,
          'hover:bg-opacity-70 dark:hover-bg-opacity-30 hover:text-white hover:bg-jedi-blue dark:hover:bg-white dark:hover:text-black': !overlay,
        }"
      >
        Characters
      </nuxt-link>

      <!-- search box -->
      <div class="flex text-right flex-col items-end w-4/12">
        <Search class="text-dark" />
        <div class="flex mt-3 text-sm">
          <div class="font-medium mr-4">Last visited:</div>
          <div class="flex space-x-4">
            <nuxt-link
              :to="`/character/${character.id}`"
              class="underline"
              v-for="(character, id) in listVisited"
              :key="id"
            >
              {{ character.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { historyStore } from "~/store/index";

interface Character {
  id: number;
  name: string;
}

export default Vue.extend({
  props: {
    overlay: {
      type: Boolean,
      required: false,
      default: false,
    } as PropOptions<Boolean>,
  },
  data() {
    return {};
  },
  computed: {
    listVisited(): Character[] {
      return historyStore.getLastVisited;
    },
  },
});
</script>
