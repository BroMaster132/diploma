<script setup lang="ts">
import Button from 'primevue/button'
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { useRoute} from 'vue-router'
import { useUser } from '@/composables/useUser'
import Sidebar from 'primevue/sidebar';
const route = useRoute()

const { user, googleRegister, googleLogout } = useUser()
const visible = ref(false)

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-pencil',
        route: '/cards'
    },
    {
        label: 'Table',
        icon: 'pi pi-fw pi-file',
        route: '/table'
    },
    {
        label: 'Cards',
        icon: 'pi pi-fw pi-pencil',
        route: '/cards'
    },
]);



</script>

<template>
    <Menubar class="navBar"  :model="items">
        <template #start>

        </template>
        
        <template #item="{ label, item, props, root, hasSubmenu }">
            <div class="middle">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
                </a>
            </div>
        </template>
        <template #end>
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
                        <br>
                        <span class="p-d-inline-block">{{ user.displayName }}</span>
                    </div>
                    <div>
                        <Button label="Sign Out" class="sign_out"  @click="googleLogout">

                        </Button>
                    </div>


                </Sidebar>
            </div>
        </template>
    </Menubar>
</template>

<style scoped>



.sign_in{
    margin-right: 20px;
}

.userCard {
    position: absolute;
    right: 20px;
    top: 10px;
}

.navBar {
    background-color: transparent;
    border: none;
    z-index: 1;
}

:deep(.p-menubar-start) {
    width: 300px;
}

.account {
    text-align: center;
    scale: 1.5;
}

.account img {
    margin-top: 30px;
    scale: 1.2;


}
</style>