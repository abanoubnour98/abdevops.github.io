
// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Skill progress bar animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
});

// Project data and modal functionality
const projects = [
    {
        title: "Advanced Cloud DevOps Nanodegree Projects",
        description: "A comprehensive series of projects completed as part of the Udacity Advanced Cloud DevOps Nanodegree program, demonstrating expertise in cloud infrastructure, automation, and DevOps best practices.",
        technologies: ["AWS", "CloudFormation", "Kubernetes", "Docker", "Jenkins", "Prometheus", "ELK Stack", "Lambda", "S3", "Auto Scaling", "RDS"],
        details: `
            <p><strong>Project #1: Deploy Static Website on AWS</strong></p>
            <p>Hosted a static website on S3 with CloudFront and Route 53 for global delivery and SSL encryption. Implemented best practices for security and performance optimization.</p>
            
            <p><strong>Project #2: High-Availability Web App</strong></p>
            <p>Designed a highly available web application using CloudFormation to automate EC2, Auto Scaling Groups, and RDS provisioning with CloudWatch for comprehensive monitoring.</p>
            
            <p><strong>Project #3: Microservice Deployment</strong></p>
            <p>Implemented microservices architecture on Kubernetes with Docker containerization and Jenkins for CI/CD pipelines, using Prometheus and ELK Stack for monitoring and logging.</p>
            
            <p><strong>Project #4: Movie Picture Pipeline</strong></p>
            <p>Developed a serverless media processing solution with AWS Lambda and S3 for automated image analysis and metadata extraction, showcasing serverless architecture capabilities.</p>
            
            <p><strong>Key Achievements:</strong></p>
            <ul>
                <li>Implemented Infrastructure as Code (IaC) principles across all projects</li>
                <li>Achieved 99.9% uptime for deployed applications</li>
                <li>Reduced deployment time by 70% through automation</li>
                <li>Implemented comprehensive monitoring and alerting systems</li>
            </ul>
        `,
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=400&h=200&auto=format&fit=crop"
    },
    {
        title: "Seth – Unearthing the Curse",
        description: "A first-person shooter game with RPG elements developed as a graduation project, featuring immersive gameplay set in ancient Egyptian tombs with horror elements.",
        technologies: ["Unreal Engine 5", "Blender", "Audacity", "Blueprint Visual Scripting"],
        details: `
            <p><strong>Game Overview:</strong></p>
            <p>Seth is an ambitious first-person shooter (FPS) game with role-playing (RPG) elements, inspired by acclaimed titles such as System Shock, Prey 2017, and Half-Life. Set within the mysterious confines of an ancient Egyptian tomb, players navigate through intricate environments filled with combat, exploration, and puzzle-solving challenges.</p>
            
            <p><strong>Technical Implementation:</strong></p>
            <ul>
                <li><strong>Game Engine:</strong> Utilized Unreal Engine 5 for cutting-edge graphics and performance</li>
                <li><strong>3D Modeling:</strong> Created detailed environments and character designs using Blender</li>
                <li><strong>Programming:</strong> Implemented game mechanics using Blueprint Visual Scripting</li>
                <li><strong>Audio Design:</strong> Crafted immersive soundtracks and effects using Audacity</li>
            </ul>
            
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Combat systems with multiple weapon types and enemy AI</li>
                <li>Intricate puzzle mechanics that advance the narrative</li>
                <li>Atmospheric horror elements with dynamic lighting</li>
                <li>Rich storytelling set in ancient Egyptian mythology</li>
                <li>High-quality visuals with detailed texture work</li>
            </ul>
            
            <p><strong>Leadership & Collaboration:</strong></p>
            <p>As team leader, I coordinated between multiple disciplines including programming, art, and audio design, ensuring cohesive development and timely delivery of project milestones.</p>
        `,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&h=200&auto=format&fit=crop"
    },
    {
        title: "O6U Color Exchange",
        description: "A web-based application for image color analysis and hex code identification, built with Flask and featuring real-time color extraction and preview capabilities.",
        technologies: ["Flask", "Python", "Pillow", "HTML5", "CSS3", "JavaScript"],
        details: `
            <p><strong>Application Overview:</strong></p>
            <p>O6U Color Exchange is a sophisticated web application that allows users to upload images and automatically identify the dominant color, providing an accurate visual representation along with the corresponding hex code value.</p>
            
            <p><strong>Technical Architecture:</strong></p>
            <ul>
                <li><strong>Backend:</strong> Flask (Python web framework) for robust server-side processing</li>
                <li><strong>Image Processing:</strong> Pillow (Python Imaging Library) for advanced image analysis</li>
                <li><strong>Frontend:</strong> Responsive design using HTML5, CSS3, and JavaScript</li>
                <li><strong>Color Analysis:</strong> Advanced algorithms for dominant color extraction</li>
            </ul>
            
            <p><strong>Key Features:</strong></p>
            <ul>
                <li><strong>Feature 1:</strong> Upload image functionality with real-time preview and dominant color extraction in hex format</li>
                <li><strong>Feature 2:</strong> Local image storage system for processing and additional functions</li>
                <li><strong>Feature 3:</strong> Hex code input system with instant color preview generation</li>
                <li><strong>Feature 4:</strong> User-friendly interface with smooth interaction workflows</li>
            </ul>
            
            <p><strong>Technical Highlights:</strong></p>
            <ul>
                <li>Efficient image processing algorithms for accurate color detection</li>
                <li>Responsive web design ensuring cross-device compatibility</li>
                <li>Optimized file handling and storage management</li>
                <li>Real-time color preview and manipulation capabilities</li>
            </ul>
            
            <p><strong>User Experience:</strong></p>
            <p>The application provides an intuitive workflow for color analysis, making it valuable for designers, developers, and anyone working with digital color schemes.</p>
        `,
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=400&h=200&auto=format&fit=crop"
    }
];

// Show project modal
function showProjectModal(projectIndex) {
    const project = projects[projectIndex];
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    
    document.getElementById('projectModalTitle').textContent = project.title;
    document.getElementById('projectModalBody').innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="img-fluid rounded mb-3">
        <p class="lead">${project.description}</p>
        <div class="mb-3">
            <h6>Technologies Used:</h6>
            <div class="d-flex flex-wrap gap-2">
                ${project.technologies.map(tech => `<span class="badge bg-primary">${tech}</span>`).join('')}
            </div>
        </div>
        <div class="project-details">
            ${project.details}
        </div>
    `;
    
    modal.show();
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    try {
        console.log('Sending:', JSON.stringify(data)); // ✅ Outside of fetch()
        
        const response = await fetch('https://gamebuzz.us/contact-cv.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });


        const result = await response.json();

        if (response.ok) {
            alert('Message sent successfully! I will get back to you soon.');
            this.reset();
        } else {
            alert(`Error: ${result.error || 'Message failed to send.'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    }
});

// Add fade-in animation to sections when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
