<template>
    <div>
        {{msg}}
    </div>
</template>



<script>
export default {
    props: {
        msg1() {
            return {
                type: String,
                default: '111'
            }
        }
    },
    data() {
        return {
            msg: 'hello'
        }
    },
   
}

</script>