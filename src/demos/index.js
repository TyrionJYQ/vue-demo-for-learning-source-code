
import Vue from 'vue'

// vue非compile版本未定义template，没有el
new Vue({   
 template:document.querySelector('#app'),
 data() {
   return {
     msg: 'hello'
   }
 }
}).$mount('#app')
