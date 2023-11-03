<template>
    <h2>All movies we have yet</h2>
    <div class="flex">
        <section  v-for="movie in movieList" :key="movie">
            <MovieCard class="card-style" @click="watchMovie(movie.id)"  :movie="movie" />  

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





</script>


<style scoped>
.flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    border: saddlebrown solid;
    height: 1000px;
}

.card-style {
    margin-left: 40px;
    cursor: pointer;
    transition: 1s;
}

.card-style:hover {
    box-shadow: 0px 0px 10px 10px black;
    scale: 1.1;
}

.card-style:focus {
    scale: 1.1;
    display: none;
}


</style>s