
# Abanoub Abdelnour - DevOps Portfolio

A modern, responsive portfolio website showcasing Cloud DevOps skills and experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with modern UI/UX
- **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth scrolling, animations, and modal dialogs
- **Contact Form**: PHP-powered contact form with validation
- **Project Showcase**: Detailed project information with modal previews
- **Skills Visualization**: Animated progress bars showing skill proficiency levels
- **Certifications Display**: Professional certifications section

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Backend**: PHP (for contact form)
- **Icons**: Font Awesome 6
- **Images**: Unsplash (high-quality project images)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main portfolio page
├── style.css           # Custom styles with modern design
├── script.js           # JavaScript functionality
├── contact.php         # Contact form handler
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- Web server with PHP support (Apache, Nginx, or local development server)
- Modern web browser
- PHP mail() function enabled (for contact form)

### Installation

1. **Clone or download** the project files to your web server directory

2. **Configure contact form**:
   - The email address is already set to `abanoub_nour@live.com` in `contact.php`
   - You can modify line 31 in `contact.php` to change the recipient email

3. **Start your web server**:
   - For XAMPP/WAMP: Place files in `htdocs` folder
   - For live server: Upload files to your hosting directory

4. **Open in browser**:
   ```
   http://localhost/portfolio/
   ```

## ✨ Features Overview

### Modern Design Elements
- **DevOps Color Scheme**: Professional blue color palette
- **Animated Skill Bars**: Progress bars that animate on scroll
- **Card Hover Effects**: Interactive cards with smooth transitions
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling
- **Hero Section**: Eye-catching hero with animated background pattern

### Interactive Components
- **Project Modals**: Detailed project information in Bootstrap modals
- **Contact Form**: Fully functional PHP contact form with validation
- **Smooth Scrolling**: Seamless navigation between sections
- **Scroll Animations**: Elements fade in as they come into view

### Content Sections
1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Professional background and core competencies
3. **Skills**: Technical skills organized by category with progress bars
4. **Projects**: Featured projects with detailed modals
5. **Certifications**: Professional certifications display
6. **Contact**: Contact form and social media links

## 📧 Contact Form Setup

The contact form uses PHP to send emails. Features include:
- Client-side validation
- Server-side validation and sanitization
- Email sending with proper headers
- Contact logging (optional)
- AJAX submission with user feedback

### Email Configuration
Update the recipient email in `contact.php`:
```php
$to = 'your-email@example.com'; // Replace with your email
```

## 🎨 Customization

### Colors
The DevOps color scheme is defined in CSS custom properties:
```css
:root {
    --devops-600: #0283c6;
    --devops-700: #0369a0;
    /* ... other color variants */
}
```

### Content
- Update personal information in `index.html`
- Modify project data in `script.js`
- Replace project images with your own
- Update skills and proficiency levels

### Skills
Update the skills section in `index.html`:
- Add or remove skill categories
- Modify skill names and levels
- Adjust progress bar animations

## 📱 Responsive Design

Fully responsive design tested on:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (limited support)

## 📋 Performance Features

- **Optimized Images**: Efficient image loading from Unsplash
- **Minimal Dependencies**: Only Bootstrap and Font Awesome
- **Smooth Animations**: CSS transitions and transforms
- **Lazy Loading**: Intersection Observer for scroll animations

## 🔧 Development

For local development:
1. Use a local server (XAMPP, WAMP, or `php -S localhost:8000`)
2. Enable PHP mail() function for contact form testing
3. Test on multiple devices and browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

**Abanoub Abdelnour**
- Email: abanoub_nour@live.com
- LinkedIn: [linkedin.com/in/abanoub-abdelnour](https://www.linkedin.com/in/abanoub-abdelnour)
- GitHub: [github.com/abanoub-n](https://github.com/abanoub-n)
- Credly: [credly.com/users/abanoub-abdelnour](https://www.credly.com/users/abanoub-abdelnour)

---

Built with ❤️ using HTML, CSS, JavaScript, PHP, and Bootstrap 5
```
