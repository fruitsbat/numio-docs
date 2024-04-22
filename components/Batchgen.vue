<template>
  <div>
    <slot></slot>
    <ProseH3>mpiexec Settings</ProseH3>
    <ProseP
      >Reserve <input class="input" type="number" v-model="time" /> minutes of
      time.
      <br />
      Use <input class="input" type="number" v-model="nTasksPerNode" /> tasks
      per node.
      <br />
      Use the <input class="input" type="text" v-model="partition" /> partition.
      <br />
      Write the log to <input class="input" type="text" v-model="output" />.
      <br />
      Write errors to <input class="input" type="text" v-model="error" />.
    </ProseP>
    <ProseH3>Numio Settings</ProseH3>
    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <label for="enable-numio">Enable NumIO</label>
        <input
          v-model="enableNumio"
          class="checkbox checkbox-primary"
          id="enable-numio"
          type="checkbox"
        />
      </div>
      <ProseP>
        If NumIO is disabled, idle for
        <input type="number" v-model="idleOnlyTime" class="input" /> seconds
        instead.
      </ProseP>
      <hr />
      <ProseP>
        The ensembles binary is at
        <input class="input" type="text" v-model="mpiexecPath" />
      </ProseP>
      <hr />
      <ProseP>
        Ensembles will log data every
        <input type="number" class="input" v-model="logEveryXSecodns" />
        seconds.
      </ProseP>
      <ProseP>
        The graph data will be stored in the
        <input class="input" type="text" v-model="graphOutPath" /> directory.
      </ProseP>
      <ProseP>
        The graph will be stored as a
        <input class="input" type="text" v-model="graphFiletype" /> file.
      </ProseP>
      <ProseP>
        The json data will be stored in the
        <input class="input" type="text" v-model="dataOutPath" />
        directory.
      </ProseP>
      <hr />
      <ProseP>
        The matrix for ensembles will be
        <input class="input" type="number" v-model="lines" /> x {{ lines }}
      </ProseP>
      <ProseP>
        Numio will perform
        <input class="input" type="number" v-model="iterations" />
        iterations.
      </ProseP>
      <div class="flex gap-2">
        <label for="use-pert">use Perturbation function</label>
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          v-model="pert"
        />
      </div>
      <hr />
      <div class="flex gap-2">
        <label for="use-read">enable read</label>
        <input
          id="use-read"
          type="checkbox"
          class="checkbox checkbox-primary"
          v-model="enableNumioRead"
        />
      </div>
      <div class="flex gap-2">
        <label for="use-write">enable read</label>
        <input
          id="use-write"
          type="checkbox"
          class="checkbox checkbox-primary"
          v-model="enableNumioRead"
        />
      </div>
      <ProseP>
        If they are enabled, numio will read and write to the file at
        <input class="input" type="text" v-model="ensemblesRWPath" />
        every
        <input class="input" type="number" v-model="ensemblesRWFrequency" />
        iterations.
      </ProseP>
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
    <pre>
      {{ source }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { Input } from "postcss";

type DaemonType = "cpu" | "idle" | "ram" | "find" | "iperf" | "read" | "write";
const daemonList = ref<Array<DaemonType>>([]);
function addDaemon(daemon: DaemonType) {
  daemonList.value.push(daemon);
}

// sbatch Settings
const time = ref<number>(10);
const nTasksPerNode = ref<number>(1);
const partition = ref<string>("west");
const output = ref<string>("job.out");
const error = ref<string>("job.err");

// mpiexec settings
const mpiexecPath = ref("mpiexec");

// numio Settings
const enableNumio = ref<boolean>(true);
const numioPath = ref("numio-posix");
const enableNumioRead = ref<boolean>(true);
const idleOnlyTime = ref<number>(12);
// activate nofilesync if this is off
const numioWImmediate = ref<boolean>(true);
const numioFpisin = ref<boolean>(true);
const numioFilePerProcess = ref<boolean>(true);
const iterations = ref<number>(9000);
const lines = ref<number>(500);
const pert = ref<boolean>(true);
const enableNumioWrite = ref<boolean>(true);
const ensemblesRWFrequency = ref<number>(64);
const ensemblesRWPath = ref<string>("matrix.out");
const rImmediate = ref<boolean>(true);
const collectiveComms = ref<boolean>(true);
const collectiveCommSize = ref<number>(200);
const collectiveCommFreq = ref<number>(64);
const asyncWrite = ref<boolean>(false);
const gzip = ref<boolean>(true);
const lz4 = ref<boolean>(false);
const chunkMultiplier = ref<number>(1);
const compressLevel = ref<number>(1);
const numioThreads = ref<number>(1);
const graphOutPath = ref<string>("plots");
const graphFiletype = ref<string>("pdf");
const logEveryXSecodns = ref<number>(3);
const dataOutPath = ref<string>("data");

// daemon settings
const findPath = ref("find");
const findSearchPath = ref("$HOME");

const iperfPath = ref("iperf3");
const iperfServerAddr = ref("136.172.61.247");
const iperfPort = ref("5201");

const readPath = ref("$HOME/ensembles_read");

const writePath = ref("$HOME/ensembles_write");

const taskCount = () => {
  return daemonList.value.length + 1;
};

// const source = computed(`
// #!/bin/bash

// #SBATCH --time=${time.value}
// #SBATCH --nodes=${taskCount() / nTasksPerNode.value}
// #SBATCH --ntasks-per-node=${nTasksPerNode.value}
// #SBATCH --ntasks=${daemonList.value.length + 1}
// `);

const source = computed(() => {
  return `
#SBATCH --time=${time.value}
#SBATCH --ntasks=${taskCount()}
#SBATCH --nodes=${taskCount() / nTasksPerNode.value}
#SBATCH --ntasks-per-node=${nTasksPerNode.value}
#SBATCH --partition=${partition.value}
#SBATCH --output=${output.value}
#SBATCH --error=${error.value}

export ENSEMBLES_IDLE_ONLY=${enableNumio.value ? "False" : "True"}
export ENSEMBLES_IDLE_ONLY_TIME=${idleOnlyTime.value}

export ENSEMBLES_MPIEXEC_PATH=${mpiexecPath.value}
export ENSMEBLES_MPIEXEC_NODES=1

export ENSEMBLES_NUMIO_PATH=${numioPath.value}

export ENSEMBLES_LOG_EVERY_X_SECONDS=${logEveryXSecodns.value}
export ENSEMBLES_GRAPH_OUT_PATH=${graphOutPath.value}
export ENSEMBLES_GRAPH_FILETYPE=${graphFiletype.value}
export ENSEMBLES_DATA_OUT_PATH=${dataOutPath.value}

export ENSEMBLES_LINES=${lines.value}
export ENSEMBLES_ITERATIONS=${iterations.value}
export ENSEMBLES_PERT=${pert.value ? "True" : "False"}

export ENSEMBLES_NUMIO_RW_PATH=${ensemblesRWPath.value}
export ENSEMBLES_NUMIO_RW_FREQUENCY=${ensemblesRWFrequency.value}
export ENSEMBLES_NUMIO_READ=${enableNumioRead.value ? "True" : "False"}
export ENSEMBLES_NUMIO_WRITE=${enableNumioWrite.value ? "True" : "False"}
export ENSEMBLES_NUMIO_R_IMMEDIATE=${rImmediate.value ? "True" : "False"}
export ENSEMBLES_NUMIO_W_NOFILESYNC=${numioWImmediate.value ? "False" : "True"}
export ENSEMBLES_NUMIO_W_IMMEDIATE=${numioWImmediate.value ? "True" : "False"}

export ENSEMBLES_NUMIO_COLLECTIVE_COMMS=${
    collectiveComms.value ? "True" : "False"
  }
export ENSEMBLES_NUMIO_COLLECTIVE_COM_SIZE=${collectiveCommSize.value}
export ENSEMBLES_NUMIO_COLLECTIVE_COM_FREQ=${collectiveCommFreq.value}
export ENSEMBLES_NUMIO_FPISIN=${numioFpisin.value ? "True" : "False"}
export ENSEMBLES_NUMIO_FILE_PER_PROCESS=${
    numioFilePerProcess.value ? "True" : "False"
  }
export ENSEMBLES_NUMIO_ASYNC_WRITE=${asyncWrite.value ? "True" : "False"}
export ENSEMBLES_NUMIO_GZIP=${gzip.value ? "True" : "False"}
export ENSEMBLES_NUMIO_LZ4=${lz4.value ? "True" : "False"}
export ENSEMBLES_NUIMIO_CHUNK_MULTIPLIER=${chunkMultiplier.value}
export ENSEMBLES_NUMIO_COMPRESS_LEVEL=${compressLevel.value}

export ENSEMBLES_NUMIO_THREAD=${numioThreads.value}


export ENSEMBLES_IPERF_PATH=${iperfPath.value}
export ENSEMBLES_IPERF_SERVER_IP=${iperfServerAddr.value}
export ENSEMBLES_IPERF_PORT=${iperfPort.value}

export ENSEMBLES_WRITE_PATH=${writePath.value}

export ENSEMBLES_READ_PATH=${readPath.value}

export ENSEMBLES_FIND_PATH=${findPath.value}
export ENSMEBLES_FIND_SEARCH_PATH=${findSearchPath.value}

${mpiexecPath.value} python src/main.py
`;
});
const { copy } = useClipboard({});
const copyToClipboard = () => {
  copy(source.value);
};
</script>
