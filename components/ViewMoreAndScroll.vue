<template>
  <div class="mt-6">
    <button type="button" class="py-6 h-6 align-middle focus:bg-transparent text-base text-indigo-600">
      <nuxt-link :to="url" class="-mt-3 block">
        View More
      </nuxt-link>
    </button>
    <button class="float-right py-3 text-sm px-3 bg-white rounded-full ml-3" @click="scrollRight">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#4F46E5" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
    <button class="float-right py-3 text-sm px-3 bg-white rounded-full" @click="scrollLeft">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#4F46E5" stroke-width="2">
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
