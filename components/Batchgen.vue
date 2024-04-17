<template>
  <div>
    <slot></slot>
    <button @click="copyToClipboard" class="btn">copy to clipboard</button>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
const source = ref("meow!");
const { copy } = useClipboard({});
const copyToClipboard = () => {
  copy(source.value);
};
</script>
