<template>
  <ProseH1>Welcome to NumIO ensembles!</ProseH1>
  <div class="flex w-full justify-between">
    <NuxtLink to="/getting-started">get started</NuxtLink>
    <NuxtLink to="/config">configuration</NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "NumIO Ensembles",
});
</script>
