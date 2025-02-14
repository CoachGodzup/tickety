# Use the official Node.js image based on Alpine Linux
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the rest of the application code
COPY /src ./src

# Install dependencies
RUN npm i

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD [ "npm", "run", "dev" ]
