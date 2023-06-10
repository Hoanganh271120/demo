FROM node:16

# RUN curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
# RUN sudo apt-get install -y nodejs 

WORKDIR /home/backend-app

COPY . . 
EXPOSE 8888
CMD ["npm","run","start:dev"]