<template>
  <div>
    <div class="relative shadow-xl  sm:overflow-hidden z-0">
      <div class="absolute inset-0">
        <img class="h-full w-full object-cover" :src="getBackdrop()" :alt="movie.title || movie.originalTitle">
        <div class="absolute inset-0 bg-gray-400 mix-blend-multiply"></div>
      </div>
      <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-36 lg:px-8">
        <h1 class="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span class="block text-white">{{ movie.title || movie.originalTitle }}</span>
        </h1>
        <p v-if="movie.tagLine" class="mt-6 max-w-lg mx-auto text-center space-x-2 text-xl text-indigo-100 sm:max-w-3xl">
          {{ movie.tagLine }}
        </p>
        <p v-if="!movie.tagLine" class="mt-6 max-w-lg mx-auto text-center space-x-2 text-xl text-indigo-100 sm:max-w-3xl">
          <span
            v-for="(genre, index) in movie.genres"
            :key="index" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">{{ genre.name }}</span>
        </p>
        <div v-if="hasTrailerLink || movie.homePage !== '' " class="mt-10 max-w-sm mx-auto sm:max-w-none space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              v-if="hasTrailerLink"
              :href="getTrailerVideoLink()"
              target="_blank"
              class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-indigo-600 text-white sm:px-8">
              Watch Trailer
            </a>
            <a
              v-if="movie.homePage !== ''"
              :href="movie.homePage"
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
    },
    videos: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      hasTrailerLink: this.videos.length > 0
    }
  },
  methods: {
    getBackdrop () {
      return `http://image.tmdb.org/t/p/w1280${this.movie.backdropPath || this.movie.posterPath}`
    },

    getSelectedCast (casts) {
      return casts.filter(c => c.profilePath !== null).slice(0, 7)
    },

    getTrailerVideoLink () {
      const key = this.videos[0].key;
      return `https://www.youtube.com/watch?v=${key}`;
    }
  }
}
</script>
