# Docker Environment Variables Setup Guide

This guide explains how environment variables are handled in the Docker setup for the Dr. Alsaigh website.

## Environment Variables Flow

```
.env file → docker-compose.yml → Dockerfile → Next.js App
```

## Current Environment Variables

Your `.env` file contains:

```bash
NEXT_PUBLIC_BASE_URL=https://backend.aalsaigh.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_f758pie
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyaw0z4
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=K-f3EuHMXlAlkK7n9
```

## How It Works

### 1. Build Time (Dockerfile)

Environment variables are passed as **build arguments** and set as **environment variables** during the build:

```dockerfile
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=${NEXT_PUBLIC_EMAILJS_SERVICE_ID}
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=${NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}
ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=${NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}
```

### 2. Runtime (docker-compose.yml)

The `docker-compose.yml` file:
- Loads variables from `.env` file using `env_file`
- Passes them as build args
- Sets them as runtime environment variables

```yaml
env_file:
  - .env
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
  - NEXT_PUBLIC_EMAILJS_SERVICE_ID=${NEXT_PUBLIC_EMAILJS_SERVICE_ID}
  - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=${NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}
  - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=${NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}
```

### 3. Entrypoint Script

The `docker-entrypoint.sh` creates a `.env` file inside the container from all environment variables:

```bash
#!/bin/sh
# Create .env file from environment variables

# Create .env file
> .env

# Write all environment variables to .env
env | grep -v '^_' | while IFS='=' read -r key value; do
  if [ -n "$key" ] && [ -n "$value" ]; then
    echo "${key}=${value}" >> .env
  fi
done

# Execute the main command
exec "$@"
```

## Building and Running

### Option 1: Using .env File (Recommended)

1. Make sure your `.env` file exists with all variables
2. Run:
   ```bash
   docker compose up --build
   ```

Docker Compose will automatically load variables from `.env`

### Option 2: Inline Environment Variables

You can override variables when running:

```bash
NEXT_PUBLIC_BASE_URL=https://api.example.com docker compose up --build
```

### Option 3: Using .env.production

For production deployments, you can create a `.env.production` file:

```bash
docker compose --env-file .env.production up --build
```

## Verifying Environment Variables

### Check Build Args

During build, you'll see:
```
[builder 3/5] ARG NEXT_PUBLIC_BASE_URL
[builder 4/5] ENV NEXT_PUBLIC_BASE_URL=https://backend.aalsaigh.com
```

### Check Runtime Variables

After container starts, check environment variables:

```bash
docker compose exec web env | grep NEXT_PUBLIC
```

Should output:
```
NEXT_PUBLIC_BASE_URL=https://backend.aalsaigh.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_f758pie
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyaw0z4
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=K-f3EuHMXlAlkK7n9
```

### Check .env File Inside Container

```bash
docker compose exec web cat .env
```

## Important Notes

### ⚠️ NEXT_PUBLIC_* Variables

Variables prefixed with `NEXT_PUBLIC_` are:
- **Embedded in the JavaScript bundle** during build
- **Visible in the browser** (client-side)
- **Cannot be changed** after build without rebuilding

### 🔒 Security

- ✅ EmailJS Public Key is safe to expose (it's meant for client-side use)
- ✅ The `.env` file is in `.gitignore` (not committed to Git)
- ❌ Never put sensitive API keys in `NEXT_PUBLIC_*` variables
- ❌ Never commit `.env` to version control

### 📝 .env File Format

**Correct:**
```bash
NEXT_PUBLIC_BASE_URL=https://backend.aalsaigh.com
```

**Incorrect:**
```bash
NEXT_PUBLIC_BASE_URL = https://backend.aalsaigh.com  # Spaces cause issues
NEXT_PUBLIC_BASE_URL="https://backend.aalsaigh.com"  # Quotes not needed
```

## Troubleshooting

### Issue: Variables are undefined in the app

**Solution:**
1. Rebuild the Docker image:
   ```bash
   docker compose up --build
   ```
2. Check if variables are set:
   ```bash
   docker compose exec web env | grep NEXT_PUBLIC
   ```

### Issue: Changes to .env not reflected

**Solution:**
You must rebuild the image because `NEXT_PUBLIC_*` variables are embedded during build:
```bash
docker compose down
docker compose up --build
```

### Issue: Variables work locally but not in Docker

**Solution:**
1. Ensure `.env` file is not in `.dockerignore`
2. Check `docker-compose.yml` has `env_file: - .env`
3. Verify Dockerfile has ARG and ENV declarations

### Issue: "EmailJS configuration is missing"

**Solution:**
1. Check `.env` file exists and has all EmailJS variables
2. Rebuild the Docker image
3. Verify variables in container:
   ```bash
   docker compose exec web env | grep EMAILJS
   ```

## Adding New Environment Variables

To add a new environment variable:

1. **Add to `.env` file:**
   ```bash
   NEXT_PUBLIC_NEW_VAR=value
   ```

2. **Add to `docker-compose.yml`:**
   ```yaml
   build:
     args:
       - NEXT_PUBLIC_NEW_VAR=${NEXT_PUBLIC_NEW_VAR}
   environment:
     - NEXT_PUBLIC_NEW_VAR=${NEXT_PUBLIC_NEW_VAR}
   ```

3. **Add to `Dockerfile`:**
   ```dockerfile
   ARG NEXT_PUBLIC_NEW_VAR
   ENV NEXT_PUBLIC_NEW_VAR=${NEXT_PUBLIC_NEW_VAR}
   ```

4. **Rebuild:**
   ```bash
   docker compose up --build
   ```

## Production Deployment

For production on Portainer:

1. **Create `.env` file on the server** with production values
2. **Upload via Portainer:**
   - Go to Stacks → Your Stack → Editor
   - Add environment variables in the "Environment variables" section
3. **Or use Portainer secrets** for sensitive data

## Summary

✅ `.env` file is loaded by docker-compose
✅ Variables are passed as build args to Dockerfile
✅ Variables are set as environment variables at runtime
✅ Entrypoint script creates `.env` inside container
✅ Next.js app can access all `NEXT_PUBLIC_*` variables

Your Docker setup is now fully configured to handle environment variables! 🎉
