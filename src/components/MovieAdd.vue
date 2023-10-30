<template>
    <div class="card flex justify-content-center">
        <Button label="Add movie" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Adding movie to database" :style="{ width: '35rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="movie-add-content">
                <InputText type="text" placeholder="Name" v-model="newMovie.name" />
                <br>
                <InputText type="text" placeholder="Url-Youtube" v-model="newMovie.url" />
                <br>
                <div class="custom-button">
                    <FileUpload mode="basic" name="demo[]" url="./useAuto.js" accept="image/*" chooseLabel="Upload image" :maxFileSize="1000000" @input="onUpload($event)" />
                </div>
            </div>
            <template #footer>
                <Button label="Close"  @click="visible = !visible" autofocus />
                <Button label="Create" @click="addMovie" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import FileUpload from 'primevue/fileupload';
import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { ref } from "vue";
import { useContent} from '@/composables/useContent'

const { newMovie, uploadImage, createMovie } = useContent()

async function onUpload(e : any) {
  const image = e.target.files[0]
  await uploadImage(image)
}

async function addMovie() {
    createMovie()
    visible.value = !visible.value
}

const visible = ref(false);
</script>

<style scoped>
.movie-add-content {
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>