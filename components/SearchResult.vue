<template>
  <NuxtLink
    :external="true"
    @click.native="$emit('clicked')"
    class="p-6 flex flex-col bg-base-200 rounded-xl text-neutral"
    :to="id"
  >
    <span class="font-bold text-lg">{{ title }}</span>
    <span class="text-sm font-light italic" v-if="titles.length > 0">{{
      titleDisplay()
    }}</span>
    <span>{{ content }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  titles: String[];
  content: string;
  id: string;
}>();

const titleDisplay = () => {
  let result = "";
  for (let title in props.titles) {
    result = `${result} > ${props.titles[title]}`;
  }
  return result;
};
</script>
