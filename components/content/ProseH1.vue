<template>
    <h1 class="font-black text-5xl pt-24 pb-6" :id="id">
      <a
        v-if="id && generate"
        :href="`#${id}`"
      >
        <slot />
      </a>
      <slot v-else />
    </h1>
  </template>
  
  <script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'
  
  const props = defineProps<{ id?: string }>()
  
  const { headings } = useRuntimeConfig().public.mdc
  const generate = computed(() => props.id && headings?.anchorLinks?.h1)
  </script>