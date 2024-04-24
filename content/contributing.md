# Contributing

To contribute simply make a pull request on github.

## Formatting
Ensembles uses strict type linting as well as the black formatter.
If you would like to make a change it would be best to keep it that way.

## How ensembles works
Ensmebles is made to be called from a python batch script.
It provides logging and several other functions to make benchmarking using NumIO easier.
A main script starts two different threads: logging and either a NumIO run or a daemon.
Some daemons will also run in multithreaded mode.
Check [daemon.py](https://github.com/fruitsbat/ensembles/blob/main/src/daemon.py) and [numio.py](https://github.com/fruitsbat/ensembles/blob/main/src/numio.py) for more information on how this works.