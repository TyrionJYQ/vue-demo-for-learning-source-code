<template>
    <div>
        {{msg}}
    </div>
</template>




<script>

export default {
    name:"AppForMergeOptionsTest",
    created() {
        console.log('child created')
    },
    mounted() {
        console.log('child mounted')
    },
    data() {
        return {
            msg: 'hello world'
        }
    }
  
}
</script>
