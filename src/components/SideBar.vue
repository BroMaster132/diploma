<template>
    <Button v-if="!user" class='sign_in'  label='Sign in' @click="googleRegister()"/>
    <div class="userCard" visible=visible  v-else>
        <Button icon="pi pi-fw pi-user" class="p-button-rounded p-button-outlined" @click="visible =!visible">
            <template #icon>
                <i class="pi pi-fw pi-user"></i>
            </template>
        </Button>
        <Sidebar v-model:visible="visible" position="right">
            <div class="account">
                <img :src="user.photoURL" alt="User" class="p-d-inline-block" style="width: 40px; height: 40px; border-radius: 50%;"/>
                <br><br>
                <span class="p-d-inline-block">{{ user.displayName }}</span>
            </div>
            <div class="account-content">
                <MovieAdd v-if="user.status == 'admin'" />
                <br>
                <Button label="Favourites" />
                <br>
                <br>
                <Button label="Sign Out" class="sign_out"  @click="googleLogout" />
            </div>
        </Sidebar>
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import MovieAdd from '../components/MovieAdd.vue';
import Sidebar from 'primevue/sidebar';
import { useRoute} from 'vue-router'
import { ref } from 'vue';
import { useUser } from '@/composables/useUser';

const { user, googleLogout, googleRegister } = useUser()


const visible = ref(false)



</script>

<style scoped>
.account-content {
    position: relative;
    top: 40px;
    padding: 20px;
    text-align: center;
    border: saddlebrown solid;
}

.sign_in{
    position: relative;
    right: 20px;
    bottom: 100px;
}

.account  {
    text-align: center;

}



.p-d-inline-block {
    margin-top: 30px;
    scale: 2.2;
    font-size: 20pt;
}


</style>