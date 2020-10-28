<template>
  <useslot>
    <template v-slot="{count, increment}">
      {{ count }}
      <button @click="increment">Increment</button>
    </template>
  </useslot>
</template>

<script>
import useslot from "../utils/slot.vue";
export default {
  components: {
    useslot
  }
};
</script>

<style>
</style>