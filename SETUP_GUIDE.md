# Zero Net Thirty - Quick Setup Guide

## ✅ Email Delivery is Already Configured

Your contact form is **ready to use** and will send emails to:
**wally.michalski16@gmail.com**

No additional setup needed!

## How to Deploy in 5 Minutes

### Step 1: Extract the Files
```bash
tar -xzf zeronetthirty-react-v2.tar.gz
cd zeronetthirty-site
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Test Locally (Optional)
```bash
npm start
```
Visit http://localhost:3000 and test the contact form.

### Step 4: Build for Production
```bash
npm run build
```

### Step 5: Deploy
The `build/` folder now contains your complete website. Upload it to:

**Netlify (Easiest):**
1. Go to https://app.netlify.com/drop
2. Drag the `build/` folder onto the page
3. Done! Your site is live.

**Vercel:**
1. Go to https://vercel.com/new
2. Import the project or upload the `build/` folder
3. Deploy!

**GitHub Pages:**
```bash
npm install -g gh-pages
gh-pages -d build
```

## Testing the Contact Form

1. Fill out the form on your deployed site
2. Click "Request a conversation →"
3. Wait for "Sending..." → "Thank you!" message
4. Check your Gmail: wally.michalski16@gmail.com

**Email will include:**
- First name + Last name
- Company name
- Email address
- Phone number
- Service area
- Number of communities managed
- Optional message

## Formspree Details

- **Free tier**: 50 submissions/month
- **Spam filtering**: Included
- **Email notifications**: Automatic
- **Current form ID**: xovqqkoj

Need more submissions? Upgrade at https://formspree.io/plans ($10/month for 1000 submissions)

## Troubleshooting

**Form not sending?**
- Check your internet connection
- Verify email in Contact.js (line 5)
- Check Formspree dashboard: https://formspree.io/forms/xovqqkoj/integration

**Want to change the recipient email?**
1. Create free account at https://formspree.io
2. Create a new form
3. Get your new form ID
4. Update `src/components/Contact.js` line 5:
   ```javascript
   const [state, handleSubmit] = useForm("YOUR_NEW_FORM_ID");
   ```

## Need Help?

- React docs: https://react.dev
- Formspree docs: https://help.formspree.io
- Netlify docs: https://docs.netlify.com
