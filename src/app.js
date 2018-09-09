import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Home from './pages/Home.vue';
import Overview from './pages/Overview.vue';
import Achievements from './pages/Achievements.vue';
import Objectives from './pages/Objectives.vue';
import Feedback from './pages/Feedback.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/overview', component: Overview },
    { path: '/achievements', component: Achievements },
    { path: '/objectives', component: Objectives },
    { path: '/feedback', component: Feedback }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});