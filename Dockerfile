FROM node:16

WORKDIR /home/node/docker-volume

RUN npm install express multer

COPY index.html ./public/

COPY server.js .  

CMD ["node", "server.js"]
