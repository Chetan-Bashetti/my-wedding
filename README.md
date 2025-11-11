# 💑 Digital Wedding Invitation - Chetan & Neha

A beautiful, responsive digital wedding invitation website with an Indian theme, featuring countdown timer, photo slideshow, and venue map.

## 🎨 Features

- **Indian Theme Design** - Traditional elements with modern aesthetics
- **Color Scheme** - Coral, Black, and White
- **Mobile-First Responsive** - Works perfectly on all devices
- **Countdown Timer** - Real-time countdown to the wedding day
- **Photo Slideshow** - Automatic slideshow for pre-wedding photos
- **Google Maps Integration** - Embedded map for easy venue location
- **Beautiful Animations** - Smooth transitions and elegant effects
- **SEO Optimized** - Proper meta tags for social media sharing

## 📅 Wedding Details

- **Groom**: Chetan (BE CSE, Software Developer)
- **Bride**: Neha (BE EEE, Software Developer)
- **Engagement & Haldi**: November 25, 2025
- **Wedding**: November 26, 2025 at 12:15 PM
- **Venue**: Shubamastu Colony, Vijayapura, Karnataka

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd digital-weeding-invite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📸 Adding Your Own Photos

Replace the placeholder images in the `public/photos/` directory with your actual pre-wedding photos:

1. Add your photos (5 recommended) to `public/photos/`
2. Name them as: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. Supported formats: JPG, PNG, WebP
4. Recommended size: 1920x1080px or similar aspect ratio

## 🗺️ Updating the Venue Map

To update the Google Maps embed:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Update the `src` attribute in `src/App.js` (line ~234)

## 🎨 Customization

### Colors

The color scheme is defined in `src/App.css`:
```css
--coral: #FF6B6B;
--black: #1a1a1a;
--white: #ffffff;
```

### Content

All content can be modified in `src/App.js`:
- Names, education, and profession
- Event dates and times
- Venue address
- Welcome message
- Sanskrit shloka

## 📱 Sections

1. **Hero Section** - Main banner with couple names and date
2. **Welcome Message** - Invitation message with Sanskrit blessing
3. **Couple Section** - Details about bride and groom
4. **Photo Slideshow** - Pre-wedding photo gallery
5. **Countdown Timer** - Live countdown to the wedding
6. **Events Timeline** - Engagement, Haldi, and Wedding details
7. **Venue Section** - Address and embedded map
8. **Footer** - Closing message

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `build/` directory.

## 🌐 Deployment

You can deploy this website to:
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

### Quick Deploy to Netlify

1. Run `npm run build`
2. Go to [Netlify](https://www.netlify.com/)
3. Drag and drop the `build` folder
4. Your site is live!

## 📦 Technologies Used

- React 19.2.0
- Create React App
- CSS3 with animations
- Google Fonts (Lato, Great Vibes, Playfair Display)
- Google Maps Embed API

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is free to use for personal wedding invitations.

## 💖 About

Created with love for Chetan & Neha's special day.

---

**Note**: This is a template. Please replace all placeholder images and personal information with your actual details before sharing with guests.

## 🤝 Support

For any questions or issues, feel free to reach out.

---

Made with ❤️ using React
