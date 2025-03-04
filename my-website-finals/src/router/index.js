import { createRouter, createWebHistory } from 'vue-router';
import Gallery from '../components/Gallery.vue';
import Guestbook from '../components/Guestbook.vue';
import Edu from '../components/Edu.vue';
import Interest from '../components/Interest.vue';
import Home from '../components/Home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/gallery', component: Gallery },
    { path: '/guestbook', component: Guestbook },
    { path: '/edu', component: Edu },
    { path: '/interest', component: Interest },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});