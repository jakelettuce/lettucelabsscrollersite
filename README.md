# Scroll-Controlled Video Animation

A simple web page that controls video playback based on the user's scroll position. As the user scrolls down the page, the video scrubs through accordingly.

## Features

- Fullscreen background video
- Scroll position controls video playback time
- Pure HTML, CSS, and JavaScript implementation (no frameworks)
- Responsive design

## Project Structure

- `public/index.html` - The main HTML file
- `public/video.mp4` - The video file (you need to provide this)
- `src/style.css` - CSS styling for the page
- `src/script.js` - JavaScript for scroll-based video control

## Setup

1. Clone this repository
2. Place your video file named `video.mp4` in the `public/` directory
3. Open `public/index.html` in a web browser to test locally

## Deploying to GitHub Pages

To deploy this project on GitHub Pages:

1. Push your code to a GitHub repository
2. Go to your repository settings on GitHub
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you want to deploy (e.g., `main`)
5. For "folder", select `/public` 
6. Click "Save"

GitHub Pages will now serve your site from the `/public` folder. After a few minutes, your site will be live at `https://[your-username].github.io/[repository-name]/`.

## Customization

- Replace `video.mp4` with your own video file (keep the same name or update the source in HTML)
- Adjust the scroll sensitivity and spacing in the CSS and JavaScript files
- Modify the styling as needed to match your design preferences 