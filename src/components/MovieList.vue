<template>
    <div class="row-movies">
        <section  v-for="movie in contentList" :key="movie">
            <MovieCard :movie="movie" />  
        </section>
    </div>
</template>




<script setup lang="ts">
import MovieCard from './MovieCard.vue';

import { useContent } from '@/composables/useContent';

const {getAllMovies , contentList, content} = useContent()
getAllMovies()
console.log(contentList);



</script>


<style scoped>
.row-movies {
    display: flex;
    flex-direction: row;
    
}
</style>s