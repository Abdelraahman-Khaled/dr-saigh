# API Fetch Debugging Guide

## Current Issue: "fetch failed"

This error typically occurs when the fetch request cannot complete. Here are the common causes and solutions:

## 1. Check if Backend is Accessible

### Test from Command Line:
```bash
# Test if the API is reachable
curl https://backend.aalsaigh.com/blogs_landing

# Or with PowerShell
Invoke-WebRequest -Uri "https://backend.aalsaigh.com/blogs_landing"
```

**Expected:** You should see JSON data
**If it fails:** The backend is down or unreachable

## 2. CORS Issues

If the API works in curl but fails in the browser, it's likely a CORS issue.

### Symptoms:
- Works in development (`npm run dev`)
- Fails in production/Docker
- Browser console shows CORS error

### Solution:
The backend needs to add CORS headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

Contact your backend developer to add these headers.

## 3. SSL Certificate Issues

### Check Certificate:
```bash
# Test SSL certificate
curl -v https://backend.aalsaigh.com/blogs_landing
```

### Symptoms:
- "SSL certificate problem"
- "certificate verify failed"

### Temporary Solution (Development Only):
In `api/blog.js`, you can add (NOT for production):
```javascript
const res = await fetch(`${API}/blogs_landing`, {
    next: { revalidate: 60 },
    // ONLY FOR DEVELOPMENT - REMOVE IN PRODUCTION
    ...(process.env.NODE_ENV === 'development' && {
        agent: new https.Agent({ rejectUnauthorized: false })
    })
});
```

## 4. Network/Firewall Issues

### Check if Docker can reach the API:
```bash
# From inside Docker container
docker compose exec web sh
wget -O- https://backend.aalsaigh.com/blogs_landing
```

### Symptoms:
- Works on host machine
- Fails in Docker container

### Solution:
Check Docker network settings or use host network mode in `docker-compose.yml`:
```yaml
services:
  web:
    network_mode: "host"
```

## 5. DNS Resolution Issues

### Test DNS:
```bash
# Check if domain resolves
nslookup backend.aalsaigh.com

# Or
ping backend.aalsaigh.com
```

### Symptoms:
- "getaddrinfo ENOTFOUND"
- "DNS resolution failed"

### Solution:
- Check if domain is correctly configured
- Try using IP address instead of domain (temporary)

## 6. Backend is Down

### Check Backend Status:
```bash
# Simple availability check
curl -I https://backend.aalsaigh.com
```

**Expected:** `HTTP/2 200` or similar
**If fails:** Backend server is down

### Solution:
- Contact backend administrator
- Check server logs
- Verify backend service is running

## 7. Timeout Issues

### Symptoms:
- Request takes too long
- Eventually fails with timeout

### Solution:
Add timeout to fetch:
```javascript
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds

try {
    const res = await fetch(`${API}/blogs_landing`, {
        signal: controller.signal,
        next: { revalidate: 60 },
    });
    clearTimeout(timeoutId);
} catch (error) {
    if (error.name === 'AbortError') {
        console.error('Request timeout');
    }
}
```

## Quick Diagnostic Steps

### Step 1: Test API Directly
Open browser and go to:
```
https://backend.aalsaigh.com/blogs_landing
```

- ✅ **Shows JSON**: API is working, likely CORS issue
- ❌ **Error/Timeout**: Backend issue

### Step 2: Check Browser Console
Press F12 and look for:
- CORS errors
- Network errors
- SSL errors

### Step 3: Check Network Tab
1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Look for the API request
5. Check:
   - Status code
   - Response
   - Headers

### Step 4: Test from Server
```bash
# SSH into your server or use Docker
docker compose exec web sh

# Test from inside container
wget -O- https://backend.aalsaigh.com/blogs_landing
```

## Common Solutions

### Solution 1: Add Error Logging
I've already added this to `BlogGrid.jsx`. Check your console/logs for detailed error messages.

### Solution 2: Use Fallback/Mock Data
For development, you can use mock data:
```javascript
export const getBlogs = async () => {
    try {
        const res = await fetch(`${API}/blogs_landing`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) throw new Error('Failed to fetch blogs');
        return res.json();
    } catch (error) {
        console.error('API Error, using fallback data:', error);
        // Return mock data for development
        return [];
    }
};
```

### Solution 3: Check Environment Variables
Make sure `NEXT_PUBLIC_BASE_URL` is set:
```bash
# In your terminal
echo $NEXT_PUBLIC_BASE_URL

# Or in Node.js
console.log(process.env.NEXT_PUBLIC_BASE_URL);
```

### Solution 4: Restart Everything
Sometimes a simple restart fixes issues:
```bash
# Stop everything
docker compose down

# Clear Next.js cache
rm -rf .next

# Rebuild and start
docker compose up --build
```

## Getting More Information

### Enable Verbose Logging
Add this to your API functions:
```javascript
console.log('API URL:', API);
console.log('Full URL:', `${API}/blogs_landing`);
console.log('Environment:', process.env.NODE_ENV);
```

### Check Response Details
```javascript
try {
    const res = await fetch(`${API}/blogs_landing`);
    console.log('Response status:', res.status);
    console.log('Response headers:', Object.fromEntries(res.headers));
    const text = await res.text();
    console.log('Response body:', text);
} catch (error) {
    console.error('Fetch error:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
}
```

## Next Steps

1. ✅ Check browser console for error details
2. ✅ Test API URL directly in browser
3. ✅ Verify backend is running and accessible
4. ✅ Check for CORS errors
5. ✅ Contact backend team if needed

The error handling I added to `BlogGrid.jsx` will now show you the exact error message, which will help identify the root cause.
