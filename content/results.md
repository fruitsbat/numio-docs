# Evaluating Results

Ensembles logs data while running. These logfiles get exported as a Plot and as json data.
System data is captured using psutil.

For plotting we use matplotlib. This process runs on all nodes and runs right before they finish running.

While plotting data is not getting logged anymore, but logging does run on the same nodes that run the daemons.
However this should not drastically impact performance.

Plotted data looks like this:
![a matplotlib plot](/log.png)
You will get one for each node that runs.