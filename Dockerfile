# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port your app runs on (e.g., 9090)
EXPOSE 9090

# Define the command to start your Node.js application
CMD ["node", "app.js"]
