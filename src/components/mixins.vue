<template>
    <div>
        <button @click="handleMixin">调用mixin方法</button>
    </div>
</template>

<script>
    import MixinItem from '../utils/mixin.vue'

    export default {
        name: 'mixin-comp',
        props: {},
        mixins: [MixinItem],
        components: {},
        data () {
            return {}
        },
        methods: {
            handleMixin () {
                console.log('mixin-data=========', this.mixinData)
                let mixfun = this.mixinFunction()
                console.log('mixin-fun====>>>', mixfun)
            },
        },
        mounted () {
        },
        computed: {}
    }
</script>

<style>
</style>
