<template>
    <div>
      <subComp/>
    </div>
</template>

<script >
import CompA from '@components/CompA.vue'
import CompB from '@components/CompB.vue'
import SubComp from '@components/SubComp.vue'
export default {
    name: 'async-comp',
    components: {
        subComp: () => import('@components/SubComp.vue')
    },
    data() {
        return {
            msg: 'hello world'
        }
    }
   
}
</script>