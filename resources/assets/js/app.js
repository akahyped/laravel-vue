require('./bootstrap');


Vue.component('task', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});
