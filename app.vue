<template>
  <div
    class="p-0 h-svh bg-gradient-to-tr from-accent to-primary flex flex-col w-full items-stretch gap-6 overflow-y-scroll"
  >
    <div class="bg-base-100 bg-opacity-90 h-full w-full backdrop-blur-4xl overflow-scroll">
      <Suspense>
        <SearchBar class="fixed w-full backdrop-blur-xl" />
      </Suspense>
      <div class="overflow-y-scroll w-full flex justify-center">
        <div class="pt-24 prose">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>
