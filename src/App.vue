<script>
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";
import { store, fetchMovies, fetchSeries } from "./store";


export default {
  components: {Main,Header},
    
    data(){
      return {
        store,
      }
    },
    methods: {
      onSearch(){
        fetchMovies();
        fetchSeries();
      }
  },
}
</script>

<template>
  <!-- "searchAction passato tramite emit dal componente Header" -->
  <Header @searchAction="onSearch"></Header>
 <Main></Main>
</template>

<style lang="scss">

</style>
