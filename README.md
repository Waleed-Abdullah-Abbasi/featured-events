# Featured Events Website 🎉

A modern, responsive web application for discovering local events. Built as part of the Dynamics 360 Web Development Internship case study.

![Featured Events](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Features

### Required Features ✓
- ✅ **Responsive Navigation Bar** - Logo and links to Home, Events, and Contact with smooth animations
- ✅ **Hero Section** - Eye-catching heading "Discover Events Near You" with gradient background
- ✅ **Featured Events Section** - Displays 5 sample events in a clean grid layout
- ✅ **Event Cards** - Each card includes:
  - Event name
  - Date and time with icons
  - Location with icon
  - Short description
  - Category badge
  - Price
  - Register button
- ✅ **Fully Responsive Design** - Optimized for mobile, tablet, and desktop

### Bonus Features ✓
- ✨ **Real-time Search** - Filter events by name, category, location, or description
- ✨ **Dynamic JSON Data** - Events loaded from JavaScript object (simulating API)
- ✨ **Additional Premium Features**:
  - Glassmorphism card effects with backdrop blur
  - Smooth scroll animations
  - Mobile-friendly hamburger menu
  - Hover interactions with scale transforms
  - Modern gradient background with floating animations
  - Debounced search for better performance
  - SEO-optimized with meta tags

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with:
  - CSS Custom Properties (variables)
  - Flexbox and Grid layouts
  - Glassmorphism effects
  - Smooth animations and transitions
  - Mobile-first responsive design
- **Vanilla JavaScript** - No frameworks or libraries:
  - Dynamic DOM manipulation
  - Event handling
  - Search/filter functionality
  - Debouncing for performance
- **Google Fonts** - Inter font family for modern typography
- **Unsplash** - High-quality event images

## 🚀 How to Run

### Option 1: Direct File Opening
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. That's it! No build process or dependencies required

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
featured-events/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete styling with design system
├── script.js           # JavaScript for interactivity
└── README.md           # Documentation (this file)
```

## 🎨 Design Highlights

- **Dark Theme** - Modern dark color scheme with vibrant accents
- **Glassmorphism** - Frosted glass effect on cards and navigation
- **Smooth Animations** - Fade-in effects, hover states, and transitions
- **Color Palette**:
  - Primary: Indigo (#6366f1)
  - Secondary: Purple (#8b5cf6)
  - Accent: Pink (#ec4899)
  - Background: Slate dark tones
- **Typography** - Inter font family for clean, modern text

## 📱 Responsive Breakpoints

- **Mobile**: < 480px - Single column layout
- **Tablet**: 481px - 768px - Two column grid
- **Desktop**: > 768px - Multi-column grid (auto-fill)

## 🔍 Search Functionality

The search bar allows users to filter events in real-time by:
- Event name
- Category
- Location
- Description

The search uses a debounced input handler (300ms) for optimal performance.

## 🎯 Browser Compatibility

Tested and working on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📦 Deployment

This project is ready for deployment on:
- **GitHub Pages** - Just push to a `gh-pages` branch
- **Netlify** - Drag and drop the folder
- **Vercel** - Import the repository
- **Any static hosting service**

### GitHub Pages Deployment Steps:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Waleed-Abdullah-Abbasi/featured-events
git push -u origin main
```

## 🔗 Live Preview

<!-- Add your live preview link here after deployment -->
**Live Demo**: [[link here](https://waleed-abdullah-abbasi.github.io/featured-events/)]

## 👨‍💻 Developer

Built by Waleed Abdullah for Dynamics 360 Web Development Internship

## 📝 License

This project is created for educational purposes as part of an internship case study.

---

**Note**: This is a demo project. The "Register" buttons show an alert message and don't perform actual registration functionality.
