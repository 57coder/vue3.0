<template>
  <div>
    <input type="text" v-model="state.count" />
    {{state.count}}
    <input type="text" v-model="inputRef" />
    {{inputRef}}

  <!-- 指定依赖源 -->
    <!-- state2.count: <input type="text" v-model="state2.count">
    {{state2.count}}<br/><br/>
    ref2: <input type="text" v-model="ref2">{{ref2}}<br/><br/> -->
  </div>
</template>
<script>
import { watch, reactive, ref } from "vue";

export default {
  setup() {
    const state = reactive({ count: 0 });
    const inputRef = ref("");
    // state.count与inputRef中任意一个源改变都会触发watch

    // 基础用法
    watch(() => {
      console.log("state", state.count);
      console.log("ref", inputRef.value);
    });

    // 指定依赖源
    //  在基础用法中:
    //  当依赖了多个reactive或ref是无法直接看到的，需要在回调中寻找.
    //  在回调中我虽然使用了多个reactive，但我希望只有在某个reactive改变时才触发watch。
    return { state, inputRef };
  }

  // setup() {
  //     const state2 = reactive({count: ''})
  //     const ref2 = ref('')
  //     // 通过函数参数指定reative依赖源
  //     // 只有在state2.count改变时才会触发watch
  //     watch(
  //       () => state2.count,
  //       () => {
  //         console.log('state2.count',state2.count)
  //         console.log('ref2.value',ref2.value)
  //     })
  //     // 直接指定ref依赖源
  //     watch(ref2,() => {
  //       console.log('state2.count',state2.count)
  //       console.log('ref2.value',ref2.value)
  //     })

  //     return {state, inputRef, state2, ref2}
  //   }
};
</script>
