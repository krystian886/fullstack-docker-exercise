# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# fix Permissions for Packages
RUN npm config set unsafe-perm true

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# node:alpine comes with a 'node' user
# but in some cases it needs more priviledges to /app directory
RUN chown -R node.node /app

# add app
COPY . ./

# start app
CMD ["npm", "start"]