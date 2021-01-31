<template>
  <div class="">
    <a
      @click="returnToList()"
      class="cursor-pointer text/sm uppercase tracking-widest font-bold mb-5 block max-w-max text-gray-700"
    >
      ← Go back to the list
    </a>
    <div
      class="bg-white rounded-md overflow-hidden transform shadow flex flex-col lg:flex-row mb-16"
    >
      <div
        class="flex-initial border-r border-gray-900 w-full h-auto lg:w-5/12 xl:w-3/12 relative"
      >
        <img
          class="object-cover object-top absolute left-0 top-0 w-full h-full hidden md:block"
          :src="`/characters/${id}.jpg`"
          alt="Character from Star Wars franchise"
        />
        <img
          class="object-cover object-top w-full h-full lg:hidden"
          :src="`/characters/${id}.jpg`"
          alt="Character from Star Wars franchise"
        />
      </div>
      <div class="w-full lg:flex-grow p-8 lg:py-14 lg:px-16">
        <div
          class="lg:text-xl xl:text-2xl font-medium text-gray-500"
          v-if="!loaded"
        >
          Loading information about the character...
        </div>
        <div v-if="loaded">
          <!-- name -->
          <div
            class="text-xs xl:text-sm font-medium lg:mb-1.5 uppercase tracking-widest text-gray-500"
          >
            Name
          </div>
          <div class="font-bold text-xl lg:text-4xl">{{ character.name }}</div>
          <!-- ./ name -->

          <!-- eye, skin, hair and height -->
          <div
            class="grid md:grid-cols-3 xl:grid-cols-5 gap-x-4 xl:gap-x-16 mt-6 lg:mt-10"
          >
            <div class="mb-4 lg:mb-0">
              <div
                class="text-xs xl:text-sm font-medium lg:mb-1.5 uppercase tracking-widest text-gray-500"
              >
                Eye color
              </div>
              <div class="font-bold lg:text-xl xl:text-2xl">
                {{ character.eye_color | naParser | capitalize }}
              </div>
            </div>

            <div class="mb-4 lg:mb-0">
              <div
                class="text-xs xl:text-sm font-medium lg:mb-1.5 uppercase tracking-widest text-gray-500"
              >
                Hair color
              </div>
              <div class="font-bold lg:text-xl xl:text-2xl">
                {{ character.hair_color | naParser | capitalize }}
              </div>
            </div>

            <div>
              <div
                class="text-xs xl:text-sm font-medium lg:mb-1.5 uppercase tracking-widest text-gray-500"
              >
                Skin color
              </div>
              <div class="font-bold lg:text-xl xl:text-2xl">
                {{ character.skin_color | capitalize }}
              </div>
            </div>
          </div>
          <!-- ./ eye, skin, hair and height -->

          <!-- mass, height, birthdate -->
          <div
            class="grid md:grid-cols-3 xl:grid-cols-5 gap-x-4 xl:gap-x-16 mt-6 lg:mt-10"
          >
            <div class="mb-4 lg:mb-0">
              <div
                class="text-xs xl:text-sm font-medium lg:mb-1.5 uppercase tracking-widest text-gray-500"
              >
                Height
              </div>
              <div class="font-bold lg:text-xl xl:text-2xl">
                {{ character.height | heightParser | capitalize }}
              </div>
            </div>

            <div class="mb-4 lg:mb-0">
              <div
                class="text-xs xl:text-sm font-medium lg:mb-1.5 uppercase tracking-widest text-gray-500"
              >
                Mass
              </div>
              <div class="font-bold lg:text-xl xl:text-2xl">
                {{ character.mass | massParser | capitalize }}
              </div>
            </div>

            <div>
              <div
                class="text-xs xl:text-sm font-medium lg:mb-1.5 uppercase tracking-widest text-gray-500"
              >
                Birth date
              </div>
              <div class="font-bold lg:text-xl xl:text-2xl">
                {{ character.birth_year | capitalize }}
              </div>
            </div>
          </div>
          <!-- ./ mass, height, birthdate -->

          <!-- Films starred -->
          <div
            class="text-xs xl:text-sm font-medium mb-1.5 mt-6 lg:mt-10 uppercase tracking-widest text-gray-500"
          >
            Appears in
          </div>
          <div id="films_starred" class="flex flex-wrap xl:flex-nowrap">
            <div
              class="bg-jedi-blue text-white dark:bg-darth-red dark:text-white px-4 py-0.5 rounded-md text-md font-bold min-w-max max-w-max"
              v-for="film in character.films"
            >
              {{ film }}
            </div>
          </div>
          <!-- ./ Films starred -->
        </div>
      </div>
    </div>

    <!-- navigation -->
    <div class="w-full flex flex-wrap md:flex-nowrap justify-between">
      <nuxt-link
        class="w-full md:w-5/12 xl:w-3/12 mb-4 md:mb-0"
        v-if="prev"
        :to="`/character/${prevId}`"
      >
        <div
          class="h-full bg-white hover:shadow-lg rounded border-b-4 border-jedi-blue dark:border-darth-red shadow-md transition-all duration-200 flex items-center overflow-hidden"
        >
          <img
            class="w-auto h-36 object-cover object-top"
            :src="`/characters/${prevId}.jpg`"
            alt="Character from Star Wars franchise"
          />
          <div class="px-6 py-3">
            <div class="text-2xl mb-3 font-semibold flex items-center">
              <svg
                class="mr-2"
                width="24"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                  fill="currentColor"
                />
              </svg>
              Prev
            </div>
            <div class="text-xl font-light">{{ prev.name }}</div>
          </div>
        </div>
      </nuxt-link>
      <div class="w-px h-px" v-else></div>
      <nuxt-link
        class="w-full md:w-5/12 xl:w-3/12"
        v-if="next"
        :to="`/character/${nextId}`"
      >
        <div
          class="h-full bg-white shadow hover:shadow-lg rounded border-b-4 border-jedi-blue dark:border-darth-red justify-end text-right transition-all duration-200 flex items-center overflow-hidden"
        >
          <div class="px-6 py-3">
            <div
              class="text-2xl mb-3 font-semibold flex items-center justify-end"
            >
              Next
              <svg
                class="ml-2"
                width="24"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div class="text-xl font-light">
              {{ next.name }}
            </div>
          </div>
          <img
            class="w-auto h-36 object-cover object-top"
            :src="`/characters/${nextId}.jpg`"
            alt="Character from Star Wars franchise"
          />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Character from "../../types/character";
