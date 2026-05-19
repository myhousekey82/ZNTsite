# Zero Net Thirty - React Website

This is the React conversion of the Zero Net Thirty website with **working email delivery** via Formspree.

## What Changed from the Original HTML

### 1. Contact Form with Email Delivery ✅
The original HTML had a non-functional contact form. The React version includes:
- **Formspree integration** - Submissions are automatically emailed to `wally.michalski16@gmail.com`
- Form validation
- State management for all inputs
- Success message feedback
- Disabled inputs during submission
- Form reset after successful submission
- No backend required

### 2. Component Structure
The site is now broken into reusable React components:
- `Header.js` - Navigation bar
- `Hero.js` - Hero section with pricing comparison
- `HowItWorks.js` - Platform overview
- `Approach.js` - Philosophy section
- `Pricing.js` - Pricing table
- `Results.js` - Impact metrics
- `Team.js` - Leadership bios
- `FAQ.js` - FAQ with accordion functionality
- `Contact.js` - Contact form with Formspree
- `Footer.js` - Footer links
- `PrivacyModal.js` - Privacy policy modal

### 3. Interactive Features
- FAQ accordion (click to expand/collapse)
- Privacy modal with overlay and keyboard shortcuts (ESC to close)
- Smooth scroll navigation
- Hover effects maintained
- Loading states on form submission

## Quick Start

### Development
```bash
npm install
npm start
```

Opens on http://localhost:3000

### Production Build
```bash
npm run build
```

Creates optimized static files in `build/` directory ready for deployment.

## 🎯 Contact Form Email Setup

The form is **already configured** to send emails to `wally.michalski16@gmail.com` using Formspree.

### Current Setup
- Form ID: `xovqqkoj`
- Emails go to: `wally.michalski16@gmail.com`
- No additional configuration needed

### How It Works
1. User fills out the contact form
2. Formspree processes the submission
3. Email is sent to your Gmail address with all form data
4. User sees success message
5. Form resets after 3 seconds

### If You Need to Change the Email Address

1. Create a free Formspree account at https://formspree.io
2. Create a new form and get your form ID
3. Update `src/components/Contact.js` line 5:
```javascript
const [state, handleSubmit] = useForm("YOUR_NEW_FORM_ID");
```

### Formspree Free Tier
- 50 submissions per month
- No credit card required
- Spam filtering included
- Email notifications

If you need more submissions, upgrade to Formspree's paid plan ($10/month for 1000 submissions).

## Deployment Options

### 1. Static Hosting (Easiest)
The `build/` folder contains static files. Deploy to:
- **Netlify**: Drag and drop the `build/` folder
- **Vercel**: Connect GitHub repo or upload build folder
- **GitHub Pages**: Push build folder to gh-pages branch
- **AWS S3**: Upload build folder as static website
- **Any web server**: Upload build folder contents

### 2. Custom Domain
Once deployed, point your custom domain DNS to the hosting provider.

## File Structure
```
zeronetthirty-site/
├── public/
│   ├── index.html          # HTML template with Google Fonts
│   └── favicon.ico
├── src/
│   ├── components/         # All React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── HowItWorks.js
│   │   ├── Approach.js
│   │   ├── Pricing.js
│   │   ├── Results.js
│   │   ├── Team.js
│   │   ├── FAQ.js
│   │   ├── Contact.js      # ⭐ Formspree integration here
│   │   ├── Footer.js
│   │   └── PrivacyModal.js
│   ├── App.js              # Main app component
│   ├── App.css             # All styles from original HTML
│   └── index.js            # React entry point
├── package.json
└── README.md
```

## Brand Assets Used
- Logo: `https://myhousekey82.github.io/ZNT-Votes/ZeroNetThirty-Voting.png`
- Fonts: DM Serif Display, DM Sans
- Colors:
  - Blue: #1942B8
  - Green: #35D42A

## Next Steps
1. Extract the archive: `tar -xzf zeronetthirty-react.tar.gz`
2. Install dependencies: `cd zeronetthirty-site && npm install`
3. Test the form: `npm start` and submit the contact form
4. Check your email at `wally.michalski16@gmail.com`
5. Build for production: `npm run build`
6. Deploy the `build/` folder

## Testing the Contact Form

1. Run `npm start`
2. Navigate to the Contact section
3. Fill out the form
4. Click "Request a conversation →"
5. Button will show "Sending..."
6. Success message appears
7. Check `wally.michalski16@gmail.com` for the email

The form will include:
- Name (first + last)
- Company name
- Email address
- Phone number
- Service area
- Number of communities managed
- Optional message

## Support
For questions about the React conversion or deployment:
- React documentation: https://react.dev
- Create React App docs: https://create-react-app.dev
- Formspree docs: https://help.formspree.io
