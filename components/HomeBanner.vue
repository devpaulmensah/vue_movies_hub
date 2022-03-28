<template>
  <div class="relative shadow-xl  sm:overflow-hidden z-0">
    <div class="absolute inset-0">
      <img class="h-full w-full object-cover" src="https://res.cloudinary.com/xcvcx234dfvgw5dfg/image/upload/v1646748706/movieshub/specna-arms-BHtfQxJJBbE-unsplash_odkzrt.jpg" alt="Military Men">
      <div class="absolute inset-0 bg-indigo-400 mix-blend-multiply"></div>
    </div>
    <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
      <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span class="block text-white">MoviesHub</span>
        <span class="block text-indigo-200">Trailers & More!</span>
      </h1>
      <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
        Get access to top-rated, popular and upcoming movies and watch trailers and many more. All for free!
      </p>
      <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <NuxtLink to="/top-rated" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">Explore</NuxtLink>
      </div>
    </div>
    <div id="scrollStartSection"></div>
  </div>
</template>

<script>
export default {
    name: 'HomeBanner'
}
</script>
