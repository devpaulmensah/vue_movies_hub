<template>
  <div class="movie-card bg-white border p-5 dark:bg-slate-800 dark:border-slate-700">
    <div class="image-section w-full h-full">
     <nuxt-img :src="movieImage" :alt="title" draggable="false" loading="lazy"/>
    </div>
    <nuxt-link :to="movieUrl" class="font-medium text-base py-2 truncate block text-indigo-600 dark:text-indigo-500" >
        {{ title }}
    </nuxt-link>
    <p class="text-sm text-gray-500">
      <svg v-for="(n) in rating" :key="n"   xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="#ffdf00">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg v-for="(m) in (5 - rating)" :key="'_'+m"   xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </p>
    <p class="text-sm text-gray-500 dark:text-slate-400">
      {{ totalReviews }} Reviews
    </p>
  </div>
</template>

<script>
export default {
  name: "HorizontalMovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
      default: null
    }
  },
  computed: {
    title () {
      return this.movie.title || this.movie.originalTitle;
    },

    movieImage () {
      return `http://image.tmdb.org/t/p/w300${this.movie.backdropPath}`;
    },

    movieUrl () {
      return `/movie/${this.movie.id}`;
    },

    rating () {
      return Math.ceil(this.movie.voteAverage/ 2);
    },

    totalReviews () {
      return this.movie.voteCount.toLocaleString()
    }
  }
}
</script>
