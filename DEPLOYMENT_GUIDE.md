# Deployment Guide for www.thecachecode.com

## Option 1: Deploy as Static Site (Limited Functionality)

If you don't need the Claude API functionality, you can deploy as a static site:

1. Build the static export:
   ```bash
   cd cache-code
   npm run build
   ```

2. The static files will be in `cache-code/out/` directory

3. Upload to cPanel:
   - Log into your cPanel account
   - Navigate to File Manager
   - Go to your domain's public_html directory
   - Upload all contents from the `out/` folder

**Note:** The Claude API route (/api/claude) will not work with this method.

## Option 2: Deploy with Node.js Support (Full Functionality)

For full functionality including API routes:

### Prerequisites:
- Node.js application support in your cPanel hosting plan
- SSH access (optional but recommended)

### Steps:

1. **Prepare for deployment:**
   ```bash
   cd cache-code
   npm run build
   ```

2. **Create a startup file** `server.js` in the cache-code directory:
   ```javascript
   const { createServer } = require('http')
   const { parse } = require('url')
   const next = require('next')

   const dev = false
   const hostname = 'localhost'
   const port = process.env.PORT || 3000

   const app = next({ dev, hostname, port })
   const handle = app.getRequestHandler()

   app.prepare().then(() => {
     createServer(async (req, res) => {
       try {
         const parsedUrl = parse(req.url, true)
         await handle(req, res, parsedUrl)
       } catch (err) {
         console.error('Error occurred handling', req.url, err)
         res.statusCode = 500
         res.end('internal server error')
       }
     }).listen(port, (err) => {
       if (err) throw err
       console.log(`> Ready on http://${hostname}:${port}`)
     })
   })
   ```

3. **Update package.json** to include a start script:
   ```json
   "scripts": {
     "start": "NODE_ENV=production node server.js"
   }
   ```

4. **Upload to cPanel:**
   - Create a new Node.js application in cPanel
   - Set the application root to your domain directory
   - Set the application URL to your domain
   - Set the application startup file to `server.js`
   - Upload all files except `node_modules` and `.next/cache`

5. **In cPanel Node.js interface:**
   - Run NPM Install
   - Start the application

## Option 3: Using cPanel's Git Version Control

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. In cPanel, use "Git Version Control" to clone your repository
3. Set up a Node.js application pointing to the cloned directory
4. Run npm install and start the application

## Environment Variables

Don't forget to set up your environment variables in cPanel:
- `ANTHROPIC_API_KEY` (for Claude API)
- Any other API keys or secrets

## Domain Configuration

Make sure your domain is properly configured:
1. In cPanel, ensure www.thecachecode.com points to your application
2. Set up SSL certificate (Let's Encrypt is free in cPanel)
3. Configure any necessary redirects (e.g., non-www to www)

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify API routes work (if using Option 2)
- [ ] Check SSL certificate is active
- [ ] Test contact forms and other interactive features
- [ ] Monitor error logs in cPanel 