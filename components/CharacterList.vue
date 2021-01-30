<template>
  <div>
    <div
      class="flex justify-between space-x-8 flex-auto items-center bg-white rounded-md px-8 py-3"
    >
      <div class="font-extrabold uppercase tracking-widest">
        List of characters
      </div>
      <paginate
        :page-count="9"
        :page-range="3"
        :margin-pages="1"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'flex items-center space-x-3 justify-center py-2'"
        :page-class="'pagination-link'"
        :prev-class="'pagination-link next_prev'"
        :next-class="'pagination-link next_prev'"
      />
    </div>
    <div class="grid lg:grid-cols-5 lg:gap-8 mt-6">
      <div
        v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        :key="i"
        class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg"
      >
        <img
          class="w-full h-72 object-cover object-top"
          :src="`/characters/${i}.jpg`"
          alt="Character from Star Wars franchise"
        >
        <div class="p-8">
          Aloha
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    navigate (): void {
      console.log('working')
    }
  }
})
</script>

<style lang="scss">
.pagination-link {
  @apply bg-gray-200 px-3 py-1.5 rounded-md text-xs font-bold;
  &.active {
    @apply transform scale-125 bg-jedi-blue text-white dark:bg-darth-red dark:text-white;
  }
  &.disabled {
    @apply bg-gray-50 cursor-not-allowed;
    a {
      @apply cursor-not-allowed;
    }
  }
  &.next_prev {
    @apply px-4 font-medium;
  }
}
</style>
