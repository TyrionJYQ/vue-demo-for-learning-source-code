<template>
  <div>
    <Foo/>
    <button @click="getBar">查看bar组件</button>
    <button>查看fooBar组件</button>
    <Bar v-if="showBar"/>
  </div>
</template>

<script>
 import Vue from 'vue'
 
import Foo from './Foo.vue'

  export default {
    data() {
      return {
         showBar: false
      }
     
    },
    components: {
      // Foo,
      Foo: function(resolve) {
        require(['./Foo.vue'],resolve)
      }
    },
    methods:{
      getBar() {
        this.$options.components.Bar =  function(resolve) {
        require(['./Bar.vue'], resolve)
      }
        this.showBar = true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>