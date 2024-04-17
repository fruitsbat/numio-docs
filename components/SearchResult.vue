<template>
  <NuxtLink
    :external="true"
    @click.native="$emit('clicked')"
    class="bg-gradient-to-r from-primary to-base-100 rounded-xl text-neutral"
    :to="id"
  >
    <div
      class="p-6 flex flex-col bg-base-100 bg-opacity-80 rounded-xl"
    >
      <span class="font-black text-xl">{{ title }}</span>
      <span class="text-sm font-extralight italic" v-if="titles.length > 0">{{
        titleDisplay()
      }}</span>
      <span>{{ content }}</span>
    </div>
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
