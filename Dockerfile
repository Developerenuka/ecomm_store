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

RUN npm install -g serve
# Run build
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["serve", "-s", "build"]
