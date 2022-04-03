<template>
    <div class="w-full border border-gray-300 rounded-lg bg-white p-3 flex items-center space-x-4 hover:ring-2 hover:ring-offset-1 hover:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded-sm" :alt="name" :src="profileImageUrl" loading="lazy">
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-base font-medium text-gray-900 dark:text-slate-100">{{ name }}</p>
        <p class="text-sm text-gray-500 truncate dark:text-slate-400">{{ character }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCast',
  props: {
    name: {
      type: String,
      default: ''
    },
    character: {
      type: String,
      default: ''
    },
    profilePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    profileImageUrl () {
      if(this.profilePath) {
        return `http://image.tmdb.org/t/p/w200/${this.profilePath}`;
      }

      return 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
    }
  }
}
</script>
