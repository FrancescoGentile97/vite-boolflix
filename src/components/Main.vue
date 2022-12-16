<template>
<Suspense>
<template #default>
    <div class="container">
        <!-- <h2 v-if="container.display">Films:</h2> -->
        <h2>Films:</h2>
        <div class="row">
            <div v-for="(films, i) in store.movies" :key="i + films.id" class="col d-flex flex-column">
                <CardFilm :film="films"></CardFilm>
            </div>
        </div>
        <h2 class="mt-2">SerieTv:</h2>
        <div class="row">
            <div v-for="(series, i) in store.tvSeries" :key="i + series.id" class="col d-flex flex-column">
                <SeriesCard :serie="series"></SeriesCard>
            </div>
        </div>
    </div>    
</template>
<template #fallback>
    Loading...
</template>
</Suspense>
</template>



<script>
    import { store } from "../store";
    import  CardFilm  from "./CardFilm.vue";
    import  SeriesCard  from "./SeriesCard.vue";
    export default {
        components:{ CardFilm, SeriesCard},
        data() {
            return {
                store,
            };
        },
    }
</script>

<style>

</style>