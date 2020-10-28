<template>
  <div>
    ---------mixins-----------
    <v-mixin />
    <br><br>
    ---------slot-----------
    <v-slot />
    <br><br>
    ---------compositionApi-----------
    <v-compositionapi />
    <br><br>
    ---------Multiple root elements--------
    <v-multipleRootElements />
    <br><br>
    ---------Suspense-------- 
    <br><br>
    <v-suspense />
    <br><br>
    ---------Multiple v-models--------
    <v-models />
    <br><br>
    ---------Reactivity--------
    <v-reactivity />
    <br><br>
    ---------Watch--------
    <v-watch />
    <br><br>
    ---------provide&inject--------
    <v-provide />
    <button @click="themeColor='blue'">蓝色</button>
    <button @click="themeColor='orange'">橘黄色</button>
    <br><br>
    ---------template refs--------
    <v-templaterefs />
    <br><br>
    ---------transition--------
    <v-transition />
    <br><br>
    ---------computed--------
    <v-computed />
    <br><br>
  </div>
</template>
<script>
import { provide, ref } from 'vue'
import mixin from './components/mixins.vue'
import slot from './components/useSlot.vue'
import compositionApi from './components/useCompositionApi.vue'
import multipleRootElements from './components/multiple_root_elements.vue'
import Suspense from './components/suspense.vue'
import VModels from './components/multiple_v-models.vue'
import Reactivity from './components/reactivity.vue'
import Watch from './components/watch.vue'
import Provide from './components/provide_inject.vue'
import templateRefs from './components/templateRefs.vue'
import transition from './components/transiton.vue'
import computed from './components/comuted.vue'
export default {
  components: {
    'v-mixin': mixin,
    'v-slot': slot,
    'v-compositionapi': compositionApi,
    'v-multipleRootElements': multipleRootElements,
    'v-suspense': Suspense,
    'v-models': VModels,
    'v-reactivity': Reactivity,
    'v-watch': Watch,
    'v-provide': Provide,
    'v-templaterefs': templateRefs,
    'v-transition': transition,
    'v-computed': computed,
  },
  setup () {
    // 通过 provide 函数向子级组件共享数据（不限层级）
    // provide('要共享的数据名称', 被共享的数据)

    // 共享普通数据
    provide('color', 'red')

    // 共享 ref 响应式数据
    const themeColor = ref('red')
    provide('color', themeColor)

    return {
      themeColor
    }
  }
}
</script>
<style>
  
</style>
