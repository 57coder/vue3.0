<template>
  <div>
    <label>Name:</label>
    <input :value="name" @blur="updateName($event.target.value)" />
    <label>Age:</label>
    <input :value="age" @blur="updateAge($event.target.value)" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    name: String,
    age: Number
  },
  setup(props, { emit }) {
    const updateName = value => {
      emit("update", value);
    };
    const updateAge = value => {
      emit("update", value);
    };
    return { updateName, updateAge };
  }
};
</script>
<style>
</style>