import { historyStore } from "~/store/index";

export default Vue.extend({
  data() {
    return {
      id: 1,
      loaded: false,
      character: {} as Character,
      nextId: 0,
      next: null as Character | null,
      prevId: 0,
      prev: null as Character | null,
    };
  },
  async fetch(): Promise<void> {
    try {
      // Fetch the character's info
      try {
        this.character = await this.$axios.$get(
          `https://swapi.dev/api/people/${this.id}`
        );
      } catch (error) {
        this.$router.push({ name: "notfound" });
      }
      // Parse the title of the movies
      this.character.films = this.parseFilms(this.character.films);

      // Fetch the next character
      try {
        this.nextId = this.id + 1 !== 17 ? this.id + 1 : this.id + 2;
        if (this.nextId <= 83 && this.nextId !== 0) {
          this.next = await this.$axios.$get(
            `https://swapi.dev/api/people/${this.nextId}`
          );
        } else {
          this.next = null;
        }
        // Fetch the previous character
        this.prevId = this.id - 1 !== 17 ? this.id - 1 : this.id - 2;
        if (this.prevId >= 1 && this.prevId !== 0) {
          this.prev = await this.$axios.$get(
            `https://swapi.dev/api/people/${this.prevId}`
          );
        } else {
          this.prev = null;
        }
      } catch (error) {}
    } catch (error) {
      this.$router.push({ name: "notfound" });
    } finally {
      this.loaded = true;
      historyStore.pushVisited({ id: this.id, name: this.character.name });
    }
  },
  methods: {
    parseFilms(list: Array<string>): Array<string> {
      let parsedFilms: Array<string> = [];
      this.character.films.forEach((film) => {
        let movieId =
          film
            .toString()
            ?.split("http://swapi.dev/api/films/")
            ?.pop()
            ?.slice(0, -1) ?? undefined;
        switch (Number(movieId)) {
          case 1:
            parsedFilms.push("Episode IV");
            break;
          case 2:
            parsedFilms.push("Episode V");
            break;
          case 3:
            parsedFilms.push("Episode VI");
            break;
          case 4:
            parsedFilms.push("Episode I");
            break;
          case 5:
            parsedFilms.push("Episode II");
            break;
          case 6:
            parsedFilms.push("Episode III");
            break;
        }
      });
      parsedFilms.sort((a, b) => a.localeCompare(b));
      return parsedFilms;
    },

    returnToList() {
      let pageNum =
        this.id < 17 ? Math.ceil(this.id / 10) : Math.ceil((this.id - 1) / 10);
      this.$router.push({
        name: "list-page",
        params: { page: pageNum.toString() },
      });
    },
  },
  created() {
    this.id = parseInt(this.$route.params.id);
  },
});
</script>


<style lang="scss" scoped>
#films_starred div {
  @apply mb-2;
  &:not(:last-child) {
    @apply mr-2;
  }
}
</style>