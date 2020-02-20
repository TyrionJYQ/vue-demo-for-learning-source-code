import Vue from 'vue'
import Hello from './components/hello.vue'
import {createElement} from './utils/utils'


createElement('div')

// new Vue({
//     el: '#app',
//    render: h => h(Hello)
// })
// .$mount('#app')

new Vue({
    el: '#app',
    tempalate: '#root'
})