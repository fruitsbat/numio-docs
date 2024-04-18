# Getting Started
This will teach you how to get NumIO ensembles up and running.

## Introduction

### What is NumIO Ensembles?
Ensembles is a helper for the NumIO benchmarking tool.
It aims to be quick to learn and easy to use.

### Why use NumIO Ensembles?
When running applications in a cluster computing environment there are often other jobs running in the background.
Ensembles attempts to replicate an environment like this to provide realistic benchmarking results.

### Assumptions
This guide will assume you are usign a compute Cluster with Linux and MPI installed.
It will also assume basic knowledge of these things.
[This guide](https://wr.informatik.uni-hamburg.de/teaching/ressourcen/beginners_guide) might be able to help if you are not familiar yet.

## Setup

### Prerequisites
NumIO Ensembles depends on a few things.
To follow this guide you will need a few things:
- [NumIO](https://git.wr.informatik.uni-hamburg.de/niclas.schroeter/IO-partdiff)
- access to a cluster computing environment with Linux, MPI and Slurm
- [the git CLI](https://git-scm.com/downloads)
- [Conda](https://docs.anaconda.com/free/miniconda/)
### Clone the Repository
NumIO ensembles is available on GitHub.
After you have logged into your account on the cluster run:
```bash
git clone --filter=tree:0 https://github.com/fruitsbat/ensembles/
```

This will create a folder called "`ensembles`".


### Install the python dependencies
Now `cd` into the folder:
```bash
cd ensembles
```

NumIO Ensembles needs a few python packages to work.
A conda environment is provided for this.
You can install it by running:
```bash
conda env create --name ensembles --file=environment.yml
```

Then load it with:
```bash
conda activate ensembles
```

Of course you don't need to name your environment "`ensembles`" for this to work.

### Create a batch file

Now you will need to create a batch file for Slurm.
Check the [config section](/config/) for more info.