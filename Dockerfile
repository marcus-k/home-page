# Use alpine variant for small image size
FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy all package-like .json files
COPY package*.json ./

# Install Node.js packages
RUN npm install

# Copy all other source material
COPY . .

# Expose desired port
ENV PORT=8080
EXPOSE ${PORT}

# Define how to start the server
CMD ["node", "app.js"]
