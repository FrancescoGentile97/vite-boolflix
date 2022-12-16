import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    searchForm: "",
    movies: [],
    tvSeries: [],
    img: {
        link: "https://image.tmdb.org/t/p/",
        size: "w300",
    }
})

export function fetchMovies() {
    // axios.get("https://api.themoviedb.org/3/search/movie", {
       axios.get("https://api.themoviedb.org/3/search/movie", {
        //    axios.get ("https://api.themoviedb.org/3/movie/550?api_key=acdfc55edcf45dcd502eba745d98fe71", {
        params: {
            api_key: "acdfc55edcf45dcd502eba745d98fe71",
            query: store.searchForm,
        }
    })
        .then((resp) => {
            console.log(resp);
            store.movies = resp.data.results;
            // store.movies.forEach(movie => {
            //     if (movie.poster_path != null) {
            //         movie.poster_path = "https://image.tmdb.org/t/p/w500" + movie.poster_path
            //     } else {
            //         // movie.poster_path = "place holder da scaricare"
            //     }
               
                
            // });
        })
}

    export function fetchSeries(){
        axios.get("https://api.themoviedb.org/3/search/tv", {
            params: {
                api_key:"acdfc55edcf45dcd502eba745d98fe71",
                query: store.searchForm,
            }
    })
    .then ((resp) => {
        console.log(resp);
        store.tvSeries = resp.data.results;
    })
}