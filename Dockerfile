# Use the official Node.js 18 image as the base image
FROM node:18

# Enable pnpm
RUN corepack enable

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files to the working directory
COPY package.json pnpm-lock.yaml ./

# Install the application dependencies using pnpm
RUN pnpm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the TypeScript code
RUN pnpm build

# Expose the application port (change if your app uses a different port)
EXPOSE 3000

# Set the command to run the application
CMD ["pnpm", "start"]
