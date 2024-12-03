<script setup>
import { ref, computed, watch } from 'vue'

// 定義響應式變量 count
const count = ref(0)

const xxx = ref('haha')

// 定義增减方法
const plus = () => {
  count.value++ // 增加 count 的值
}

const minus = () => {
  if (count.value > 0) {
    // 防止 count 小於 0
    count.value--
  }
}
</script>

<template>
  <div>
    <button @click="minus">-</button>
    <input type="number" v-model="count" />
    <button @click="plus">+</button>
  </div>
</template>

<style scoped></style>
