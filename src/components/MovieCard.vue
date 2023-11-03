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
            <Dialog v-model:visible="visible" :draggable="false" modal :header=movie.name :style="{ width: '140rem' , height: '60rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <div class="modal-content">
                    <div class="left-side">
                        <img :src=movie.image :width=400>
                        <br>
                        <span style="font-size: 35pt;">{{movie.description}}</span>
                        <br>
                        <br>
                        <br>
                        <Button label="Watch movie" @click="movieVisibility=!movieVisibility" />
                        <Dialog :style="{ width: '180rem' , height: '100rem' }"  class="movie" :draggable="false"  v-model:visible="movieVisibility" modal> 
                            <iframe  class="fullscreen" :src=movie.url width="1280" height="720"  frameborder="0" fullscreen allowfullscreen />
                            <Button class="unstyled-button" icon="pi pi-times" @click="movieVisibility=!movieVisibility" />
                        </Dialog>
                        <!-- <Button  icon="pi pi-bookmark" />
                        <Button icon="pi pi-bookmark-fill" />
                        <Button label="Delete movie" @click="deleteMovie(movie.id)"/> -->
                    </div>
                    <div class="right-side">
                        <iframe width="1280" height="720" :src="movie.trailer"  frameborder="0" fullscreen allowfullscreen />
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
import { useUser } from '@/composables/useUser';


const {getAllMovies, deleteMovie} = useContent()

const {user, getAllUsers} = useUser()

onMounted(async () => {
    await getAllMovies()
    await getAllUsers()
})

const visible = ref(false);

const movieVisibility = ref(false)


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
    height: 844px;
}


.left-side {

    width: 40%;
}
.right-side {
    position: absolute;
    right: 25px;
    top: 100px;
}

.left-side img {
    border-radius: 20px;
}

:deep(.p-dialog) {
    background-color: black;
}

.fullscreen {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}



.unstyled-button {
    position: relative;
    right: 0;

}


</style>