<template>
  <div class="py-4 px-4 lg:px-0">
    <div class="bg-white border dark:border-slate-700 dark:bg-slate-800 overflow-hidden rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">User Information</h3>
        <p class="mt-1 max-w-2xl text-gray-500 dark:text-gray-200">Personal details </p>
      </div>
      <div class="border-t border-gray-200 dark:border-slate-700">
        <dl>
          <div class="bg-gray-50 dark:bg-slate-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class=" font-medium text-gray-500 dark:text-gray-200">Name</dt>
            <dd class="mt-1 text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">{{ user.firstName }} {{ user.lastName }}</dd>
          </div>
          <div class="bg-white dark:bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class=" font-medium text-gray-500 dark:text-gray-200">Mobile Number</dt>
            <dd class="mt-1 text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">{{ user.mobileNumber }}</dd>
          </div>
          <div class="bg-gray-50 dark:bg-slate-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class=" font-medium text-gray-500 dark:text-gray-200">Registered</dt>
            <dd class="mt-1 text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">{{ registrationDate }}</dd>
          </div>
          <div class="bg-white dark:bg-slate-800 sm:hidden bg-white-50 px-4 py-5">
            <button
            class="whitespace-nowrap w-full items-center  px-4 py-2 border border-transparent rounded-md font-medium text-white bg-red-500 hover:bg-red-600"
            @click="signOut">
                Sign Out
            </button>
          </div>
        </dl>
      </div>
    </div>
    <div v-if="favoriteMovies.length > 0">
      <h3 class="text-md sm:text-xl mt-4 font-bold text-gray-800 dark:text-slate-100">
        Favorite Movies
      </h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4 mb-4">
        <div v-for="(movie, index) in favoriteMovies" :key="index">
          <FavoriteMovieCard :movie="movie" class="w-full" />
        </div>
      </div>
    </div>
    <div v-if="favoriteMovies.length < 1" class="mt-4 text-center flex flex-col justify-center bg-white border p-5 dark:bg-slate-800 dark:border-slate-700 rounded-lg">
      <div class="image-section flex flex-row justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 animate-pulse stroke-slate-600 dark:stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
      <h6 class="text-lg font-medium dark:text-slate-100">Empty Favorite Movies!</h6>
      <p class="text-gray-500 dark:text-slate-400">
        Browse through movies and add the movies you love to your favorites list.
      </p>
    </div>
  </div>
</template>

<script>
import FavoriteMovieCard from "~/components/FavoriteMovieCard.vue";
export default {
    name: "ProfilePage",
    components: { FavoriteMovieCard },
    layout: "mainLayout",
    middleware: "auth",
    data() {
        return {
            user: this.$auth.user,
            favoriteMovies: []
        };
    },
    computed: {
        registrationDate() {
            return this.$moment(this.user.createdAt).format("LL");
        }
    },
    async created() {
        await this.getMovies();
    },
    methods: {
        async getMovies() {
            await this.$axios.get("user/movies/favorites")
                .then((result) => {
                this.favoriteMovies = result.data.data;
            }).catch((err) => {
                console.log(err.response);
            });
        },
        async deleteFavoriteMovie(movieId) {
            await this.$axios.delete(`user/movies/favorites/${movieId}`)
                .then((result) => {
                this.favoriteMovies = this.favoriteMovies.filter(movie => movie.id !== movieId);
            }).catch((err) => {
                console.log(err.response);
            });
        },
        async signOut() {
        await this.$auth.logout("local");
        window.location.reload()
      }
    }
}
</script>
