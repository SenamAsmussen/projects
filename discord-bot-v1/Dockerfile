# Use official Node.js image as base
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Run deploy-commands.js to update commands
RUN node deploy-commands.js

# Start the application
CMD ["node", "index.js"]