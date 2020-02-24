<template>
    <div ref="app">
        <button v-on:click="clear">销毁定时器</button>
        <span>{{count}}</span>
        <button @click="addCount">+</button>
    </div>
</template>

<script>
export default {
    name: 'lifecycle',
    data() {
        return {
            count: 1
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created',this.count)
        this.timer = setInterval(() => console.log(this.count), 1000)
    },
   
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted',this.$refs.app)
    },
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    destroyed() {
        console.log('destroyed')
         if(this.timer) {
                clearTimeout(this.timer)
            }
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    methods: {
        clear: function() {
           this.$destroy()
        },
        addCount() {
            this.count++
        }
        
    }


}
</script>