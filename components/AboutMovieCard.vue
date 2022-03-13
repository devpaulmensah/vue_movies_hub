<template>
  <div class="w-full border border-gray-300 bg-white p-4 dark:bg-slate-800 dark:border-slate-700">
    <div class="title-section">
      <h1 class="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-500">{{ movie.title || movie.originalTitle }}</h1>
      <h4 class="text-gray-500 dark:text-slate-300">{{ movie.tagLine }}</h4>
    </div>
    <div class="mt-4">
      <div v-for="(genre, index) in movie.genres" :key="index" class="inline-block px-3 py-1 rounded-sm text-sm mr-2 bg-indigo-600 text-white">
        {{ genre.name }}
      </div>
    </div>
    <p class="mt-6 dark:text-slate-50">
      {{ movie.overview }}
    </p>
    <p class="text-sm text-gray-500 mt-8">
      <svg v-for="(n) in rating" :key="n"   xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="#ffdf00">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg v-for="(m) in (5 - rating)" :key="'_'+m"   xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </p>
    <p v-if="movie.status == 'Released' " class="text-md mt-1 text-gray-500 dark:text-slate-400">
      Release Date: {{ releaseDate }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutMovieCard',
  props: {
    movie: {
      type: Object,
      required: true,
      default: null
    }
  },
  computed: {
    rating () {
      return Math.ceil(this.movie.voteAverage/ 2);
    },

    releaseDate() {
      return this.movie.releaseDate !== '' ? this.$moment(this.movie.releaseDate).format("LL") : 'Not Yet'
    }
  }
}
</script>
