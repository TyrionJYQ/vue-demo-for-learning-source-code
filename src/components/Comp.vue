<template>
    <div>
       <SubComp/>
    </div>
</template>

<script >
import CompA from '@components/CompA.vue'
import CompB from '@components/CompB.vue'
import SubComp from '@components/SubComp.vue'
export default {
    name: 'comp',
    components: {
        SubComp
    }
   
}
</script>