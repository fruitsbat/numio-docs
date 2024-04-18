<template>
    <h4 class="text-3xl link font-black pt-4 pb-0" :id="id">
      <a
        v-if="id && generate"
        :href="`#${id}`"
      >
        <slot />
      </a>
      <slot v-else />
    </h4>
  </template>
  
  <script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'
  
  const props = defineProps<{ id?: string }>()
  
  const { headings } = useRuntimeConfig().public.mdc
  const generate = computed(() => props.id && headings?.anchorLinks?.h4)
  </script>