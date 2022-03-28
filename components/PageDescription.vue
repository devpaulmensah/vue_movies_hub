<template>
  <div class="relative shadow-xl  sm:overflow-hidden z-0">
    <div class="absolute inset-0">
      <img class="h-full w-full object-cover" :src="movieBackdropUrl" :alt="title">
      <div class="absolute inset-0 bg-indigo-400 mix-blend-multiply"></div>
    </div>
    <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
      <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span class="block text-white">{{ title }}</span>
      </h1>
      <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
        Get access to top-rated, popular and upcoming movies and watch trailers and many more. All for free!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageDescription',
  props: {
    imageUrl: {
      type: String,
      default: null,
      required: true
    },
    title: {
      type: String,
      default: null,
      required: true
    }
  },
  computed: {
    movieBackdropUrl() {
      return this.imageUrl != null
      ? `http://image.tmdb.org/t/p/w1280${this.imageUrl}`
      : 'https://res.cloudinary.com/xcvcx234dfvgw5dfg/image/upload/v1646748706/movieshub/specna-arms-BHtfQxJJBbE-unsplash_odkzrt.jpg';
    }
  }

}
</script>
