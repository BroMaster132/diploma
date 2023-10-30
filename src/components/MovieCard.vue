<template>
    <Card>
        <template #content>
            <img :src=props.movie.image>
            <div style="padding-left: 30px;">
                
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Card from 'primevue/card';
import { useContent } from '@/composables/useContent';
const {getAllMovies,} = useContent()

onMounted(async () =>{
  await getAllMovies()
})



import {  defineProps } from 'vue';

const props = defineProps ({
    movie: {
        type: Object,
        required: true,
    }
})

console.log(props);




</script>

<style scoped>
.p-card {
    width: 500px;
    height: 300px;
    background: none ;
}
.p-card img {
    position: absolute;
    width: 500px;
    height: 300px;
    
    z-index: 0;
}
.p-card p {
    position: relative;
    z-index: 1;
}
</style>