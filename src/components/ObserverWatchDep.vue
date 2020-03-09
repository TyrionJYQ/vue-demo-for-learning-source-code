<template>
    <div id="app">
        姓名:{{msg}},
        年龄:{{year}}
        <span @click="changeOld">修改年龄</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Tom',
            year: '12'
        }
    },
    methods: {
        changeOld() {
            return (this.year = Math.floor(Math.random() * 100))
        }
    }

}
</script>