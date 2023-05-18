<template>
  <div class="warpper">
    <div v-if="Array.isArray(input)" class="color-inputs">
      <ColorItem :colorStr="input[0]" />
      <span class="plus"> + </span>
      <ColorItem :colorStr="input[1]" />
    </div>
    <ColorItem v-else :colorStr="input" />
    <span class="arrow"> -> </span>
    <ColorItem :colorStr="output" />
  </div>
</template>

<script setup lang="ts">
import ColorItem from './ColorItem.vue';
import { toRefs } from 'vue';

const props = defineProps<{
  input: string | string[],
  output: string,
}>()

const { input, output } = toRefs(props)
</script>

<style scoped>
.warpper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.arrow,
.plus {
  padding: 8px 20px;
}

.color-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
