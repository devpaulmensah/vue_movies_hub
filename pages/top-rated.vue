<template>
  <div>
    <PageDescription v-if="!loading" :title="'Top Rated Movies'" :image-url="selectedMovie.backdropPath"/>
    <div v-if="loading" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4 mb-4 px-4 lg:px-0">
        <div v-for="(n) in 16" :key="n">
          <LoadingMovieCard class="w-full"/>
        </div>
    </div>
    <div v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4 mb-4 px-4 lg:px-0">
        <div v-for="(movie, index) in movies" :key="index">
          <MovieCard :movie="movie" class="w-full" />
        </div>
    </div>
    <div v-if="!loading" class="mb-4">
      <nav class="border-t border-gray-200 dark:border-slate-700 px-4 flex items-center justify-between sm:px-0">
        <div class="-mt-px w-0 flex-1 flex">
          <button class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300" @click="loadPrevious">
            <!-- Heroicon name: solid/arrow-narrow-left -->
            <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            Previous
          </button>
        </div>
        <div class="hidden md:-mt-px md:flex">
          <button v-for="n in 10" :key="n" :class="{ 'border-indigo-500 border-t-2': n == page }" class="border-transparent text-gray-500 hover:text-gray-700 pt-4 px-4 inline-flex items-center text-sm font-medium" @click="loadPage(n)">{{ n }}</button>
        </div>
        <div class="sm:hidden border-indigo-500 border-t-2 border-transparent text-gray-500 hover:text-gray-700 pt-4 px-4 inline-flex items-center text-sm font-medium">
          {{ page }}
        </div>
        <div class="-mt-px w-0 flex-1 flex justify-end">
          <button class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300" @click="loadNext">
            Next
            <!-- Heroicon name: solid/arrow-narrow-right -->
            <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import MovieCard from "~/components/MovieCard.vue";
import PageDescription from '~/components/PageDescription.vue';
export default {
  name: "TopRatedPage",
  components: { MovieCard, PageDescription },
  layout: "mainLayout",
  data() {
      return {
          loading: true,
          movies: [],
          selectedMovie: null,
          page: 1
      };
  },
  watch: {
    async page (newValue, oldValue) {
      if(newValue !== oldValue){
        await this.getTopRatedMovies();
      }
    }
  },
  async created() {
      await this.getTopRatedMovies();
  },
  methods: {
      async getTopRatedMovies() {
          this.loading = true;

          await this.$axios.get(`movies/top-rated?page=${this.page}`)
          .then(response => {
            this.movies = response.data.data.results;
            this.selectedMovie = _.shuffle(this.movies).splice(0,1)[0]
            this.loading = false;
          });
      },

      loadPrevious () {
        if (this.page > 1) {
          this.page -= 1;
        }
      },

      loadNext () {
        this.page = this.page >= 5 ? 1 : this.page + 1;
      },

      loadPage (page) {
        this.page = page;
      }
  }
}
</script>
