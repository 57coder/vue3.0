<template>
  <div class="counter">
    <p>count: {{ count }}</p>
    <p>NewVal (count + 2): {{ countDouble }}</p>
    <button @click="inc">Increment</button>
    <button @click="dec">Decrement</button>
    <p> Message: {{ msg }} </p>
    <button @click="changeMessage()">Change Message</button>
    {{x}}=={{y}}
  </div>
</template>
<script>
import { ref, computed, watch } from 'vue'
import useMouse from '../utils/listenMouse.js';
export default {
  setup(props, context) {
    console.log(props, context, 'props, context')
    /* ---------------------------------------------------- */
    let count = ref(0)
    const countDouble = computed(() => count.value * 2)
    watch(count, newVal => {
      console.log('count changed', newVal)
    })
    const inc = () => {
      count.value += 1
    }
    const dec = () => {
      if (count.value !== 0) {
        count.value -= 1
      }
    }
    /* ---------------------------------------------------- */
    let msg= ref('some text')
    watch(msg, newVal => {
      console.log('msg changed', newVal)
    })
    const changeMessage = () => {
      msg.value = "new Message"
    }
    /* ---------------------------------------------------- */


    /* ---------------------------------------------------- */
    let {x, y} = useMouse();
    /* ---------------------------------------------------- */

    return {
      x,
      y,
      count,
      inc,
      dec,
      countDouble,
      msg,
      changeMessage
    }
  }
}
</script>
