# Zero Net Thirty - HTML Site Deployment Guide

## ✅ What's Been Added

Your `website.html` file now has a **working contact form** powered by Formspree that sends emails directly to `wally.michalski16@gmail.com`.

### Form Features:
- ✅ All fields have proper names and validation
- ✅ Required fields: First name, Last name, Company, Email, Phone
- ✅ Shows "Sending..." during submission
- ✅ Success message appears after submission
- ✅ Form resets automatically
- ✅ Error handling if something goes wrong
- ✅ Emails include all form data

---

## Quick Deployment to Cloudflare Pages

### Option 1: Direct Upload (Fastest - 2 Minutes)

1. **Go to Cloudflare Pages**  
   https://dash.cloudflare.com/ → Workers & Pages → Create application → Pages

2. **Choose "Upload assets"**

3. **Drag and drop your `website.html` file**  
   (You can also upload the logo image if you have it locally)

4. **Name your project**  
   Example: `zero-net-thirty`

5. **Deploy**  
   Your site will be live at: `https://zero-net-thirty.pages.dev`

---

### Option 2: Deploy from GitHub (Recommended)

#### Step 1: Update GitHub with the New File

**Replace the old file:**

1. Go to: https://github.com/myhousekey82/ZNTsite
2. Delete the old `website.html` (if there is one)
3. Click "Add file" → "Upload files"
4. Drag in your new `website.html`
5. Commit with message: "Add working contact form with Formspree"

#### Step 2: Connect to Cloudflare Pages

1. **Go to Cloudflare Pages**  
   https://dash.cloudflare.com/ → Workers & Pages → Create application → Pages

2. **Connect to Git**  
   - Click "Connect to Git"
   - Select GitHub
   - Choose the `ZNTsite` repository

3. **Configure Build Settings**  
   - **Project name**: `zero-net-thirty`
   - **Branch**: `main`
   - **Build command**: Leave blank (it's just HTML)
   - **Build output directory**: `/`

4. **Save and Deploy**

Your site will be live in ~1 minute at: `https://zero-net-thirty.pages.dev`

---

## Testing the Contact Form

1. Open your deployed site
2. Scroll to "Get in touch"
3. Fill out the form with test data
4. Click "Request a conversation →"
5. You should see:
   - Button changes to "Sending..."
   - Green success message appears
   - Form resets
6. Check your email: `wally.michalski16@gmail.com`

---

## Adding a Custom Domain

Once your site is deployed on Cloudflare Pages:

1. Go to your project in Cloudflare Pages
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `zeronetthirty.com`)
5. Follow the DNS instructions

Cloudflare provides free SSL certificates automatically.

---

## Formspree Details

- **Form ID**: xovqqkoj
- **Free tier**: 50 submissions/month
- **Spam filtering**: Included
- **Email recipient**: wally.michalski16@gmail.com

### If You Need More Submissions

Upgrade at https://formspree.io/plans  
$10/month = 1,000 submissions

### To Change Email Address

1. Create account at https://formspree.io
2. Create new form
3. Get your new form ID
4. In `website.html`, find line with `action="https://formspree.io/f/xovqqkoj"`
5. Replace `xovqqkoj` with your new form ID

---

## Troubleshooting

**Form not sending?**
- Check browser console for errors (F12 → Console tab)
- Verify you're online
- Try in incognito mode

**Not receiving emails?**
- Check spam folder
- Verify wally.michalski16@gmail.com is correct
- Check Formspree dashboard: https://formspree.io/forms/xovqqkoj

**Site not loading after deploy?**
- Wait 2-3 minutes for DNS propagation
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Check Cloudflare Pages deployment logs

---

## File Structure

Your HTML file is completely self-contained:
- All CSS is in the `<style>` tags
- All JavaScript is in the `<script>` tags
- No external dependencies (except Google Fonts and Formspree)
- Logo loads from: `https://myhousekey82.github.io/ZNT-Votes/ZeroNetThirty-Voting.png`

**Total file size**: ~50KB

---

## Next Steps

1. ✅ Deploy to Cloudflare Pages (2 minutes)
2. ✅ Test the contact form
3. ✅ Add custom domain (optional)
4. ✅ Share the link with Paul

That's it! Your site is production-ready.
