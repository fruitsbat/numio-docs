<template>
  <div class="p-0 h-svh flex flex-col w-full items-stretch gap-6">
    <SearchBar class="fixed w-full backdrop-blur-xl" />
    <div class="overflow-y-scroll w-full flex justify-center">
      <div class="pt-24 prose">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
