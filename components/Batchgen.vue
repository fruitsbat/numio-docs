<template>
  <div>
    <slot></slot>
    <ProseH3>mpiexec Settings</ProseH3>
    <ProseH3>Numio Settings</ProseH3>
    <div class="flex gap-2">
      <label for="enable-numio">Enable NumIO</label>
      <input
        v-model="enableNumio"
        class="checkbox"
        id="enable-numio"
        type="checkbox"
      />
    </div>
    <ProseH3>Daemon Settings</ProseH3>
    <div class="grid gap-6 grid-cols-3 @container">
      <div
        class="grid grid-cols-2 @2:grid-cols-3 @7xl:grid-cols-4 col-span-2 flex-wrap gap-4"
      >
        <DaemonCard title="CPU" @clicked="addDaemon('cpu')">
          <ProseP>
            This daemon stressed the cpu as much as possible by doing
            calculations on all available CPU cores.
          </ProseP>
        </DaemonCard>
        <DaemonCard title="Idle" @clicked="addDaemon('idle')">
          <ProseP> This daemon just idles. </ProseP>
        </DaemonCard>
        <DaemonCard title="RAM" @clicked="addDaemon('ram')">
          <ProseP> This daemon writes as much as possible into ram. </ProseP>
        </DaemonCard>
        <DaemonCard title="find" @clicked="addDaemon('find')">
          <ProseP>
            This daemon runs the find utility. This is commonly used to find
            files on linux systems.
          </ProseP>
          <DeamonSettingInput v-model="findPath">
            <template v-slot:label> find path </template>
            <template v-slot:description>
              This is where the find binary can be found. Find is usually
              already in your path. So leaving this as a default should be fine.
            </template>
          </DeamonSettingInput>
          <DeamonSettingInput v-model="findSearchPath">
            <template v-slot:label> find search path </template>
            <template v-slot:description>
              This is the directory that will be searched by the find daemon
              It's ideal if you have read permissions on all of it.
            </template>
          </DeamonSettingInput>
        </DaemonCard>
        <DaemonCard title="read" @click="addDaemon('read')">
          <ProseP>
            This daemon creates a file and the repeatedly reads from it.
          </ProseP>
          <DeamonSettingInput v-model="readPath">
            <template v-slot:label>read path</template>
            <template v-slot:description
              >This is where the file should be generated</template
            >
          </DeamonSettingInput>
        </DaemonCard>
        <DaemonCard title="write" @click="addDaemon('write')">
          <DeamonSettingInput v-model="writePath">
            <template v-slot:label>write path</template>
            <template v-slot:description
              >This is where the file should be generated.</template
            >
          </DeamonSettingInput>
        </DaemonCard>
        <DaemonCard title="iperf" @clicked="addDaemon('iperf')">
          <ProseP>
            IPerf is a program to measure network performance by sending large
            amounts of data. This daemon required a usable iperf3 server. There
            is a
            <ProseA href="https://iperf.fr/iperf-servers.php"
              >list of public servers</ProseA
            >, but you can also set up one on your local network.
            <ProseA href="https://cheat-sheets.org/project/tldr/command/iperf/"
              >(List of examples.)</ProseA
            >. The most basic way to do this is to run
            <ProseCode language="bash">iperf3 -s</ProseCode> on another machine
            on the same network. This will not work if it's firewalled.
          </ProseP>
          <DeamonSettingInput v-model="iperfPath">
            <template v-slot:label> iperf path </template>
            <template v-slot:description>
              where the iperf3 binary is. it should be installed together with
              the conda environment and be in your path already.
            </template>
          </DeamonSettingInput>
          <DeamonSettingInput v-model="iperfServerAddr">
            <template v-slot:label> iperf server address </template>
            <template v-slot:description>
              This is where the iperf server is. Either an ip or a url.
            </template>
          </DeamonSettingInput>
          <DeamonSettingInput v-model="iperfPort">
            <template v-slot:label>iperf port</template>
            <template v-slot:description
              >port of the iperf server. by default this will be 5201</template
            >
          </DeamonSettingInput>
        </DaemonCard>
      </div>
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

      <!-- list of selected daemons -->
    </div>
    <button @click="copyToClipboard" class="btn btn-ghost">
      copy to clipboard
    </button>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

type DaemonType = "cpu" | "idle" | "ram" | "find" | "iperf" | "read" | "write";
const daemonList = ref<Array<DaemonType>>([]);
function addDaemon(daemon: DaemonType) {
  daemonList.value.push(daemon);
}

// numio Settings
const enableNumio = ref<boolean>(true);

// daemon settings
const findPath = ref("find");
const findSearchPath = ref("$HOME");

const iperfPath = ref("iperf3");
const iperfServerAddr = ref("136.172.61.247");
const iperfPort = ref("5201");

const readPath = ref("$HOME/ensembles_read");

const writePath = ref("$HOME/ensembles_write");

const source = ref("");
const { copy } = useClipboard({});
const copyToClipboard = () => {
  copy(source.value);
};
</script>
