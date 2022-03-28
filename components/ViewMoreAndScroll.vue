<template>
  <div class="mt-2 sm:mt-6">
    <button type="button" class="py-6 h-6  align-middle focus:bg-transparent text-base text-indigo-600">
      <NuxtLink :to="'/'+url" class="-mt-3 block">
        View More
      </NuxtLink>
    </button>
    <button class="float-right py-3 hidden sm:block text-sm px-3 bg-white rounded-full ml-3 dark:bg-slate-800" @click="scrollRight">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-indigo-600 dark:stroke-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
    <button class="float-right py-3 hidden sm:block text-sm px-3 bg-white rounded-full dark:bg-slate-800" @click="scrollLeft">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-indigo-600 dark:stroke-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ViewMoreAndScroll',
  props: {
    scrollId:{
      type: String,
      default: ""
    },
    url:{
      type: String,
      default: "/"
    }
  },
  methods: {
    scrollLeft () {
      document.getElementById(this.scrollId).scrollLeft -= 250;
    },
    scrollRight () {
      document.getElementById(this.scrollId).scrollLeft += 250;
    }
  }
}
</script>
