# SAMJD Technologies Website

A professional portfolio website showcasing SAMJD Technologies' services, expertise, projects, and business card.

## Overview

This single-page website serves as an online presence for SAMJD Technologies, highlighting the company's expertise in Java development, AI solutions, and Blockchain knowledge. The site features a clean, modern design with a responsive layout suitable for all devices.

## Features

- **Responsive Design:** Fully responsive layout that works on mobile, tablet, and desktop devices
- **Interactive Business Card:** Interactive flip card that displays company information
- **Project Portfolio:** Showcase of past and current projects with detailed descriptions
- **Service Offerings:** Clear presentation of core services and expertise
- **Modern UI:** Gradient color scheme, subtle animations, and professional typography

## File Structure

- `index.html` - Main HTML document with the website's structure and content
- `styles.css` - CSS styling for the entire website
- `script.js` - JavaScript for interactive elements (project filtering, card flipping, etc.)
- `favicon.svg` - Vector-based favicon for the website

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript
- SVG graphics for logo and icons
- Google Fonts (Montserrat and Roboto)
- Schema.org structured data for SEO

## Getting Started

### Local Development

1. Clone or download the repository
2. Navigate to the website directory
3. Open `index.html` in your browser to view the site

For development with live reload:
```bash
# Using Python's built-in HTTP server
python3 -m http.server 8000

# Then visit http://localhost:8000 in your browser
```

## Customization Guide

### Changing Contact Information

Update the contact information in:
- The JSON-LD structured data in the `<head>` section
- The interactive business card SVG in the Business Card section

### Adding New Projects

To add a new project:
1. Locate the `<div class="project-cards">` section in `index.html`
2. Copy an existing project card structure
3. Update the content with the new project's details
4. For hidden projects (revealed with "Show More"), add the `hidden-project` class

### Modifying the Color Scheme

The website uses a gradient color scheme defined in several places:
- Main CSS variables at the top of `styles.css`
- SVG gradient definitions in the logo and business card
- Background gradients in various sections

To change the color scheme, update these gradient definitions to maintain consistency.

### Updating SEO Information

For better search engine visibility, update:
- The meta tags in the `<head>` section
- The JSON-LD structured data that defines the business, services, and projects

## Deployment

This website can be deployed to any static hosting service:

1. GitHub Pages
2. Netlify
3. Vercel
4. AWS S3
5. Any traditional web hosting provider

## Best Practices Used

- Semantic HTML for better accessibility
- Responsive design principles for all device sizes
- Performance optimization (minimal dependencies, optimized SVGs)
- SEO structured data with Schema.org
- Clean code organization and comments
- Accessible color contrast ratios

## Browser Compatibility

The website has been tested and is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)
