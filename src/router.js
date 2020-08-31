import Vue from "vue";
import Router from "vue-router";
import About from "./views /About";
import Work from "./views /Work";
import {i18n} from "./main"

Vue.use(Router)

const router = new Router( {
    mode: 'history',
    routes: [
        {
            path: "/:locale",
            component: {
                render: h => h('router-view')
            },
            children: [
                {
                    path: '',
                    name: 'About',
                    component: About,
                },
                {
                    path: 'work',
                    name: 'Work',
                    component: Work
                },
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    const lang = to.params.locale;
    if (!['en','ru'].includes(lang) ) {
        return next('en');
    }
    if (i18n.locale !== lang ) {
        i18n.locale = lang;
    }
    return next();
});

export default router