<!-- <script setup>
import { ref } from '@vue/composition-api'
const number = ref(0)

const obj = reactive({
  name: '易函123',
  age: 20
})

const addCount = () => {
  number.value++
  obj.age + 1
}
</script> -->



<template>
  <div class="about">
    <h1>info</h1>
    <p>{{ number1 }}</p>
    <el-button @click="addCount" type="primary">add</el-button>
    <p>我是{{ peopleObj.name }}</p>
    <p>今年 {{ peopleObj.age }}</p>
  </div>
</template>

<script>
import { ref, reactive, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const number1 = ref(0)

    const peopleObj = reactive({
      name: '易函123',
      age: 20
    })

    const addCount = () => {
      number1.value++
      peopleObj.age = peopleObj.age + 1
    }
    // const dataRef = toRefs(obj)
    return {
      peopleObj,
      number1,
      addCount
    }
  }
})
</script>