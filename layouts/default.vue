<template>
  <div :class="{ dark: darkMode }">
    <div class="container-fluid min-h-screen h-full">
      <!-- navbar -->
      <Navbar />
      <!-- ./ navbar -->

      <!-- content -->
      <div class="min-h-screen h-full w-full bg-bg text-black">
        <div
          class="px-6 md:px-16 lg:px-40 xl:px-0 xl:container py-16 lg:py-20 mx-auto"
        >
          <Nuxt />
        </div>
      </div>
      <!-- ./ content -->

      <!-- theme switcher -->
      <div class="fixed bottom-10 lg:pb-5 right-10 flex space-x-3 z-50">
        <nuxt-link to="/error-page">
          <FAB>
            <img
              svg-inline
              class="h-10 w-10"
              src="~/assets/admiral-ackbar.svg"
            />
          </FAB>
        </nuxt-link>
        <theme-switch />
      </div>
      <!-- ./ theme switcher -->

      <!-- footer -->
      <Footer />
      <!-- ./ footer -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { darkModeStore } from "~/store/index";

export default Vue.extend({
  computed: {
    darkMode(): Boolean {
      return darkModeStore.isDark;
    },
  },
});
</script>
