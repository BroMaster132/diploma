<template>
  <div v-if="!movie">
    <Skeleton />
  </div>
  <div v-else class="movie-page">
    <iframe width="1280" height="720" :src="movie.url" title="movie.name" frameborder="0" allowfullscreen />
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
import { useContent } from '@/composables/useContent';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const {getMovieById, movie, setRating} = useContent()
const id = route.params.id
onMounted(async () =>{
    await getMovieById(id)

})


</script>



<style>

.content-in-nav {
  display: none;
}
</style>

<style scoped>
.movie-page { 
  position: relative;
  z-index: 1;
}
</style>