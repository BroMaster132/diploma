<template>
    <img src="../layout/enot.jpeg" class="background">

    <Menubar class="navBar"  :model="items">
        
        <template #start>

            <div class="menu">
                <div class="hidden-top">
                    <h1><i class="pi pi-align-justify" /> FreeSearch</h1>
                </div>
                <div class="hidden">
                    <span>Main</span>
                    <span>Online-cinema</span>
                    <span>Movies</span>
                    <span>Serials</span>
                    <span>Tickets to the movie</span>
                    <span>Media</span>
                </div>
            </div>
        </template>
        
        <template #item="{ label, item, props, root, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom class="orange">
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
        </template>
        <template #end>
            <SideBar />
        </template>
    </Menubar>
    <div class="content-in-nav ">
        <div>
            <span style="font-size: 20pt;">Lorem, ipsum dolor.</span>
            <span style="font-size: 30pt;">Movies and serials will be always free for a watch</span><br>
            <div class="temporary">
                <h2>Free all time</h2>
                <br>
                <ProgressBar :value="100">Always Free</ProgressBar>
                <br>
                <span class="opacity-text">Will never be payment</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { useRoute} from 'vue-router'
import { useUser } from '@/composables/useUser'
import SideBar from '../SideBar.vue';
import ProgressBar from 'primevue/progressbar';

const { user, googleRegister, googleLogout } = useUser()

const route = useRoute()




const items = ref([
    {
        label: 'Main',
        route: '/'
    },
    {
        label: 'Shop',
        route: '/shop'
    },
    {
        label: 'Mine',
        route: '/mine'
    },
    {
        label: 'Channels',
        route: '/channels'
    },

]);
const routes = ref([
    {
        label: 'FreeSearch',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Main',
                route: '/',
            },
            {
                label: 'Online-cinema',
                route: '/online-cinema'
            },
            {
                label: 'Movies',
                route: '/movies'
            },
            {
                label: 'Serials',
                route: '/serials'
            },
            {
                label: 'Tickets to the movie',
                route: '/tickets-to-the-movie'
            },
            {
                label: 'Media',
                route: '/media'
            },
        ]
    }

]);

</script>


<style scoped>

.temporary {
    margin-top: 80px;
    text-align: start;
}

.opacity-text {
    text-align: center;
    opacity: 0.6;
}

.trial {
    margin: auto !important;
}
.trial Button {
    width: 280px;
    height: 60px;
    background: linear-gradient(90deg, rgba(0,81,121,1) 24%, rgba(9,84,121,1) 47%, rgba(86,95,198,1) 65%);
    color: aliceblue;
}

.background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../layout/enot.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    top: 0px;
    z-index: 0;
    filter: brightness(0.4);
}

:deep(.pi-align-justify){
    font-size: 20pt;
}


.userCard {
    position: absolute;
    right: 20px;
    top: 10px;
    scale: 1.3;
}

.navBar {
    background-color: transparent;
    border: none;
    height: 300px;
}
.menu{
    position: relative;
    z-index: 1;
    left: 300px;
    width: 300px;
    height: 1220px;

}

.hidden {
    display: none;
    flex-direction: column;
    position: relative;
    padding: 20px;
    border-radius: 0 0 20px 20px ;
    background-color: rgb(22, 20, 20);
}

.p-menubar {
    align-items: normal;
}

:deep(.p-panelmenu-header-action) {
    background: transparent ;
    border: none;
}



:deep(.p-menubar-root-list) {
    margin-left: 30%;
    scale: 1.7;
    position: relative;
    bottom: 100px;
}
:deep(.p-menuitem-content)  :hover{
    border-bottom: solid 2px rgb(61, 61, 197);
}

:deep(.p-menuitem-content) a :hover{
    border-bottom: none;
}





.content-in-nav {
    left: 30%;
    position: relative;
    z-index: 1;
    top: -100px;
    width: 900px;
    text-align: center;
    scale: 1.2;
}

.content-in-nav div {
    display: flex;
    flex-direction: column;
}


</style>



        

