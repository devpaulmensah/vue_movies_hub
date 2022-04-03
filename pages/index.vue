<template>
  <div>
    <HomeBanner/>
    <TopRatedMovies class="content-section"/>
    <PopularMovies class="content-section"/>
    <Upcoming class="content-section"/>
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
