
# Configuration
Ensembles uses an mpi batch script for configuration.
This script can be run using `sbatch ${SCRIPT_NAME}`.
If your script is in the same folder you're in and is called "`mpi.slurm`" you would run: `./sbatch mpi.slurm`.

## Generating a configuration file

::Batchgen

::

## Parameters
### `#SBATCH --time`
How long the batch job is allowed to take in minutes.
#### Example
`#SBATCH --time=120`

### `#SBATCH --nodes`
How many compute nodes should get used.
#### Example
`#SBATCH --nodes=3`

### `#SBATCH --ntasks-per-node`
The number of tasks per node.
#### Example
`#SBATCH --ntasks-per-node=1`

### `#SBATCH --ntasks`
The total number of tasks.
#### Example
`#SBATCH --ntasks=3`

### `#SBATCH --partition`
What partition of the cluster to run on.
You can find information and names of available partitions by running `sinfo`.
#### Example
`#SBATCH --partition=west`

### `#SBATCH --output`
Ensembles will generate a log file. This is the location of this file.
#### Example
`#SBATCH --output=job.out`

### `#SBATCH --error`
If ensembles creates an error log this is where it will be stored.
#### Example
`#SBATCH --error=job.err`

### `ENSEMBLES_MPIEXEC_PATH`
Where to find the mpiexec binary.
The default is `mpiexec` since it should already be in your `$PATH`.
#### Example
`export ENSEMBLES_MPIEXEC_PATH=mpiexec`