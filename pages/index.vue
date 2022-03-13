<template>
  <div>
    <HomeBanner/>
    <TopRatedMovies/>
    <PopularMovies/>
    <Upcoming/>
  </div>
</template>

<script>
import HomeBanner from "~/components/HomeBanner.vue";
import PopularMovies from "~/components/PopularMovies.vue";
import Upcoming from "~/components/Upcoming.vue";
import TopRatedMovies from "~/components/TopRatedMovies.vue";


export default {
    name: "IndexPage",
    components: { HomeBanner, PopularMovies, Upcoming, TopRatedMovies },
    layout: "mainLayout"
}
</script>
