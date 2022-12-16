
<template>
    <!-- <div v-for="(movie,i) in store.movies"> -->
        <div class="card mb-3">
            <img v-if="film.poster_path == null" src="../assets/photoplaceholder.png" class="card-img">
            <img v-else :src="store.img.link + store.img.size + film.poster_path"  class="card-img">
            <div class="card-img p-3 overflow-auto">
                <h3>Title:{{ film.title }}</h3>
                <p>Language:{{ film.original_language }}</p>
                <p>Status:{{ film.status }}</p>
                <p>Rating:{{ film.vote_average }}</p>
                <span  v-for="(star, i) in this.stars">
                  <font-awesome-icon v-if="star <= film.vote_average / 2" icon="fa-solid fa-star" />
                  <font-awesome-icon v-else icon="fa-regular fa-star" />
               </span>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import { store } from "../store";
export default {
    // qui va inserita la props
    props: {
        film: {
            type: Object,
        },
    },
    data() {
        return {
            store,
            stars:[1,2,3,4,5]
        }
    },
}
</script>

<style>
img {
    width: 200px;
    height: 250px;
}
.card {
    height: 500px;
}

</style>
