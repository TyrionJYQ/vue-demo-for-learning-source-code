<template>
    <div>
       <ca/>
       <cb/>
    </div>
</template>

<script >
import CompA from '@components/CompA.vue'
import CompB from '@components/CompB.vue'
export default {
    name: 'comp',
    components: {
        ca:CompA,
        cb:CompB
    }
   
}
</script>