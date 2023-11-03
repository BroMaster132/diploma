<template>
    <div  v-if="skeleton">
        <Skeleton />
    </div>
    <div v-else>
        <div>
            <Card unstyled class="card" @click="visible=!visible" >
                <template #content>
                    <img :src=props.movie.image>
                </template>
            </Card>
            <Dialog v-model:visible="visible" :draggable="false" modal :header=movie.name :style="{ width: '140rem' , height: '100rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <div class="modal-content">
                    <div class="left-side">
                        <img :src=movie.image :width=400>
                        <br>
                        <span>{{movie.description}}</span>
                        <Button label="Watch movie" />
                    </div>
                    <div class="right-side">
                        <iframe width="1280" height="720" :src="movie.url" title="movie.name" frameborder="0" allowfullscreen />
                    </div>
                </div>
            </Dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted , ref} from 'vue';
import Skeleton from 'primevue/skeleton';
import Card from 'primevue/card';
import { useContent } from '@/composables/useContent';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const visible = ref(false);
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

.modal-content {
    height: 1052px;
    border: saddlebrown solid;

}

.modal-content iframe {

}

</style>