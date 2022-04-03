<template>
  <div class="relative pb-8">
    <div class="relative flex items-start space-x-4">
      <div class="relative">
        <img class="h-10 w-10 sm:h-14 sm:w-14 bg-gray-400 flex rounded-sm items-center justify-center" :alt="review.author" :src="profileImageUrl" loading="lazy">

        <span class="absolute -bottom-0.5 -right-1 bg-white dark:bg-slate-800 rounded-tl px-0.5 py-px ">
          <!-- Heroicon name: solid/chat-alt -->
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
          </svg>
        </span>
      </div>
      <div class="min-w-0  flex-1">
        <div>
          <div class="text-base">
            <span class="font-medium text-gray-900 dark:text-slate-100">{{ review.author }}</span>
          </div>
          <p class="mt-0.5 text-sm text-gray-500 dark:text-slate-300">{{ reviewDate }}</p>
          <p class="text-sm text-gray-500">
            <svg v-for="(n) in rating" :key="n"   xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="#ffdf00">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg v-for="(m) in (5 - rating)" :key="'_'+m"   xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </p>
        </div>
        <p class="mt-2 text-base text-gray-700 dark:text-slate-200">
          {{ review.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieReview',
  props: {
    review: {
      type: Object,
      default: null
    }
  },
  computed: {
    rating () {
      return Math.ceil(this.review.authorDetails.rating / 2);
    },

    profileImageUrl () {
      const path = this.review.authorDetails.imagePath;

      if(path === null) {
        return "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80";
      }

      if(path.indexOf('/https') === 0){
        return path.substring(1);
      }

      return `http://image.tmdb.org/t/p/w200/${path}`;
    },

    reviewDate () {
      return this.$moment(this.review.createdAt).format("LL");
    }
  }
}
</script>
