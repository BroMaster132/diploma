<template>
    <div class="row-movies">
        <section  v-for="movie in movieList" :key="movie">
            <MovieCard @click="watchMovie(movie.id)" :movie="movie" />  
        </section>
    </div>
</template>




<script setup lang="ts">
import MovieCard from './MovieCard.vue';
import { onMounted } from 'vue';
import { useContent } from '@/composables/useContent';
import { useRouter } from 'vue-router';
const {getAllMovies , movieList, movie} = useContent()

const router = useRouter()
onMounted(async () =>{
    await getAllMovies()
})

function watchMovie(id : any) {
    console.log(id);
    router.push({name: 'movie', params: {id}})
}

console.log(movie);


console.log(movieList);



</script>


<style scoped>
.row-movies {
    display: flex;
    flex-direction: row;
    
}
</style>s