<template>
    <div id="app">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</template>



<script>
export default {
    name: 'hello',
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
            foo: 'foo',
            bar: 'bar',
            other: 'other'
        }
    },
   
}

</script>