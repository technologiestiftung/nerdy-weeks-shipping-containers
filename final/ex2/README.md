# Exercise 2

Types of images:

There are two types of images. Some execute a single command like `docker/whalesay` or `python` as we seen before and others which start a kind of session.


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=true} -->

<!-- code_chunk_output -->

1. [Run Ubuntu](#run-ubuntu)
2. [Install Some Software](#install-some-software)
3. [Task](#task)
    1. [Install](#install)
    2. [Stop and Restart](#stop-and-restart)

<!-- /code_chunk_output -->


## Run Ubuntu

```bash
docker run -it ubuntu
# when in the session run image
cat /etc/*-release
```


## Install Some Software

On ubuntu you normally install software by running
 
```bash
# Hint! You first need to update the package references
apt-get update
# Hint!: In the container you don't need sudo
apt-get install <SOFTWARE NAME>
# or
apt install <SOFTWARE NAME>
# e.g. cowsay or fortune
# Warning! They are not in your path yet
# they get installed in /usr/games
```

## Task

### Install

- `curl` and make a web request to `https://jsonplaceholder.typicode.com/posts/1`
- `Node.js` and run this program `console.log("hello ubuntu")`
- `npm` and run this program `npx cowsay "moooooh"`


### Stop and Restart

- How to `exit` this session?
- How to start it again?
- Can you find your `Node.js` script?



<!-- 

For example you can start a ubuntu bash session just by running `docker run -it ubuntu`. This starts a bash session within a ubuntu image. The `-i -t` flags are for `-i, --interactive Keep STDIN open even if not attached` and `-t, --tty Allocate a pseudo-TTY` . Which means connect my terminal session with the session of the container. This allows you to start a session, play within the ubuntu machine. You can exit this session by running `exit`. 

Remember! Anything you do inside of this session will be lost after you exit it. There are no files written to disk until you explicitly tell docker to do so.

Wouldn't it be great to write the programm on my local disk?
-->

[<-- Previous](../ex1/README.md) || [Next -->](../ex3/README.md)