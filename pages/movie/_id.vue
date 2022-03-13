<template>
  <div>
    <div v-if="loading" class="loading-container text-center flex flex-col justify-center">
        <div class="image-section flex flex-row justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 animate-bounce stroke-slate-600 dark:stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        </div>
        <h6 class="text-lg font-medium dark:text-slate-100">Loading...</h6>
        <p class="text-gray-500 dark:text-slate-400">
          Hold on, we're loading your movie!
        </p>
    </div>
    <div v-else>
      <PageMovieBanner :movie="movie.movie" :videos="movie.videos.videos" />

      <!-- Tabs section -->
      <div class="px-4 lg:px-0 pt-4 sm:pt-0">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select id="tabs" v-model="activeTab" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100">
            <option value="about">About</option>
            <option value="credits">Credits</option>
            <option value="reviews">Reviews</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <div class="border-b border-gray-200 dark:border-slate-800">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <!-- About tab activator -->
              <button
                type="button"
                :class="{
                  'border-indigo-500 text-indigo-600': activeTab === 'about',
                  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 ': activeTab !== 'about'
                }"
                class=" group inline-flex items-center py-4 px-1 border-b-2 font-medium text-base" aria-current="page" @click="setActiveTab('about')">
                <svg
                  :class="{
                    'text-indigo-500': activeTab === 'about',
                    'text-gray-400 group-hover:text-gray-500': activeTab !== 'about'
                  }"
                  class="-ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
                <span>About</span>
              </button>
              <!-- Credits tab activator -->
              <button
                type="button"
                :class="{
                  'border-indigo-500 text-indigo-600': activeTab === 'credits',
                  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 ': activeTab !== 'credits'
                }"
                class=" group inline-flex items-center py-4 px-1 border-b-2 font-medium text-base" aria-current="page" @click="setActiveTab('credits')">
                <!-- Heroicon name: solid/office-building -->
                <svg
                  :class="{
                    'text-indigo-500': activeTab === 'credits',
                    'text-gray-400 group-hover:text-gray-500': activeTab !== 'credits'
                  }"
                  class="-ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                </svg>
                <span>Credits</span>
              </button>
              <!-- Reviews tab activator -->
              <button
                type="button"
                :class="{
                  'border-indigo-500 text-indigo-600': activeTab === 'reviews',
                  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 ': activeTab !== 'reviews'
                }"
                class=" group inline-flex items-center py-4 px-1 border-b-2 font-medium text-base" aria-current="page" @click="setActiveTab('reviews')">
                <!-- Heroicon name: solid/users -->
                <svg
                  :class="{
                    'text-indigo-500': activeTab === 'reviews',
                    'text-gray-400 group-hover:text-gray-500': activeTab !== 'reviews'
                  }"
                  class="-ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Reviews</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      <!-- Content section -->
      <div class="tabs-section px-4 lg:px-0 pt-4">
        <!-- About section -->
        <div v-if="activeTab == 'about'">
          <AboutMovieCard :movie="movie.movie" />
        </div>

        <!-- Credits section -->
        <div v-if="activeTab == 'credits' ">
          <!-- Casts section -->
          <h6 class="text-md sm:text-xl font-bold text-gray-800 dark:text-slate-100">Casts</h6>
          <div class="border p-4 pt-2 bg-white mt-4 dark:bg-slate-800 dark:border-slate-700">
            <div class="cast-section">
              <ul role="list" class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <li
                  v-for="(cast) in movie.credits.cast"
                  :key="cast.id"
                  class="col-span-1 flex">
                  <MovieCast :name="cast.name" :character="'As: ' + cast.character" :profile-path="cast.profilePath" />
                </li>
              </ul>
            </div>
          </div>

          <!-- Crew Section -->
          <h6 class="text-md sm:text-xl font-bold text-gray-800 mt-8 dark:text-slate-100">Production Team</h6>
          <div class="border p-4 pt-2 bg-white mt-4 dark:bg-slate-800 dark:border-slate-700">
            <div class="cast-section">
              <ul role="list" class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <li
                  v-for="(crew, index) in movie.credits.crew"
                  :key="index"
                  class="col-span-1 flex">
                  <MovieCast :name="crew.name" :character="'Department: ' + crew.department" :profile-path="crew.profilePath" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Reviews Section -->
        <div v-if="activeTab == 'reviews' ">
          <h6 class="text-md sm:text-xl font-bold text-gray-800 dark:text-slate-100">Reviews</h6>
          <div v-if="movie.reviews.reviews.length > 0" class="flow-root border p-6 bg-white mt-4 dark:bg-slate-800 dark:border-slate-700 ">
            <ul id="reviews-list" role="list" class="-mb-8">
              <li v-for="(review, index) in movie.reviews.reviews" :key="index">
                <MovieReview :review="review"/>
              </li>
            </ul>
          </div>
          <div v-if="movie.reviews.reviews.length === 0" class="border p-6 bg-white mt-4 text-center dark:bg-slate-800 dark:border-slate-700">
            <div class="image-section flex flex-row justify-center">
              <img src="~/assets/img/empty-content.svg" class="h-36 w-36 mb-4" />
            </div>
            <h6 class="text-base font-medium dark:text-slate-200">No Reviews Yet!</h6>
            <p class="text-gray-500">
              This movie has not been reviewed by anyone.
            </p>
          </div>
        </div>
      </div>

      <!-- Recommended movies section -->
      <div v-if="movie.recommendedMovies.length > 0" id="recommendedMovies">
        <div class="pt-8 pb-4 px-4 lg:px-0">
          <h3 class="text-md sm:text-xl font-bold text-gray-800 dark:text-slate-100">
            We Recommend These Movies, Try Them
          </h3>
          <div id="recommendedScrollSection" class="snap-x flex scroll-smooth overflow-auto scroll-section mt-4">
            <div v-for="(recommendedMovie, index) in movie.recommendedMovies" :key="index" class="snap-center">
              <MovieCard :movie="recommendedMovie" class="w-80 sm:w-96 mr-4"/>
            </div>
          </div>
          <ViewMoreAndScroll class="hidden sm:block" scroll-id="recommendedScrollSection" url="#" />
        </div>
      </div>

      <!-- Similar movies section -->
      <div v-if="movie.similarMovies.length > 0" id="similarMovies">
        <div class="pt-8 pb-4 px-4 lg:px-0">
          <h3 class="text-md sm:text-xl font-bold text-gray-800 dark:text-slate-100">
            Others Watched These Movies Too
          </h3>
          <div id="similarScrollSection" class="snap-x flex scroll-smooth overflow-auto scroll-section mt-4">
            <div v-for="(similarMovie, index) in movie.similarMovies" :key="index" class="snap-center">
              <MovieCard :movie="similarMovie" class="w-80 sm:w-96 mr-4"/>
            </div>
          </div>
          <ViewMoreAndScroll class="hidden sm:block" scroll-id="similarScrollSection" url="#" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import PageMovieBanner from "~/components/PageMovieBanner.vue";
import MovieCast from "~/components/MovieCast.vue";
import AboutMovieCard from "~/components/AboutMovieCard.vue";
import MovieReview from "~/components/MovieReview.vue";
export default {
    name: "MoviePage",
    components: { PageMovieBanner, MovieCast, AboutMovieCard, MovieReview },
    layout: "mainLayout",
    data() {
      return {
        movie: {},
        pageTitle: "VueMovieHub",
        activeTab: "about",
        loading: false,
        movieId: this.$route.params.id
      };
    },
    head () {
      return {
        title: this.pageTitle
      }
    },
    async created() {
        await this.getMovieDetails();
    },
    methods: {
      async getMovieDetails() {
          this.loading = true;

          if (this.movieId === undefined) {
              this.$router.push({ path: "/" });
          }

          await this.$axios.get(`/movies/${this.movieId}`)
          .then(result => {
            this.movie = result.data.data;
            this.pageTitle = this.movie.movie.title;
          })

          this.loading = false;
      },

      setActiveTab (tab) {
        this.activeTab = tab;
      }
    }
}
</script>

<style scoped>
  .loading-container {
    min-height: calc(100vh - 190px);
  }
</style>
