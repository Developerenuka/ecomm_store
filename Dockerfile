# Use an official Node runtime as a parent image
FROM node:20-alpine as build

# Set the working directory in the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install app dependencies
RUN npm install

# Copy the app source code to the working directory
COPY . .

RUN npm run build
RUN npm install -g serve
# Expose the port the app runs on
# EXPOSE 3000

# Define the command to run your app
CMD ["serve", "-s", "build"]
# Use Nginx for the production image
# FROM nginx:1.21-alpine

# # Copy the build files from the build image
# COPY --from=build / /usr/share/nginx/html

# # Expose port 80 to the outer world
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
