🚀 **Dockerizing a React Application: Injecting Environment Variables at Build vs. Run Time**

When working on a recent React project, I encountered a challenge that many developers face: managing environment variables in a Dockerized application deployed across multiple environments. These variables—critical for things like API URLs, feature flags, and authentication keys—needed to be injected in a way that aligned with the project’s flexibility and scalability requirements.

After careful consideration, I explored two primary approaches: **injecting environment variables at build time** versus **at runtime**. Each approach has unique advantages, limitations, and practical implications. In this post, I’ll share the technical details of both methods and explain why I ultimately opted for runtime injection.

---

## **Project Setup Overview**

To set the stage, here’s a quick overview of the project structure:

1️⃣ **React Application**: The front-end app utilizes a `.env` file to manage environment variables locally during development.

2️⃣ **Dockerfile**: A multi-stage Dockerfile is used to build and serve the application.

3️⃣ **Nginx Customization**: A tailored `nginx-custom.conf` file is included to optimize the server for React’s static files.

This setup needed to support multiple environments—such as development, staging, and production—without compromising the efficiency of CI/CD pipelines.

---

## **Approach 1: Injecting Environment Variables at Build Time**

### **How It Works**

This approach involves embedding environment variables into the application at the Docker image build stage. The Dockerfile looks something like this:

```dockerfile
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
```

When building the Docker image, you pass the environment variables as arguments:

```bash
docker build --build-arg APP_API_URL=https://api.example.com --build-arg APP_ENV=production -t docker-approach:1 .
```

Once the image is built, it can be run like this:

```bash
docker run -p 3000:80 docker-approach:1
```

### **Advantages**

✅ The environment variables are securely baked into the build process.  
✅ Simple to implement for single-environment deployments.

### **Drawbacks**

❌ Requires separate Docker images for each environment.  
❌ Increased overhead in CI/CD pipelines for multi-environment workflows.

---

## **Approach 2: Injecting Environment Variables at Runtime**

### **The Challenge**

React applications typically embed environment variables into the static files at build time. These variables are hardcoded into the generated JavaScript files, making them immutable once the build is complete. This poses a problem when you need to deploy the same Docker image across multiple environments without rebuilding it.

### **The Solution: The `env.sh` Script**

To solve this, I used an `env.sh` script to modify the static files at runtime, just before Nginx serves them. Here’s the script:

```bash
#!/bin/sh
for i in $(env | grep APP_)
do
    key=$(echo $i | cut -d '=' -f 1)
    value=$(echo $i | cut -d '=' -f 2-)
    echo $key=$value
    # Replace placeholders in JavaScript files
    find /usr/share/nginx/html -type f -name '*.js' -exec sed -i "s|${key}|${value}|g" '{}' +
done
echo 'Environment variables injected successfully.'
```

This script:  
🔹 Loops through all environment variables starting with a specific prefix (e.g., `APP_`).  
🔹 Replaces placeholder values in the static JavaScript files with actual values provided at runtime.

### **Adding the Script to the Dockerfile**

To integrate the script, I modified the Dockerfile:

```dockerfile
FROM node:22.4.1-slim as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Add the env.sh script
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh
```

The `env.sh` script is copied into Docker’s `docker-entrypoint.d/` directory, ensuring it runs every time the container starts.

### **Running the Container**

Here’s how to use this setup:

1. Build the image:

   ```bash
   docker build -t docker-approach:2 .
   ```

2. Run the container with environment variables:
   ```bash
   docker run -p 3000:80 -e APP_API_URL=https://test-api.example.com -e APP_ENV=staging docker-approach:2
   ```

Now, the container dynamically injects the environment variables into the app’s static files when it starts.

---

## **Why I Chose Runtime Injection**

After evaluating both approaches, I chose **runtime injection** for several reasons:

1️⃣ **Flexibility**: A single Docker image can be used across multiple environments without rebuilding. This drastically simplifies deployment workflows.

2️⃣ **Efficiency**: By avoiding the need to rebuild images, CI/CD pipelines become faster and more cost-effective.

3️⃣ **Adherence to Best Practices**: This approach aligns with the **DRY (Don’t Repeat Yourself)** principle, reducing redundancy and ensuring consistency.

4️⃣ **Seamless Rollouts**: It allows for easy updates to environment-specific variables, ensuring smoother deployments across dev, staging, and production.

---

### **Conclusion**

Managing environment variables in a Dockerized React application is a common but critical task. While build-time injection works for simpler use cases, runtime injection offers the scalability, flexibility, and efficiency needed for modern CI/CD pipelines.

By leveraging the `env.sh` script, I streamlined the deployment process and ensured that the same Docker image could serve all environments dynamically.

What’s your preferred approach for handling environment variables in Dockerized apps? I’d love to hear your thoughts or alternative solutions!

#Docker #React #DevOps #CI/CD #WebDevelopment #SoftwareEngineering
