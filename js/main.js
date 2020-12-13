(function() {
    const router = new VueRouter({
        routes: [
            {path: '/', component: {template: '<div class="container"><h1>welcome!</h1></div>'}}
        ]
    });
    new Vue({
        router,
        el: '#app',
        render: h => h(Vue.component('app'))
    });
})()
