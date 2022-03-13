FROM node:lts

WORKDIR /srv/app

# copy source code
COPY . .

# install npm
RUN npm install

# build
RUN npm run build

# start
CMD ["npm", "run", "start"]