<template>
  <div class="p-4 rounded-xl bg-base-100 flex flex-col">
    <ProseH3>{{ title }}</ProseH3>
    <slot></slot>
    <button class="btn btn-ghost" @click="$emit('clicked')">+ add</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
