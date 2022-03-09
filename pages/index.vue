<template>
  <div>
    <HomeBanner/>
    <RecommendedMovies/>
    <TopRatedMovies/>
    <PopularMovies/>
    <Upcoming/>
  </div>
</template>

<script>
import HomeBanner from "~/components/HomeBanner.vue";
import RecommendedMovies from "~/components/RecommendedMovies.vue";
import PopularMovies from "~/components/PopularMovies.vue";
import Upcoming from "~/components/Upcoming.vue";
import TopRatedMovies from "~/components/TopRatedMovies.vue";


export default {
    name: "IndexPage",
    components: { HomeBanner, RecommendedMovies, PopularMovies, Upcoming, TopRatedMovies },
    layout: "mainLayout"
}
</script>
