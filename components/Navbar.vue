<template>
  <div
    :class="[
      'w-screen h-auto min-h-full py-6 lg:py-8 px-6 lg:px-12',
      {
        'absolute top-0 left-0 text-white z-20 bg-gradient-to-b from-gray-800': overlay,
      },
      {
        'bg-jedi-blue text-white dark:bg-darth-dark text-inherit dark:text-white border-b border-gray-900': !overlay,
      },
    ]"
  >
    <div
      class="flex flex-wrap lg:flex-nowrap items-center justify-center xl:justify-between"
    >
      <nuxt-link
        to="/"
        class="w-full md:w-auto xl:w-4/12 md:mr-6 xl:mr-0 nuxt-link-active"
      >
        <img
          svg-inline
          src="~/assets/star-wars.svg"
          class="h-12 lg:h-16 w-auto fill-current mx-auto md:mx-0"
          alt="Star Wars' franchise logo"
        />
      </nuxt-link>

      <div class="my-6 md:my-0">
        <nuxt-link
          to="/list/1"
          class="uppercase tracking-widest font-bold transition-all rounded-md hover:bg-opacity-20 hover:text-white hover:bg-white px-5 md:px-3 lg:px-5 py-1.5"
        >
          Characters
        </nuxt-link>
      </div>

      <!-- search box -->
      <div
        class="flex md:text-right flex-col items-end ml-auto xl:ml-0 xl:w-4/12"
      >
        <Search class="mx-auto md:mx-0 mb-4 md:mb-0" />
        <div
          class="flex flex-wrap md:flex-nowrap justify-center md:justify-start mt-3 text-sm"
        >
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
