<template>
    <Button label="Watch movie" @click="visible=!visible" />
    <Dialog v-model:visible="visible" modal> 
        <iframe :src=movie.url frameborder="0"></iframe>
    </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { useContent } from '@/composables/useContent';
import {ref } from 'vue'
import Button from 'primevue/button';



console.log(props.movie);
const visible = ref(false)
</script>

<style scoped>

</style>