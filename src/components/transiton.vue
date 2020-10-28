<template>
  <div id="demo">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Transition",
  setup() {
    let show = ref(true);
    return {
      show
    };
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
/* .fade-enter, .fade-leave-to {
  opacity: 0;
} */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>