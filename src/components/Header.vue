<template>
    <div class="container">
        <h1 class="text-danger">BOOLFIX</h1>

    </div>
    <div class="row">
        <div class="col d-flex">
            <input type="text" class="form-control" v-model="searchForm">
            <!-- nel button mettere il @click  -->
            <button class="btn-primary" @click="onSearchAction">Search</button>
        </div>
    </div>
</template>

<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
            searchForm: "",
        }
    },
    // fare l'emit per passare la funzione all'app vue e richiamarla dal suo template con la "@"
    emits: ["searchAction"],
    methods: {
        onSearchAction() {
            this.store.searchForm = this.searchForm;
            this.$emit("searchAction")
        }
    }
}

</script>

<style>

</style>