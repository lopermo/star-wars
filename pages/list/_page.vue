<template>
  <div class="container py-16 lg:py-20 mx-auto">
    <div
      class="flex justify-between space-x-8 flex-auto items-center bg-white rounded-md px-8 py-3 transform shadow-lg"
    >
      <div class="font-extrabold uppercase tracking-widest">
        List of characters
      </div>
      <paginate
        v-model="page"
        :page-count="count"
        :page-range="4"
        :margin-pages="0"
        :hide-prev-next="true"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'flex items-center space-x-3 justify-center py-2'"
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
    this.characters = await this.$axios.$get(
      `https://swapi.dev/api/people/?page=${this.page}`
    );
    this.characters.results = this.characters.results.map((data) => {
      return {
        ...data,
        id: data.url.split("http://swapi.dev/api/people/").pop().slice(0, -1),
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