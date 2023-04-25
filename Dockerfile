# This is a kluge. We want our website to live in a container so 
# that our reverse-proxy can handle serving it along with all the
# other services it provides. So, we build the thing and use nginx to
# serve it internally on 80, which is picked up on the docker network
# and the served to the world when they hit the VIRTUAL_HOST defined
# in the docker-compose.yml file.

# Name the node stage "builder"
FROM node:14 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN yarn
RUN yarn build
RUN ls -lt

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/public .
RUN ls -lt
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]