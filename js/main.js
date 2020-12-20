(function() {
    const router = new VueRouter({
        routes: [
            {path: '/', component: Vue.component('home-page')},
            {path: '/page1', component: Vue.component('page-1')},
            {path: '/page2', component: Vue.component('page-2')},
            {path: '/page3', component: Vue.component('page-3')},
            {path: '/page4', component: Vue.component('page-4')},
            {path: '/form', component: Vue.component('form-page')},
            {path: '/ad', component: Vue.component('ad-page')},
        ]
    });
    new Vue({
        router,
        el: '#app',
        render: h => h(Vue.component('app'))
    });
})()
