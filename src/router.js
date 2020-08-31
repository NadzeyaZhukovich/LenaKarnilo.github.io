import Vue from "vue";
import Router from "vue-router";
import About from "./views /About";
import Work from "./views /Work";

Vue.use(Router)

const router = new Router( {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'About',
            component: About,
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },

    ]
})

export default router