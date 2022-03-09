<template>
  <div>
    <div class="relative shadow-xl  sm:overflow-hidden z-0">
      <div class="absolute inset-0">
        <img class="h-full w-full object-cover" :src="getBackdrop()" :alt="movie.details.title || movie.details.original_title || movie.details.original_name">
        <div class="absolute inset-0 bg-gray-400 mix-blend-multiply"></div>
      </div>
      <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-36 lg:px-8">
        <h1 class="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span class="block text-white">{{ movie.details.title || movie.details.original_title || movie.details.original_name }}</span>
        </h1>
        <p class="mt-6 max-w-lg mx-auto text-center space-x-2 text-xl text-indigo-100 sm:max-w-3xl">
          <span
            v-for="(genre, index) in movie.details.genres"
            :key="index" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">{{ genre.name }}</span>
        </p>
        <div class="mt-10 max-w-sm mx-auto sm:max-w-none space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              :href="getTrailerVideoLink()"
              target="_blank"
              class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-indigo-600 text-white sm:px-8">
              Watch Trailer
            </a>
            <a
              v-if="movie.details.homepage !== null"
              :href="movie.details.homepage"
              target="_blank"
              class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
              Website
            </a>
        </div>

      </div>
      <div id="scrollStartSection"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageMovieBanner",
  props: {
    movie: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      hasTrailerLink: true
    }
  },
  methods: {
    getBackdrop () {
      return `http://image.tmdb.org/t/p/w1280${this.movie.details.backdrop_path || this.movie.details.poster_path}`
    },

    getSelectedCast (casts) {
      return casts.filter(c => c.profile_path !== null).slice(0, 7)
    },

    getTrailerVideoLink () {
      if(this.movie.videos.results.length !== 0){
        const key = this.movie.videos.results[0].key;
        this.hasTrailerLink = true;
        return `https://www.youtube.com/watch?v=${key}`;
      }

      return "#";
    }
  }
}
</script>
