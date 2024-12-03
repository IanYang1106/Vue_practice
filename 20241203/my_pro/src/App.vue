<script setup>
import { ref, computed, watch } from 'vue'

// 定義響應式變量 count
const count = ref(0)

const bmi = ref(0)

const height = ref(0)

const weight = ref(0)

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

const bmi_res = () => {
  if (height.value > 0 && weight.value > 0) {
    const heightInMeters = height.value / 100 // 將身高轉換為公尺
    bmi.value = (weight.value / (heightInMeters * heightInMeters)).toFixed(2) // 保留兩位小數
  } else {
    bmi.value = '請輸入有效的身高和體重！'
  }
}
</script>

<template>
  <div>
    <button @click="minus">-</button>
    <input type="number" v-model="count" />
    <button @click="plus">+</button>
  </div>

  <section class="calculator">
    <section class="fields">
      <h1>BMI 計算機</h1>
      <h2>想要健康嗎？趕快動起來！</h2>
      <div>
        <label for="bodyHeight">身高</label>
        <input type="number" id="bodyHeight" min="0" v-model="height" /> 公分
      </div>
      <div>
        <label for="bodyWeight">體重</label>
        <input type="number" id="bodyWeight" min="0" v-model="weight" /> 公斤
      </div>
      <button @click="bmi_res">計算</button>
    </section>
    <section class="result">
      <h2>計算結果：</h2>
      <p id="resultText">{{ bmi }}</p>
    </section>
    <div class="clearfix"></div>
  </section>
</template>

<style scoped></style>
