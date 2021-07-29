# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# add package.json to the container
COPY package.json .

# install dependencies on the container
RUN npm install

# fix Permissions for Packages
RUN npm config set unsafe-perm true

# add app
COPY . ./

# Expose port 3000 to the Docker host, so we can access it 
# from the outside.
EXPOSE 3000

# start app
CMD ["npm", "start"]