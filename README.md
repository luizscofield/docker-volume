# Practice with docker volumes

This repository contains a Dockerfile and two code files to build a node.js webpage.
You just need to clone this repo and then build the image.

## How can I use this application?

```console
$ git clone https://github.com/luizscofield/docker-volume.git
$ docker build -t my-application .
$ docker run -d -p 80:3000 --name=my-container my-application
```

You can use the webpage to upload pictures.
The uploaded pictures will be displayed at the root page.

## How can i practice with docker volumes?

The problem with this application is that, once the container is recreated, all of the images are gone.
The challenge is to persist the images even after the container is recreated, using volumes.

The uploaded images are stored at the /home/node/docker-volume/uploads folder.

# Good luck!
