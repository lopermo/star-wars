<template>
  <div class="grid lg:grid-cols-5 lg:gap-8 mt-6">
    <div
      class="text-bold tracking-widest dark:text-white font-bold"
      v-if="characters.length === 0"
    >
      Searching...
    </div>
    <div
      v-for="(character, i) in characters"
      :key="i"
      class="bg-white rounded-lg overflow-hidden border-gray-400 shadow transform translate-y-0 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <nuxt-link :to="`/character/${character.id}`">
        <div class="relative">
          <img
            class="w-full h-80 object-cover object-top border-b border-gray-900"
            :src="`/characters/${character.id}.jpg`"
            alt="Character from Star Wars franchise"
          />
          <div
            class="absolute h-full w-full top-0 bottom-0 bg-gradient-to-t from-gray-900 opacity-30"
          />
        </div>
        <div class="p-5 py-4 flex-col text-left">
          <div class="font-medium text-xl mb-0.5">
            {{ character.name }}
          </div>
          <div class="flex justify-between items-center space-x-8">
            <div>{{ character.gender | genderParser }}</div>
            <div
              class="bg-jedi-blue text-white dark:bg-darth-red dark:text-white px-2 py-0.5 rounded-md text-xs font-bold"
            >
              {{ character.films.length }}
              {{ "film" | pluralize(character.films.length) }}
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  props: {
    characters: {
      type: Object,
      required: true,
    } as PropOptions<Object>,
  },
});
</script>
