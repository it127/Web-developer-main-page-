// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const toggleIcon = document.getElementById('toggle-icon');

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
    toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
}

// Theme Switch Event
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        toggleIcon.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Tab Switching for Code Examples
const tabButtons = document.querySelectorAll('.tab-btn');
const codeExamples = document.querySelectorAll('.code-example');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        // Hide all code examples
        codeExamples.forEach(example => {
            example.style.display = 'none';
        });

        // Show selected example
        const tabId = button.getAttribute('data-tab');
        document.getElementById(`${tabId}-example`).style.display = 'block';
    });
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });

    // Clear form fields
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('textarea').value = '';

    // Show success message
    alert('Thank you for your message!');
});

// Course Content Handling
const enrollButtons = document.querySelectorAll('.enroll-btn');
const courseContentSection = document.getElementById('course-content');
const courseDetails = document.querySelectorAll('.course-details');

enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseId = button.getAttribute('data-course');

        // Hide all course details
        courseDetails.forEach(detail => {
            detail.style.display = 'none';
        });

        // Show selected course detail
        document.getElementById(courseId).style.display = 'block';

        // Show course content section
        courseContentSection.style.display = 'block';
    });
});

const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hide course content section
        courseContentSection.style.display = 'none';
    });
});

// Start Course Handling
const startCourseButtons = document.querySelectorAll('.start-course-btn');

startCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const course = button.getAttribute('data-course');
        alert(`Starting ${course} course...`);
        // You can replace the alert with actual page navigation or content loading
        // For example: window.location.href = `/${course}-course.html`;
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.course-card, .hero-image, .contact-form');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animations
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.course-card, .hero-image, .contact-form').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Throttle scroll event to improve performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(animateOnScroll, 100);
});
