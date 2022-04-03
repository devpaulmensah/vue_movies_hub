<template>
  <div class="movie-card rounded-lg bg-white border p-5 dark:bg-slate-800 dark:border-slate-700">
    <div class="animate-pulse bg-gray-400 dark:bg-slate-700 image-section mb-3  w-full"></div>
    <div class="animate-pulse bg-gray-300 dark:bg-slate-600 h-5 w-72 mt-2 mb-3"></div>
    <div class="animate-pulse bg-gray-300 dark:bg-slate-600 h-4 w-36 mb-1"></div>
    <div class="animate-pulse bg-gray-300 dark:bg-slate-600 h-4 w-48"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingMovieCard",
}
</script>

<style scoped>
  .image-section {
    height: 168px;
  }

  @media screen and (max-width: 1024px) {
    .image-section {
      height: 137px;
    }
  }
</style>
