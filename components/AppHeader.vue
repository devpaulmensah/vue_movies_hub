<template>
    <div class="bg-white dark:bg-slate-900 fixed w-full app-header shadow z-10">
        <div class="max-w-screen-xl mx-auto px-4 lg:px-0">
            <div class="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start ">
                    <NuxtLink to="/" class="font-semibold text-lg dark:text-gray-200">
                        VueMoviesHub
                    </NuxtLink>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button
                        type="button"
                        class="bg-white dark:bg-slate-800 dark:text-slate-400  rounded-md p-2 inline-flex items-center justify-center text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                        @click="openSidemenu = true">
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <nav class="hidden md:flex space-x-5">
                    <NuxtLink to="/top-rated" class="text-base font-medium text-gray-500 dark:text-gray-300">
                        Top Rated
                    </NuxtLink>
                    <NuxtLink to="/popular" class="text-base font-medium text-gray-500 dark:text-gray-300">
                        Popular
                    </NuxtLink>
                    <NuxtLink to="/upcoming" class="text-base font-medium text-gray-500 dark:text-gray-300">
                        Upcoming
                    </NuxtLink>
                </nav>
                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <NuxtLink to="/sign-in" class="whitespace-nowrap text-base font-medium text-gray-500 dark:text-gray-300">
                        Sign in
                    </NuxtLink>
                    <NuxtLink to="/sign-up" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign up
                    </NuxtLink>
                </div>
            </div>
            <!--
                Mobile menu, show/hide based on mobile menu state.

                Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
                Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <div :class="{ 'hidden': !openSidemenu }" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" >
                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 dark:bg-slate-800">
                      <div class="pt-5 pb-6 px-5">
                          <div class="flex items-center justify-between">
                            <div class="text-lg font-medium dark:text-slate-200">
                                VueMoviesHub
                            </div>
                            <div class="-mr-2">
                                <button
                                    type="button"
                                    class="bg-white rounded-md p-2 inline-flex dark:bg-slate-900 items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    @click="openSidemenu = false">
                                  <span class="sr-only">Close menu</span>
                                  <!-- Heroicon name: outline/x -->
                                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                            </div>
                          </div>
                          <div class="mt-6">
                            <nav class="grid gap-y-8">
                                <NuxtLink to="/" class="-m-3 p-3 flex items-center rounded-md">
                                  <!-- Heroicon name: outline/chart-bar -->
                                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                  </svg>
                                  <span class="ml-3 text-base font-medium text-gray-900 dark:text-slate-200">
                                      Home
                                  </span>
                                </NuxtLink>

                                <NuxtLink to="/top-rated" class="-m-3 p-3 flex items-center rounded-md">
                                  <!-- Heroicon name: outline/cursor-click -->
                                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                  </svg>

                                  <span class="ml-3 text-base font-medium text-gray-900 dark:text-slate-200">
                                      Top Rated
                                  </span>
                                </NuxtLink>

                                <NuxtLink to="/popular" class="-m-3 p-3 flex items-center rounded-md">
                                  <!-- Heroicon name: outline/shield-check -->
                                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                  </svg>
                                  <span class="ml-3 text-base font-medium text-gray-900 dark:text-slate-200">
                                      Popular
                                  </span>
                                </NuxtLink>

                                <NuxtLink to="/upcoming" class="-m-3 p-3 flex items-center rounded-md">
                                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span class="ml-3 text-base font-medium text-gray-900 dark:text-slate-200">
                                      Upcoming
                                  </span>
                                </NuxtLink>
                            </nav>
                          </div>
                      </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    data (){
        return {
            openSidemenu: false
        }
    }
}
</script>
