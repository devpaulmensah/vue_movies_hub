<template>
  <div class="movie-card bg-white border p-5">
    <div class="image-section w-full h-full">
     <img :src="backdropBaseUrl + movie.backdrop_path" :alt="movie.title || movie.original_title || movie.original_name" draggable="false" loading="lazy"/>
    </div>
    <nuxt-link :to="'movie?id=' + movie.id" class="font-medium text-base block py-2 text-ellipsis overflow-hidden w-full">
      {{ movie.title || movie.original_title || movie.original_name }}
    </nuxt-link>
    <p class="text-sm text-gray-500">
      <svg v-for="(n) in getRating(movie.vote_average)" :key="n"   xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="#ffdf00">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg v-for="(m) in (5 - getRating(movie.vote_average))" :key="'_'+m"   xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </p>
    <p class="text-sm text-gray-500">
      {{ movie.vote_count.toLocaleString() }} Reviews
    </p>
  </div>
</template>

<script>
export default {
  name: "HorizontalMovieCard",
  props: {
    movie: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      backdropBaseUrl: 'http://image.tmdb.org/t/p/w1280'
    }
  },
  methods: {
    getRating(rating) {
      return  Math.ceil(rating / 2);
    }
  }
}
</script>
