# Use the official Bun image from the Docker Hub
FROM oven/bun:latest

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy app files
COPY . .

# Install app dependencies
RUN bun install
RUN bunx db:generate
RUN bun db:migrate:deploy

# Bind the app to port 3000
# EXPOSE 3000

# Run the application
CMD ["bun", "run", "start"]