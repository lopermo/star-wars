<template>
  <div @click="toggleTheme()">
    <FAB
      :class="[
        'text-white',
        { 'bg-jedi-blue': darkMode, 'bg-darth-red': !darkMode },
      ]"
    >
      <img
        v-if="!darkMode"
        svg-inline
        class="h-10 w-10 fill-current"
        src="~/assets/sith.svg"
      >
      <img
        v-else-if="darkMode"
        svg-inline
        class="h-10 w-10 fill-current"
        src="~/assets/jedi.svg"
      >
    </FAB>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { darkModeStore } from '~/store/index'

export default Vue.extend({
  computed: {
    darkMode (): Boolean {
      return darkModeStore.isDark
    }
  },
  methods: {
    toggleTheme: () => {
      darkModeStore.toggle()
    }
  }
})
</script>
