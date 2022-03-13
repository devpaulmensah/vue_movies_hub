<template>
  <div class="page">
    <main>
      <div class="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto py-16 sm:py-16">
          <div class="text-center">
            <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
            <h1 class="mt-2 text-2xl font-bold text-gray-900 tracking-tight sm:text-2xl">Page Not Found.</h1>
            <p class="mt-2 text-md text-gray-600 sm:text-base">The page you are looking for could not be found.</p>
          </div>
          <div class="mt-12">
            <h2 class="text-sm font-semibold text-gray-500 tracking-wide uppercase">Popular pages</h2>
            <ul role="list" class="mt-4 space-y-6">
              <li v-for="(popularPage, index) in popularPages" :key="index" class="relative flex items-start space-x-5 bg-white shadow overflow-hidden rounded-md px-5 py-5">
                <div class="flex-shrink-0">
                  <span class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50" v-html="popularPage.icon"></span>
                </div>
                <div class="min-w-0 flex-1">
                  <h3 class="text-base font-medium text-gray-900">
                    <span >
                      <nuxt-link :to="popularPage.url" class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        {{ popularPage.title }}
                      </nuxt-link>
                    </span>
                  </h3>
                  <p class="text-base text-gray-500">{{ popularPage.description }}</p>
                </div>
                <div class="flex-shrink-0 self-center">
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </li>
            </ul>
            <div class="mt-8">
              <nuxt-link to="/" class="text-base font-medium text-indigo-600 hover:text-indigo-500">Or go back home<span aria-hidden="true"> &rarr;</span></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <AppFooter/>
  </div>

</template>

<script>
export default {
  name: "ErrorPage",
  data () {
    return {
      popularPages: [
        {
          icon: `<svg class="h-6 w-6 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>`,
          title: 'Documentation',
          description: 'Learn how to integrate our tools with your app',
          url: '/documentation'
        },
        {
          icon: `<svg class="h-6 w-6 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>`,
          title: 'Support',
          description: 'Contact support for assistance',
          url: '/support'
        }
      ]
    }
  },
  head: {
    title: 'Page Not Found'
  }
}
</script>
