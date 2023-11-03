<template>
    <div  v-if="skeleton">
        <Skeleton />
    </div>
    <div v-else>
        <Card unstyled class="card" >
            <template #content>
                <img :src=props.movie.image>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { onMounted , ref} from 'vue';
import Skeleton from 'primevue/skeleton';
import Card from 'primevue/card';
import { useContent } from '@/composables/useContent';

const {getAllMovies,} = useContent()

onMounted(async () =>{
  await getAllMovies()
})
let skeleton = ref(true)
setTimeout(() => {
    skeleton.value = false
}, 1000);



const props = defineProps ({
    movie: {
        type: Object,
        required: true,
    }
})

console.log(props);




</script>

<style scoped>
.card {
    width: 500px;
    height: 300px;
    background: none ;
}
.card img {
    position: absolute;
    width: 500px;
    height: 300px;
    
    z-index: 0;
}
.card p {
    position: relative;
    z-index: 1;
}


</style>