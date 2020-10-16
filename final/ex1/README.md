# Exercise 1 


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=true} -->

<!-- code_chunk_output -->

1. [Does it work?](#does-it-work)
2. [Run an Image](#run-an-image)

<!-- /code_chunk_output -->


## Does it work?

```bash
docker --version
```

## Run an Image

```bash
docker run docker/whalesay cowsay "Hello World"
```

<!-- 
Let's dissect this command a little.

1. `docker` is the docker executable
2. `run` is the command to download an image (if not present) and run it immediately. If you just want to download it you would use the `pull` command.
3. `docker/whalesay` this is the name of an image stored in the docker registry where the part before the `/` in this case docker is the user or org and the part after the `/` is the name of the image. This points to the latest version of this image. Many images provide tags afterwards. `docker/whalesay:latest` would be the full reference. If the tag is omitted docker will look for the latest one. You can find more infos about this image, and many others, here [https://hub.docker.com/r/docker/whalesay](https://hub.docker.com/r/docker/whalesay).
4. `cowsay`  is the executable  located within the image we are using. Other examples would be `docker run python python "--version"` where the first python is the image and the second one is the executable.
5. `"Hello World"` is the arguments we are passing to our executable

There are of course many commands not listed here. To get a full overview of what `docker` is capable of run `docker --help` or for example `docker run —help` for subcommands. -->
