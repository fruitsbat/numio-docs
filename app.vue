<template>
  <div
    class="p-0 h-svh bg-gradient-to-tr from-base-100 to-primary flex flex-col w-full items-stretch gap-6 text-neutral"
  >
    <div
      class="bg-base-100 bg-opacity-90 h-full flex flex-col backdrop-blur-4xl overflow-y-scroll"
    >
      <Suspense>
        <SearchBar class="w-full" />
      </Suspense>
      <div class="overflow-y-scroll w-full flex justify-center">
        <div class="max-w-7xl p-6">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>
