<template>
  <div class="pt-6">
    <label :for="randomId"><slot name="label"></slot></label>
    <input class="input input-primary w-full" :id="randomId" v-model="model" />
    <p><slot name="description"></slot></p>
  </div>
</template>

<script setup lang="ts">
const randomId = `${Math.random()}`;

const model = defineModel({ required: true, type: String });
</script>
