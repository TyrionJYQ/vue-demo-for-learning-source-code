
import Vue from 'vue'
import App from './asyncCompDemos/App.vue'
// vue非compile版本未定义template，没有el
// new Vue({   
//  template:document.querySelector('#app'),
//  data() {
//    return {
//      _msg: 'hello'
//    }
//  },
//  methods: {
//    onChange(e) {
//      this.msg = e.target.value
//    }
//  }
// }).$mount('#app')

// 异步组件

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
