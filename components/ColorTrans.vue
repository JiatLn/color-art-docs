<template>
  <div class="line">
    <div v-if="Array.isArray(input)" class="color-inputs">
      <div class="input" :title="input[0]" :style="{ backgroundColor: input[0] }">{{ input[0] }}</div>
      <span class="plus">+</span>
      <div class="input" :title="input[1]" :style="{ backgroundColor: input[1] }">{{ input[1] }}</div>
    </div>
    <div v-else class="input" :title="input" :style="{ backgroundColor: input }">{{ input }}</div>
    <span class="arrow">-></span>
    <div class="output" :title="output" :style="{ backgroundColor: output }">{{ output }}</div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  input: string | string[],
  output: string,
}>()

const { input, output } = toRefs(props)
</script>

<style scoped>
.line {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.arrow,
.plus {
  padding: 8px 20px;
}

.input,
.output {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  padding: 10px 20px;
  color: #000;
  border-radius: 4px;
}

.color-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
