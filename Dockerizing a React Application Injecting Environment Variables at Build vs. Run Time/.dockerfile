FROM node:22.4.1-slim as build  

# Define build arguments  
ARG APP_API_URL  
ARG APP_ENV  

# Pass arguments as environment variables  
ENV VITE_API_URL=$APP_API_URL  
ENV VITE_APP_ENV=$APP_ENV  

# Install dependencies and build the React app  
WORKDIR /app  
COPY . .  
RUN npm install && npm run build  

FROM nginx:1.27.0-alpine  
COPY --from=build /app/dist /usr/share/nginx/html  
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf  
EXPOSE 80  
