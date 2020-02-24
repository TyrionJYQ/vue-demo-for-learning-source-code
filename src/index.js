import Vue from 'vue'
// import Hello from './components/hello.vue'
// import App from '@components/App.vue'
// import SubComp from '@components/SubComp.vue'
// import { createElement } from './utils/utils'
import AppForMergeOptionsTest from '@components/AppForMergeOptionsTest.vue'


// createElement('div')

/*********************************************for source code analysis 05 start**********************************************************************/

// new Vue({
//     render(h) {
//         return h('h1', { class: 'p' }, [this.msg, h('span', [h('a', 'game'), h('a', 'over')])])
//     },
//     data() {
//         return {
//             msg: 'hello'
//         }
//     }
// }).$mount('#app')

/*********************************************for source code analysis 05 end**********************************************************************/


/*********************************************for source code analysis 06 start**********************************************************************/
// new Vue({
//     el: '#app',
//    data() {
//        return {
//         foo: 'foo',
//         bar: 'bar',
//         other: 'other'
//        }
//    }
// })

/*********************************************for source code analysis 06 end**********************************************************************/


// new Vue({
//     el: '#app',
//     render(h){
//         return h(SubComp)
//     }
// })
Vue.mixin({
    created() {
        console.log('parent created')
    }
}).mixin({
    testMixIn: 'testMixin'
})

new Vue({
    el: '#app',
    render(h) {
        return h(AppForMergeOptionsTest)
    }
})