<template>
  <ProseH1>Welcome to NumIO ensembles!</ProseH1>
  <div class="flex flex-wrap w-full justify-between">
    <NuxtLink class="btn btn-ghost" to="/getting-started">get started</NuxtLink>
    <NuxtLink class="btn btn-ghost" to="/config">configuration</NuxtLink>
    <NuxtLink class="btn btn-ghost" to="/results">evaluating results</NuxtLink>
    <NuxtLink class="btn btn-ghost" to="/daemons">daemons</NuxtLink>
    <NuxtLink class="btn btn-ghost" to="/contributing">contributing</NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "NumIO Ensembles",
});
</script>
