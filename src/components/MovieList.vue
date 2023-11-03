<template>
    <h1>All movies we have yet</h1>
    <br><br>
    <div class="flex">
        <section  v-for="movie in movieList" :key="movie">
            <MovieCard class="card-style" :movie="movie"  />  

        </section>
    </div>
</template>




<script setup lang="ts">
import MovieCard from './MovieCard.vue';
import { onMounted } from 'vue';
import { useContent } from '@/composables/useContent';
import { useRouter } from 'vue-router';
import { useUser } from '@/composables/useUser';

const {getAllMovies , movieList, movie} = useContent()
const { userToObject, addFavourite } = useUser()
const router = useRouter()
onMounted(async () =>{
    await getAllMovies()
})

console.log(userToObject);






</script>


<style scoped>
h1 {
    text-align: center;
}
.flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
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




</style>s