# Exercise 4


> But what about scripts with modules?
– You

You will often encounter the situation where you use some python modules. These are not stored next to your script (like with node_modules). They are tucked away in some obscure location on your computer depending on how you run/install python. These modules are also packed for your operating system and maybe not compatible with the Linux distro that was used for your container. The solution is to write a `Dockerfile` and build our image ourselves based on another image.

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=true} -->

<!-- code_chunk_output -->

1. [Create an Image](#create-an-image)
2. [Task](#task)
    1. [How to run this image?](#how-to-run-this-image)
    2. [Write a Dockerfile for Node.js?](#write-a-dockerfile-for-nodejs)

<!-- /code_chunk_output -->

## Create an Image

- Open this folder in VSCode
- Create 3 files `cow.py`, `requirements.txt` and one `Dockerfile`

---

1. The script with the dependency we want to run. In our case `cow.py`
2. the `requirements.txt `file that holds our dependencies we can install with `pip`
3. The `Dockerfile` that describes how our image shoulde be structured

This is `cow.py`

```python
from cowsay import cow
cow("Hello Docker")
```

This is `requirements.txt`

```
cowsay==2.0.3
```

This is our `Dockerfile`. Please read the comments between the lines to know what each command does.

```docker
# the base image we use to build upon
FROM python:3.7.7-stretch
# we set the working directory
WORKDIR /cows
# we copy our requirements into the imagr
COPY ./requirements.txt requirements.txt
# we run the install with pip
RUN pip install -r requirements.txt
# we copy our script into the image
COPY cow.py cow.py
# we define the executable that we will call
ENTRYPOINT [ "python" ]
# we set the arguments for that executable
CMD ["cow.py"]
```

<!-- 
Some hints:

- In the Dockerfile we explicitly copied each file we need into the image. You could also copy whole directories. If you have some files you want to exclude you can create a `.dockerignore` file und use the same syntax in in `.gitignore` files. Make sure to exclude things like `node_modules`. Even if you don't copy them docker will send all the files in the local directory to the "build context". Therefore it is good to always have a `.dockerignore` around.
- We copy the `requirements.txt`   separate from the script, because each command like `COPY` or `RUN` adds a new layer to the image. For one this increases the size of the image but it makes our build also faster, since the copying of `requirements.txt` and also the install will not change so often as we do changes to our `[cow.py](http://cow.py)` script while developing. Docker will take layers that did not change and reuse them.
- We use an image based on Debian stretch in our example. That is okay for development, but in production we could use a slim version, since in the full stretch version are a lot of tools we actually don't need. If you want to be even slimmer you could use a alpine version of that base image.
- We  use the `ENTRYPOINT` to define our `python` executable and then pass our script as `CMD`. We could also use `ENTRYPOINT [ "python", "cow.py" ]` or even CMD `[ "python", "cow.py" ]`. The nice thing about separating these is that we now can pass other arguments to our `python` executable in our new container. Try the following commands
 -->
To build our image we run the following command in the directory where the three files are located.

```bash
docker build --tag technologiestiftung/cows ./
```
<!-- 
Let's dissect it.

1. `docker` The docker executable
2. `build` The command we use to build a new image
3. `--tag technologiestiftung/cows` The tag flag sets the name of the container as we already used it with the `python` image. To identify to which user/organisation the image belongs to we use the part before the `/` and to define a name for it we use the part after the `/`. Here we again omit the `:latest` tag. We also could give this image a different tag if we wanted to. Then we would have to explicitly define it like  `technologiestiftung/cows:moooo`
4. `.` is the path of the directory where the docker executable can find the `Dockerfile` 

-->

## Task

### How to run this image?

If everything went fine you should now have a new image. Take a look by running the next command.

```bash
docker images
```

But how do we run this image?



### Write a Dockerfile for Node.js?

The concept is the same. You need three files `package.json`, `index.js` and `Dockerfile`. 

!Hint: There might be a special image for Node.js. Take a look at [https://hub.docker.com](https://hub.docker.com).



[<-- Previous](../ex3/README.md) || [Next -->](../ex5/README.md)


<!--
```bash
docker run technologiestiftung/cows
``` 
since our executalbe is python we can do some magic with it
```bash
docker run technologiestiftung/cows --version
# or if you have another file
docker run -p $PWD:/scripts -w /scripts technologiestiftung/cows my-cow-script.py
```

-->