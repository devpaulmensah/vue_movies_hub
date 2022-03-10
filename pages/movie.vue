<template>
  <div>
    <div v-if="!loading">
      <PageMovieBanner :movie="movie" />

      <!-- Tabs section -->
      <div class="px-4 lg:px-0 pt-4 sm:pt-0">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select id="tabs" v-model="activeTab" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option value="about">About</option>
            <option value="credits">Credits</option>
            <option value="reviews">Reviews</option>
            <option value="images">Images</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
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

              <button
                type="button"
                :class="{
                  'border-indigo-500 text-indigo-600': activeTab === 'images',
                  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 ': activeTab !== 'images'
                }"
                class=" group inline-flex items-center py-4 px-1 border-b-2 font-medium text-base" aria-current="page"
                @click="setActiveTab('images')">
                <!-- Heroicon name: solid/credit-card -->
                <svg
                  :class="{
                    'text-indigo-500': activeTab === 'images',
                    'text-gray-400 group-hover:text-gray-500': activeTab !== 'images'
                  }"
                  class="-ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                </svg>
                <span>Images</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      <!-- Content section -->
      <div class="tabs-section px-4 lg:px-0 pt-4">
        <div v-if="activeTab === 'about' ">About</div>
        <div v-if="activeTab === 'credits' ">Credits</div>
        <div v-if="activeTab === 'reviews' ">Reviews</div>
        <div v-if="activeTab === 'images' ">Images</div>
      </div>

      <!-- Similar views section -->
      <div id="similarMovies">
        <div class="pt-8 pb-4 lg:pb-12 px-4 lg:px-0">
          <h3 class="text-md sm:text-xl font-bold text-gray-800">
            Others Watched These Movies Too
          </h3>
          <div id="scrollSection" class="snap-x flex scroll-smooth overflow-auto scroll-section mt-4">
            <div v-for="(similarMovie, index) in movie.similarMovies" :key="index" class="snap-center">
              <HorizontalMovieCard :movie="similarMovie" class="w-80 sm:w-96 mr-4"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import PageMovieBanner from "~/components/PageMovieBanner.vue";
export default {
    name: "MoviePage",
    components: { PageMovieBanner },
    layout: "mainLayout",
    data() {
        return {
            movie: {
                details: null,
                images: [],
                reviews: [],
                similarMovies: [],
                videos: [],
                credits: []
            },
            pageTitle: "VueMovieHub",
            activeTab: "about",
            loading: false
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
          const movieId = this.$route.query.id;

          if (movieId === undefined) {
              this.$router.push({ path: "/" });
          }

          const [movieDetails, movieImages, movieReviews, similarMovies, movieVideos, movieCredits] = await Promise.all([
              this.$axios.get(`${this.$config.moviesBaseUrl}/movie/${movieId}?api_key=${this.$config.apiKey}`),
              this.$axios.get(`${this.$config.moviesBaseUrl}/movie/${movieId}/images?api_key=${this.$config.apiKey}`),
              this.$axios.get(`${this.$config.moviesBaseUrl}/movie/${movieId}/reviews?api_key=${this.$config.apiKey}`),
              this.$axios.get(`${this.$config.moviesBaseUrl}/movie/${movieId}/similar?api_key=${this.$config.apiKey}`),
              this.$axios.get(`${this.$config.moviesBaseUrl}/movie/${movieId}/videos?api_key=${this.$config.apiKey}`),
              this.$axios.get(`${this.$config.moviesBaseUrl}/movie/${movieId}/credits?api_key=${this.$config.apiKey}`)
          ]);

          this.pageTitle = movieDetails.data.title;

          this.movie = {
              details: movieDetails.data,
              images: movieImages.data,
              reviews: movieReviews.data,
              similarMovies: _.shuffle(similarMovies.data.results.filter(m => m.id !== movieId).splice(0, 8)),
              videos: movieVideos.data,
              credits: movieCredits.data
          };
          this.loading = false;
      },
      setActiveTab (tab) {
        this.activeTab = tab;
      }
    }
}
</script>
