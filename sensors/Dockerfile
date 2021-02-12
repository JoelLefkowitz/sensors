FROM node:14.9 AS build

# Setup environment
WORKDIR /sensors
ENV PATH /sensors/node_modules/.bin:$PATH

# Build and cache dependencies
COPY ./package.json /sensors/package.json
RUN npm i

# Copy source
COPY . /sensors/

# Build the application
RUN ng build --prod

# Move to nginx base
FROM nginx:1.18

# Copy nginx config files
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/common /etc/nginx/common

# Copy browser bundles
COPY --from=build sensors/dist/sensors/ /etc/nginx/html/
