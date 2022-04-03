<template>
  <div class="bottom-navigation fixed -bottom-2 border-t dark:bg-slate-800 bg-white w-full px-4 pb-5 pt-3">
    <div class="grid grid-cols-5 gap-4">
      <NuxtLink to="/" class="py-3 flex justify-center rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 stroke-gray-400 dark:stroke-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/top-rated" class="py-3 flex justify-center rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 stroke-gray-400 dark:stroke-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/popular" class="py-3 flex justify-center rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 stroke-gray-400 dark:stroke-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/upcoming" class="py-3 flex justify-center rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 stroke-gray-400 dark:stroke-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/profile" class="py-3 flex justify-center rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 stroke-gray-400 dark:stroke-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data () {
    return {
      navigationItems:[]
    }
  }
}
</script>

<style scoped>
  @media (prefers-color-scheme: dark) {
    .bottom-navigation {
      border-top: 1px solid #334155;
    }

    a.nuxt-link-exact-active {
      background-color: #0f172a;
      transition: ease-in .3s;
    }

    a.nuxt-link-exact-active svg {
      stroke: white;
    }
  }

  @media (prefers-color-scheme: light) {
    .bottom-navigation {
      border-top: 1px solid #ebecec;
    }

    a.nuxt-link-exact-active {
      background-color: #efeff0;
      transition: ease-in .3s;
    }

    a.nuxt-link-exact-active svg {
      stroke: #4f46e5;
    }
  }


</style>
