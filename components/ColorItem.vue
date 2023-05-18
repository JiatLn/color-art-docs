<template>
  <div class="color-item " :title="colorStr">
    <div class="content" :style="{ backgroundColor: colorStr }">
      {{ colorStr }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  colorStr: string,
}>()
const { colorStr } = toRefs(props)
</script>

<style scoped>
.color-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.color-item .content {
  z-index: 2;
  min-width: 120px;
  padding: 10px 20px;
  color: #000;
  text-align: center;
}

.color-item::after {
  content: "";
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #d4d4d4 25%, transparent 25%, transparent 75%, #d4d4d4 75%,
      #d4d4d4 100%), linear-gradient(135deg, #d4d4d4 25%, transparent 25%, transparent 75%, #d4d4d4 75%, #d4d4d4 100%);
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
}
</style>
