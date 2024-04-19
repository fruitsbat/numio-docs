<template>
  <div>
    <slot></slot>
    <div class="flex flex-wrap gap-4">
      <DaemonCard title="CPU" @clicked="addDaemon('cpu')">
        <ProseP>
          This daemon stressed the cpu as much as possible by doing calculations
          on all available CPU cores.
        </ProseP>
      </DaemonCard>
      <DaemonCard title="Idle" @clicked="addDaemon('idle')"></DaemonCard>
      <DaemonCard title="RAM" @clicked="addDaemon('ram')"></DaemonCard>
      <DaemonCard title="find" @clicked="addDaemon('find')">
        This daemon runs the find utility. This is commonly used to find files
        on linux systems.
        <DeamonSettingInput v-model="findPath" />
      </DaemonCard>
    </div>
    <button @click="copyToClipboard" class="btn btn-ghost">
      copy to clipboard {{ findPath }}
    </button>
    <!-- list of selected daemons -->
    <div class="flex flex-wrap gap-2">
      <div
        class="flex gap-2 flex-col bg-base-100 rounded-lg p-2"
        v-for="(daemon, daemonIndex) in daemonList"
      >
        <span class="font-black">{{ daemon }}</span>
        <button
          class="btn btn-ghost"
          @click="daemonList.splice(daemonIndex, 1)"
        >
          - remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

type DaemonType = "cpu" | "idle" | "ram" | "find" | "iperf" | "read" | "write";
const daemonList = ref<Array<DaemonType>>([]);
function addDaemon(daemon: DaemonType) {
  daemonList.value.push(daemon);
}
const findPath = ref("find");

const source = ref("");
const { copy } = useClipboard({});
const copyToClipboard = () => {
  copy(source.value);
};
</script>
