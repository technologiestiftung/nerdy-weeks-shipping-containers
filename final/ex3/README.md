# Exercise 3

Share some disk:

Docker containers are totally separate from our filesystem. Which is a good thing. We don't share any dependencies and we have a fully isolated environment. What if we want to run a file we have on our computer within the docker container? 

This can be done by mapping a file or folder in our filesystem to the filesystem created within the container. This can be done using the flag -`v, --volume list Bind mount a volume`.



<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=true} -->

<!-- code_chunk_output -->

1. [Run a Python Script](#run-a-python-script)
2. [Task](#task)
    1. [Write to disk](#write-to-disk)
    2. [What About Modules?](#what-about-modules)

<!-- /code_chunk_output -->


## Run a Python Script

In the example below you can see this in action.


```bash
# To test this we first need to create the file `test.py`. 
echo "print('Hello Docker')" > test.py

docker run --volume "$PWD:/scripts" --workdir /scripts python python test.py

```

## Task

### Write to disk

Update your script to write to disk and run it again

```python
out = open("out.txt", "w")
out.write("hello docker")
out.write("\n")
out.close()
```

### What About Modules?

> But what about scripts with modules?
– You

Any idea what could be a problem?


[<-- Previous](../ex2/README.md) || [Next -->](../ex4/README.md)

<!-- 
Lets dissect this again:

1. `docker` the executable
2. `run` the docker command that runs an instance images of an image. A container
3. `v "$PWD/src:/scripts"` Here we have two parts. The one before the `:` which is a location in our local filesystem. We use the shell variable `$PWD` to get the path to our current folder. The part after the `:` is a location within the container. Here we define the folder `/scripts`which will be created if it does not exists.
4. `-w` This flag `—w, --workdir string Working directory inside the container` The working directory is the location where all my commands will be executed. By mapping the local directory to the folder `/scripts` and then defining it as the working directory we can make sure that the we don't need to add some paths for the python executable to find our `test.py` file.
5. `python` The first python in this case is the container we are about to run. We omit the `:latest` tag here and just get the latest python version. You can see [all available python tags here](https://hub.docker.com/_/python?tab=tags). If for example you want to run python 3.2.6 in a debian wheezy distribution, you could do that by running `python:3.2.6-wheezy` instead of only python.
6. `python` The second python in our example is the python executable within the container.
7. `test.py`This is our test script we created and mapped into our container using the `-v` flag
8.  -->