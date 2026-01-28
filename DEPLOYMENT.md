# Deployment Guide - mike-dimaria.com

This guide walks you through deploying your portfolio site to Cloudflare Pages and connecting your domain.

## 🚀 Deployment Steps

### Option 1: Cloudflare Pages (Recommended - You're already using Cloudflare!)

Since your domain is already on Cloudflare, Cloudflare Pages is the most seamless option.

#### Step 1: Connect GitHub Repository to Cloudflare Pages

1. **Log into Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Navigate to **Workers & Pages** → **Pages**

2. **Create a New Project**
   - Click **"Create a project"**
   - Select **"Connect to Git"**
   - Authorize Cloudflare to access your GitHub account
   - Select repository: `mikedimaria-cmd/Mike-UXR-Website-Project`

3. **Configure Build Settings**
   - **Framework preset**: `Vite` (or leave as "None")
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave as default)
   - **Node version**: `18` or `20`

4. **Deploy**
   - Click **"Save and Deploy"**
   - Cloudflare will build and deploy your site
   - You'll get a URL like: `https://mike-uxr-website-project.pages.dev`

#### Step 2: Configure Custom Domain in Cloudflare Pages

1. **In Cloudflare Pages Project**
   - Go to your project → **Custom domains** tab
   - Click **"Set up a custom domain"**
   - Enter: `www.mike-dimaria.com`
   - Cloudflare will automatically configure DNS

2. **Verify DNS Records**
   - Go to **DNS** → **Records** in Cloudflare
   - You should see a `CNAME` record:
     - **Name**: `www`
     - **Target**: `mike-uxr-website-project.pages.dev` (or similar)
     - **Proxy status**: Proxied (orange cloud)

#### Step 3: Handle Root Domain (mike-dimaria.com)

If you want the root domain (without www) to work:

1. **In Cloudflare Pages**
   - Add another custom domain: `mike-dimaria.com`
   - Cloudflare will create the necessary DNS records

2. **DNS Records Should Include:**
   - `www` → CNAME → `[your-pages-url].pages.dev` (Proxied)
   - `@` → CNAME → `[your-pages-url].pages.dev` (Proxied)
   - OR `@` → A record → Cloudflare Pages IP (if CNAME not supported)

### Option 2: Vercel (Alternative)

If you prefer Vercel:

1. **Go to https://vercel.com**
2. **Import Git Repository**
   - Connect GitHub account
   - Import `mikedimaria-cmd/Mike-UXR-Website-Project`
3. **Configure**
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Add Domain**
   - Project Settings → Domains
   - Add `www.mike-dimaria.com`
5. **Update Cloudflare DNS**
   - Change CNAME for `www` to point to Vercel's URL
   - Example: `www` → CNAME → `cname.vercel-dns.com`

### Option 3: Netlify (Alternative)

1. **Go to https://netlify.com**
2. **Import from Git**
3. **Build settings**: Same as above
4. **Add custom domain**: `www.mike-dimaria.com`
5. **Update Cloudflare DNS** to point to Netlify

## 🔧 Cloudflare DNS Configuration

### Current Setup (Before Change)

Your domain likely has DNS records pointing to your old project. You'll need to update:

### New Setup (After Deployment)

**For Cloudflare Pages:**
- Cloudflare will auto-configure DNS when you add the custom domain
- No manual DNS changes needed!

**For Other Hosting (Vercel/Netlify):**
1. Go to Cloudflare Dashboard → **DNS** → **Records**
2. Find the `www` CNAME record
3. Update the **Target** to your new hosting provider's URL
4. Keep **Proxy status**: Proxied (orange cloud) ✅

### DNS Records Reference

```
Type    Name    Content                          Proxy
CNAME   www     [your-pages-url].pages.dev       ✅ Proxied
CNAME   @       [your-pages-url].pages.dev       ✅ Proxied (or A record)
```

## ⚠️ Important Notes

### Switching from Old Project

1. **Backup Current Setup**
   - Note down current DNS records
   - Take screenshots of current configuration

2. **Test New Deployment**
   - Verify the Cloudflare Pages deployment works
   - Test all routes and functionality

3. **Update DNS**
   - Only after confirming new site works
   - DNS changes can take a few minutes to propagate

4. **SSL/TLS**
   - Cloudflare automatically provides SSL certificates
   - Ensure SSL/TLS encryption mode is set to **"Full"** or **"Full (strict)"**

### SPA Routing (React Router)

The `public/_redirects` file ensures React Router works correctly. Cloudflare Pages handles this automatically, but the file is there as a backup.

## 🧪 Testing After Deployment

1. **Check Site Loads**: Visit `https://www.mike-dimaria.com`
2. **Test Navigation**: Click through all sections
3. **Test Mobile**: Verify responsive design works
4. **Check Console**: No JavaScript errors
5. **Test 404**: Visit a non-existent route, should show NotFound page

## 🔄 Continuous Deployment

Once set up:
- **Automatic Deploys**: Every push to `main` branch auto-deploys
- **Preview Deploys**: Pull requests get preview URLs
- **Manual Deploys**: Can trigger from Cloudflare dashboard

## 📞 Troubleshooting

### Site Not Loading
- Check DNS propagation: https://www.whatsmydns.net
- Verify DNS records in Cloudflare
- Check Cloudflare Pages deployment status

### SSL Certificate Issues
- Cloudflare → SSL/TLS → Ensure "Full" or "Full (strict)"
- Wait 5-10 minutes for certificate provisioning

### Routes Not Working (404s)
- Verify `_redirects` file exists in `public/` folder
- Check Cloudflare Pages redirect rules
- Ensure React Router is configured correctly

### Build Failures
- Check build logs in Cloudflare Pages
- Verify Node version matches (18+)
- Ensure all dependencies are in `package.json`

## 📝 Next Steps After Deployment

1. ✅ Update README.md with live site URL
2. ✅ Test all functionality on live site
3. ✅ Set up monitoring/analytics (optional)
4. ✅ Configure custom 404 page (if needed)
5. ✅ Set up email forwarding (if using contact form)

---

**Need Help?** Check Cloudflare Pages docs: https://developers.cloudflare.com/pages/
