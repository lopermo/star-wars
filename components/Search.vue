<template>
  <div class="relative text-black">
    <input
      class="h-9 w-60 px-4 py-2 bg-white border-2 border-gray-800 rounded-lg text-right text-sm"
      type="text"
      placeholder="Search a character..."
      v-model="name"
    />
    <div
      v-if="name !== '' && debounced === true"
      class="absolute transform translate-y-full right-0 bg-white shadow-2xl rounded-md border-2 border-gray-900 bottom-0.5 overflow-hidden z-20"
    >
      <div class="px-4 py-3" v-if="characters.length == 0">
        We're sorry, but we don't know any
        <span class="font-bold">{{ name }}</span
        >.
      </div>
      <ul v-if="characters.length > 0">
        <li v-for="character in characters">
          <a
            @click="navigate(character.id)"
            class="block py-2 px-6 transform hover:bg-gray-100 transition-all duration-200 cursor-pointer"
          >
            {{ character.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { debounce } from "lodash";
import Character from "../types/character";

export default Vue.extend({
  data() {
    return {
      name: "",
      characters: [] as Character[],
      debounced: false,
    };
  },
  methods: {
    searchName() {
      console.log("Searching...");
      this.$axios
        .$get("https://swapi.dev/api/people/", {
          params: { search: this.name },
        })
        .then(({ results: results }) => {
          this.characters = results;
          this.characters = this.characters.map((data) => {
            return {
              ...data,
              id:
                data?.url
                  .toString()
                  ?.split("http://swapi.dev/api/people/")
                  ?.pop()
                  ?.slice(0, -1) ?? undefined,
            };
          });
          this.debounced = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    navigate(id: string) {
      this.debounced = false;
      this.name = "";
      this.$router.push({ name: "character-id", params: { id: id } });
    },
  },
  created() {
    this.debounceName = debounce(this.searchName, 1000);
  },
  watch: {
    name() {
      console.log("Changed");
      if (!this.name) return;
      this.debounceName();
    },
  },
});
</script>