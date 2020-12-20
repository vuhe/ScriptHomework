(function() {
    const router = new VueRouter({
        routes: [
            {path: '/', component: Vue.component('home-page')},
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
