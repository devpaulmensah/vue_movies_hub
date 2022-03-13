<template>
  <div class="page scroll-smooth">
    <AppHeader/>
    <main>
      <Nuxt v-if="$nuxt.isOnline" class="page-max-width mx-auto"/>
      <div v-if="$nuxt.isOffline" class="text-center flex flex-col justify-center loading-container">
        <div class="image-section flex flex-row justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 animate-bounce stroke-slate-600 dark:stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
          </svg>
        </div>
        <h6 class="text-lg font-medium dark:text-slate-100">Offline!</h6>
        <p class="text-gray-500 dark:text-slate-400">
          You're offline, check your internet connectivity
        </p>
      </div>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style scoped>
  .loading-container {
    min-height: calc(100vh - 190px);
  }
</style>


