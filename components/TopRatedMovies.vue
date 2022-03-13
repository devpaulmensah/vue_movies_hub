<template>
  <div class="pt-8 pb-4 px-4 lg:px-0">
    <h3 class="text-md sm:text-xl font-bold text-gray-800 dark:text-slate-100">
      Top Rated Movies
    </h3>

    <div v-if="movies.length < 1" id="topRatedScrollSection" class="snap-x flex scroll-smooth overflow-auto scroll-section mt-4">
      <div  v-for="(n) in 8" :key="n" class="snap-start">
        <LoadingMovieCard class="w-80 sm:w-96 mr-4"/>
      </div>
    </div>

    <div v-else id="topRatedScrollSection" class="snap-x flex scroll-smooth overflow-auto scroll-section mt-4">
      <div v-for="(movie, index) in movies"  :key="index" class="snap-start">
        <MovieCard :movie="movie" class="w-80 sm:w-96 mr-4"/>
      </div>
    </div>

    <ViewMoreAndScroll scroll-id="topRatedScrollSection" url="top-rated"/>
  </div>
</template>

<script>
import _ from 'lodash';
import MovieCard from "./MovieCard.vue";
import LoadingMovieCard from './LoadingMovieCard.vue';

export default {
    name: "TopRatedMovies",
    components: { MovieCard, LoadingMovieCard },
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
        await this.$axios.get('movies/top-rated')
        .then(response => {
          this.movies = _.shuffle(response.data.data.results).splice(0, 8);
        })
      }
    }
}
</script>
