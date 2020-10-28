<template>
  <form-data v-model:name="name" v-model:age="age" @update='childUpdate'></form-data>
</template>


<script>
import {ref} from 'vue'
import formData from '../utils/formData.vue'
export default {
  name: "mutipleVModels",
  components: {
    formData
  },
  setup(props, context) {
    const childUpdate = (val) => {
      console.log(val);
      
    }
    let name = ref('zs')
    let age = ref(12)
    return { name, age, childUpdate};
  }
};
</script>
<style>
</style>