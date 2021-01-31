<template>
  <div
    class="px-6 md:px-16 lg:px-40 xl:px-16 xl:container py-16 lg:py-20 mx-auto"
  >
    <div
      class="flex xl:justify-between flex-wrap xl:flex-nowrap xl:space-x-8 flex-auto items-center bg-white border-gray-400 rounded-md px-4 lg:px-8 py-3 transform shadow"
    >
      <div
        class="font-bold uppercase tracking-widest text-gray-700 mb-4 xl:mb-0 w-full xl:w-auto text-center xl:text-left"
      >
        List of characters
      </div>
      <paginate
        v-model="page"
        :page-count="count"
        :page-range="3"
        :margin-pages="0"
        :hide-prev-next="true"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'flex items-center space-x-3 justify-center py-2 w-full xl:w-auto'"
        :page-class="'pagination-link'"
        :prev-class="'pagination-link next_prev'"
        :next-class="'pagination-link next_prev'"
        :click-handler="navigate"
      />
    </div>
    <character-list :characters="characters.results" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Character from "~/types/character";
import CharacterList from "../../types/characterList";

export default Vue.extend({
  data() {
    return {
      page: 1,
      count: 0,
      characters: {
        count: 0,
        next: null,
        previous: null,
        results: [],
      } as CharacterList,
    };
  },
  async fetch(): Promise<void> {
    try {
      this.characters = await this.$axios.$get(
        `https://swapi.dev/api/people/?page=${this.page}`
      );
    } catch (error) {
      this.$router.push({ name: "notfound" });
    }
    this.characters.results = this.characters.results.map((data: any) => {
      return {
        ...data,
        id: data?.url
          ?.toString()
          ?.split("http://swapi.dev/api/people/")
          ?.pop()
          ?.slice(0, -1),
      };
    });
    this.count = Math.ceil(this.characters.count / 10); // 10 characters per page
  },
  created() {
    this.page = parseInt(this.$route.params.page);
  },
  methods: {
    navigate(pageNum: string): void {
      this.$router.push({ name: "list-page", params: { page: pageNum } });
    },
  },
});
</script>

<style lang="scss">
.pagination-link {
  @apply text-xs font-bold;
  a {
    @apply rounded-md bg-gray-200 px-3 py-1.5;
  }
  &.active {
    @apply transform scale-125;
    a {
      @apply bg-jedi-blue text-white dark:bg-darth-red dark:text-white;
    }
  }
  &.disabled {
    @apply bg-gray-50 cursor-not-allowed hidden md:block;
    a {
      @apply cursor-not-allowed;
    }
  }
  &.next_prev {
    @apply px-4 font-medium;
  }
}
</style>