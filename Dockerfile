# Use the official Bun image from the Docker Hub
FROM oven/bun:debian

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy app files
COPY . .

# Install app dependencies
RUN bun install
RUN bun db:migrate:deploy
RUN bun db:generate

# Bind the app to port 3000
EXPOSE 3000

# Run the application
CMD ["bun", "run", "start"]