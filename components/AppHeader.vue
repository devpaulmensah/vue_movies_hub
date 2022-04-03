<template>
    <div class="bg-white dark:bg-slate-900 fixed w-full app-header shadow z-10 content-section">
        <div class="max-w-screen-2xl mx-auto px-4 lg:px-0">
            <div class="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start ">
                    <NuxtLink to="/" class="font-semibold text-lg dark:text-gray-200">
                        VueMoviesHub
                    </NuxtLink>
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
                <div v-if="!isLoggedIn" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <NuxtLink to="/sign-in" class="whitespace-nowrap text-base font-medium text-gray-500 dark:text-gray-300">
                        Sign in
                    </NuxtLink>
                    <NuxtLink to="/sign-up" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign up
                    </NuxtLink>
                </div>
                <div v-if="isLoggedIn" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <NuxtLink to="/profile" class="whitespace-nowrap text-base font-medium text-gray-500 dark:text-gray-300">
                        {{ user.firstName }} {{ user.lastName }}
                    </NuxtLink>
                    <button class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600" @click="signOut">
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    data (){
        return {
            openSidemenu: false,
            isLoggedIn: this.$auth.loggedIn,
            user: this.$auth.user
        }
    },
    methods: {
      async signOut() {
        await this.$auth.logout("local");
        window.location.reload()
      }
    }
}
</script>
