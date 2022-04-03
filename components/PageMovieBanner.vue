<template>
  <div>
    <div class="relative shadow-xl  sm:overflow-hidden z-0">
      <div class="absolute inset-0">
        <img class="h-full w-full object-cover" :src="backdropUrl" :alt="title">
        <div class="absolute inset-0 bg-gray-400 mix-blend-multiply"></div>
      </div>
      <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-36 lg:px-8">
        <h1 class="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span class="block text-white">{{ title }}</span>
        </h1>
        <p v-if="movie.tagLine" class="mt-6 max-w-lg mx-auto text-center space-x-2 text-xl text-indigo-100 sm:max-w-3xl">
          {{ movie.tagLine }}
        </p>
        <p v-if="!movie.tagLine" class="mt-6 max-w-lg mx-auto text-center space-x-2 text-xl text-indigo-100 sm:max-w-3xl">
          <span
            v-for="(genre, index) in movie.genres"
            :key="index" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">{{ genre.name }}</span>
        </p>
        <div v-if="hasTrailerLink" class="mt-10 max-w-sm mx-auto sm:max-w-none space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              v-if="hasTrailerLink"
              :href="trailerVideoUrl"
              target="_blank"
              class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-indigo-600 text-white sm:px-8">
              Watch Trailer
            </a>
            <button
              v-if="isLoggedIn"
              type="button"
              :class="{ 'bg-red-600': isFavorite, 'bg-indigo-600': !isFavorite }"
              class="w-full sm:w-auto flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white sm:px-8"
              @click="isFavorite ? removeFromFavorites() : addToFavorites() ">
              {{ !isFavorite ? 'Add To Favorites' : 'Remove From Favorites' }}
            </button>
            <a
              v-if="hasWebsiteLink"
              :href="movie.homePage"
              target="_blank"
              class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
              Website
            </a>
        </div>
      </div>
      <div id="scrollStartSection"></div>
    </div>
    <!-- Error Notification-->
    <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 sm:py-6 py-4 pointer-events-none sm:items-start z-50">
      <div class="w-full flex flex-col items-center  sm:items-end">
        <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <div
            v-if="notification.show"
            :class="{ 'bg-red-500': !notification.success, 'bg-green-500': notification.success  }"
            class="sm:max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="p-4">
              <div class="flex items-start">
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="font-medium text-gray-100">{{ notification.success ? 'Successful!' : 'Error Occured!' }}</p>
                  <p class="mt-1 text-gray-200">{{ notification.message }}</p>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    :class="{'text-red-500 focus:ring-red-700': !notification.success, 'text-green-500 focus:ring-green-700': notification.success}"
                    class="bg-white rounded-md inline-flex hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 " @click="notification.show = false">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageMovieBanner",
  props: {
    movie: {
      type: Object,
      required: true,
      default: null
    },
    videos: {
      type: Array,
      default: null
    },
    isFavoriteMovie: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data () {
    return {
      hasTrailerLink: this.videos.length > 0 || this.movie.homePage !== '',
      hasWebsiteLink: this.movie.homePage !== '',
      isLoggedIn: this.$auth.loggedIn,
      isFavorite: this.isFavoriteMovie,
      notification: {
        show: false,
        success: false,
        message: ''
      }
    }
  },
  computed: {
    backdropUrl () {
      const path = this.movie.backdropPath || this.movie.posterPath;
      return `http://image.tmdb.org/t/p/w1280${path}`
    },

    title () {
      return this.movie.title || this.movie.originalTitle
    },

    trailerVideoUrl () {
      const key = this.videos[0].key;
      return `https:,//www.youtube.com/watch?v=${key}`;
    }
  },
  methods: {
    async addToFavorites () {
      await this.$axios.post(`/user/movies/favorites`, {
        id: this.movie.id,
        title: this.title,
        imageUrl: this.backdropUrl,
        totalVoteCount: this.movie.voteCount,
        averageRating: this.movie.voteAverage
      })
      .then((result) => {
        this.isFavorite = true;
        this.notification = {
          show: true,
          success: true,
          message: "Added to favorite movies."
        }
      }).catch((err) => {
        this.notification = {
          show: true,
          success: false,
          message: err.response.message || "An error occured, try again later"
        }
      });
    },

    async removeFromFavorites () {
      await this.$axios.delete(`/user/movies/favorites/${this.movie.id}`)
      .then((result) => {
        this.isFavorite = false;
        this.notification = {
          show: true,
          success: true,
          message: "Removed from favorite movies."
        }
      }).catch((err) => {
        this.notification = {
          show: true,
          success: false,
          message: err.response.message || "An error occured, try again later"
        }
      });
    }
  }
}
</script>
