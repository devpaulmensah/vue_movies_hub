<template>
  <div class="pt-12 pb-4 px-4 lg:px-0">
    <h3 class="text-md sm:text-xl font-bold text-gray-800">Recommeded Movies</h3>

    <div id="recommendedScrollSection" class="snap-x flex scroll-smooth overflow-auto scroll-section mt-4">
      <div v-for="(movie, index) in movies" :key="index" class="snap-center">
        <HorizontalMovieCard :movie="movie" class="w-80 sm:w-96 mr-4"/>
      </div>
    </div>

    <ViewMoreAndScroll scroll-id="recommendedScrollSection" url="recommended" />
  </div>
</template>

<script>
import _ from 'lodash';
import HorizontalMovieCard from "./HorizontalMovieCard.vue";

export default {
    name: "RecommendedMovies",
    components: { HorizontalMovieCard },
    data () {
      return {
        movies: []
      }
    },
    async created () {
      await this.getRecommendedMovies();
    },
    methods: {
      async getRecommendedMovies () {
        await this.$axios.get(`${this.$config.moviesBaseUrl}/trending/all/day?api_key=${this.$config.apiKey}`)
        .then(response => {
          this.movies = _.shuffle(response.data.results).splice(0, 8);
        })
      }
    }
}
</script>
