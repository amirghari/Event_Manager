# Use the latest Node.js LTS (Long Term Support) image as base
FROM node:lts

# Set the working directory in the container
WORKDIR /app/Frontend

# Copy frontend package.json and package-lock.json files to the container
COPY Frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code to the container
COPY Frontend ./

# Expose port 5173 (assuming your frontend server runs on port 5173)
EXPOSE 5173

# Set the working directory in the container
WORKDIR /app/Backend

# Copy backend package.json and package-lock.json files to the container
COPY Backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend application code to the container
COPY Backend ./

# Expose port 3000 (assuming your backend server runs on port 3000)
EXPOSE 3000

# Command to build and serve the frontend
ENTRYPOINT ["npm", "run", "dev", "start"]
