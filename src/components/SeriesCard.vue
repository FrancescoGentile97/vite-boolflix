<template>
       <div class="card mb-3">
            <img v-if="serie.poster_path == null" src="../assets/photoplaceholder.png" class="card-img">
            <img v-else :src="store.img.link + store.img.size + serie.poster_path"  class="card-img">
            <div class="card-img p-3 overflow-auto">
                <h2>Title:{{ serie.name }}</h2>
                <p>Language:{{ serie.original_language }}</p>
                <p>Rating:{{ serie.vote_average }}</p>
               <span  v-for="(star, i) in this.stars">
                 <font-awesome-icon v-if="star <= serie.vote_average / 2" icon="fa-solid fa-star" />
                 <font-awesome-icon v-else icon="fa-regular fa-star" />
               </span>
            </div>
        </div>
</template>

<script>
import { store } from "../store";
export default {
    // qui va inserita la props
    props: {
        serie: {
            type: Object,
        },
    },
    data() {
        return {
            store,
            stars:[1,2,3,4,5],
        }
       
    },
}

</script>

<style>

img {
   
    height: 250px;
}
.card {
    width: 250px !important;
    height: 500px;
}

</style>