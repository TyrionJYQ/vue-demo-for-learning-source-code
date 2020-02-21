import Vue from 'vue'
import Hello from './components/hello.vue'
import App from '@components/App.vue'
import { createElement } from './utils/utils'


createElement('div')

/*********************************************for source code analysis 05 start**********************************************************************/

// new Vue({
//     render(h) {
//         return h('h1', { class: 'p' }, [this.msg, h('span', [h('a', 'baidu'), h('a', 'gg')])])
//     },
//     data() {
//         return {
//             msg: 'hello'
//         }
//     }
// }).$mount('#app')

/*********************************************for source code analysis 05 end**********************************************************************/


/*********************************************for source code analysis 06 start**********************************************************************/
new Vue({
    el: '#app',
    render(h) {
        return h(App)
    }
})

/*********************************************for source code analysis 06 end**********************************************************************/