import NavBar from './components/NavBar.vue'
import NewUser from './components/NewUser.vue'
import CurrentUser from './components/CurrentUser.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'NavBar',
        component: NavBar,
        path: '/'
    },
    {
        name: 'NewUser',
        component: NewUser,
        path: '/newusers'
    },
    {
        name: 'CurrentUser',
        component: CurrentUser,
        path: '/currentusers'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;