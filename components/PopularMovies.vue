<template>
  <div class="pt-8 pb-2 px-2 sm:px-0">
    <h3 class="text-md sm:text-xl font-bold text-gray-800">
      Popular Movies
    </h3>

    <div id="popularScrollSection" class="snap-x flex scroll-smooth overflow-auto scroll-section mt-4">
      <div v-for="(movie, index) in movies" :key="index" class="snap-center">
        <HorizontalMovieCard :movie="movie" class="w-80 sm:w-96 mr-4"/>
      </div>
    </div>

    <ViewMoreAndScroll scroll-id="popularScrollSection" url="popular"/>
  </div>
</template>

<script>
import _ from 'lodash';
import HorizontalMovieCard from "./HorizontalMovieCard.vue";

export default {
    name: "PopularMovies",
    components: { HorizontalMovieCard },
    data () {
      return {
        movies: []
      }
    },
    async created () {
      await this.getTopRatedMovies();
    },
    methods: {
      async getTopRatedMovies () {
        await this.$axios.get(`${this.$config.moviesBaseUrl}/movie/popular?api_key=${this.$config.apiKey}`)
        .then(response => {
          this.movies = _.shuffle(response.data.results).splice(0, 8);
        })
      }
    }
}
</script>
