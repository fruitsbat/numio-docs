<template>
  <div
    class="bg-gradient-to-t to-base-300 from-transparent p-2 flex items-center justify-between"
  >
    <NuxtLink class="font-black text-2xl text-center" to="/"
      >NumIO<br /><span class="text-sm">ensembles</span></NuxtLink
    >
    <button @click="openSearchModal" class="btn btn-ghost">search</button>
    <dialog
      class="w-full bg-transparent h-full rounded-2xl join-vertical p-6"
      ref="searchModal"
    >
      <div
        class="join gap-6 p-6 join-vertical outline outline-1 outline-primary bg-base-100 bg-opacity-85 backdrop-blur-sm w-full h-full flex"
      >
        <input
          class="input w-full flex-0 input-primary join-item h-16 text-neutral"
          type="text"
          v-model="search"
        />
        <div class="flex rounded-xl flex-col gap-6 overflow-y-scroll flex-1">
          <SearchResult
            v-for="item in searchData.value ?? []"
            :key="item.id"
            :title="item.title"
            :content="item.content"
            :titles="item.titles"
            :id="item.id"
            @clicked="closeSearchModal"
          />
        </div>
        <button
          @click="closeSearchModal"
          class="btn fixed top-1 right-1 btn-error btn-circle"
        >
          x
        </button>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { watchDebounced } from "@vueuse/core";

const search = ref("");
const { data: searchData, refresh } = await useAsyncData(() =>
  searchContent(search, {})
);

watchDebounced(
  search,
  () => {
    refresh();
  },
  { debounce: 500, maxWait: 1000 }
);

const searchModal = ref<HTMLDialogElement>(null!);
const openSearchModal = () => {
  searchModal.value.showModal();
};
const closeSearchModal = () => {
  searchModal.value.close();
};
</script>
