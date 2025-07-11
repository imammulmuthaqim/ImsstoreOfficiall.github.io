// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initMascots();
    initAudioToggle();
    initContactForm();
    initSmoothScrolling();
    loadProjects();
    loadTestimonials();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .testimonial-card, .contact-item, .about-content');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Interactive mascots
function initMascots() {
    const leftMascot = document.getElementById('leftMascot');
    const rightMascot = document.getElementById('rightMascot');

    if (leftMascot) {
        leftMascot.addEventListener('click', () => {
            playMascotAnimation(leftMascot);
            playClickSound();
        });
    }

    if (rightMascot) {
        rightMascot.addEventListener('click', () => {
            playMascotAnimation(rightMascot);
            playClickSound();
        });
    }
}

// Play mascot animation
function playMascotAnimation(mascot) {
    mascot.style.animation = 'none';
    mascot.offsetHeight; // Trigger reflow
    mascot.style.animation = 'float 0.5s ease-in-out, bounce 0.5s ease-in-out 0.5s';
    
    setTimeout(() => {
        mascot.style.animation = 'float 3s ease-in-out infinite';
    }, 1000);
}

// Play click sound effect
function playClickSound() {
    // Create a simple click sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Audio toggle functionality
function initAudioToggle() {
    const audioToggle = document.getElementById('audioToggle');
    const backgroundAudio = document.getElementById('backgroundAudio');
    let isPlaying = false;

    audioToggle.addEventListener('click', () => {
        if (isPlaying) {
            backgroundAudio.pause();
            audioToggle.innerHTML = '<span class="audio-icon">🔇</span>';
            isPlaying = false;
        } else {
            backgroundAudio.play().catch(e => {
                console.log('Audio play failed:', e);
            });
            audioToggle.innerHTML = '<span class="audio-icon">🔊</span>';
            isPlaying = true;
        }
    });

    // Handle audio end
    backgroundAudio.addEventListener('ended', () => {
        audioToggle.innerHTML = '<span class="audio-icon">🔇</span>';
        isPlaying = false;
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const buttonText = submitButton.querySelector('.button-text');
    const loadingSpinner = submitButton.querySelector('.loading-spinner');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        submitButton.disabled = true;
        buttonText.style.display = 'none';
        loadingSpinner.style.display = 'inline-block';

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            // Simulate form submission (replace with actual endpoint)
            await simulateFormSubmission(data);
            
            // Show success message
            showNotification('Pesan berhasil dikirim! Terima kasih telah menghubungi IMSSTORE.', 'success');
            contactForm.reset();
            
        } catch (error) {
            // Show error message
            showNotification('Terjadi kesalahan. Silakan coba lagi nanti.', 'error');
        } finally {
            // Reset button state
            submitButton.disabled = false;
            buttonText.style.display = 'inline-block';
            loadingSpinner.style.display = 'none';
        }
    });
}

// Simulate form submission
function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success (90% chance)
            if (Math.random() > 0.1) {
                console.log('Form submitted:', data);
                resolve();
            } else {
                reject(new Error('Submission failed'));
            }
        }, 2000);
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✅' : '❌'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(74, 144, 226, 0.9)' : 'rgba(255, 99, 99, 0.9)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Load projects dynamically
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    // Clear existing content
    projectsGrid.innerHTML = '';

    // Add projects with staggered animation
    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card animate-on-scroll';
    
    card.innerHTML = `
        <div class="project-image">
            ${project.icon}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <button class="project-button" onclick="viewProject('${project.id}')">
            Lihat Detail
        </button>
    `;
    
    return card;
}

// Load testimonials dynamically
function loadTestimonials() {
    const testimonialsCarousel = document.getElementById('testimonialsCarousel');
    if (!testimonialsCarousel) return;

    // Clear existing content
    testimonialsCarousel.innerHTML = '';

    // Add testimonials with staggered animation
    testimonialsData.forEach((testimonial, index) => {
        const testimonialCard = createTestimonialCard(testimonial);
        testimonialCard.style.animationDelay = `${index * 0.1}s`;
        testimonialsCarousel.appendChild(testimonialCard);
    });
}

// Create testimonial card element
function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card animate-on-scroll';
    
    card.innerHTML = `
        <div class="testimonial-avatar">
            ${testimonial.avatar}
        </div>
        <p class="testimonial-text">${testimonial.text}</p>
        <h4 class="testimonial-name">${testimonial.name}</h4>
        <p class="testimonial-role">${testimonial.role}</p>
        <div class="testimonial-rating">
            ${Array(testimonial.rating).fill('<span class="star">⭐</span>').join('')}
        </div>
    `;
    
    return card;
}

// View project details
function viewProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        showProjectModal(project);
    }
}

// Show project modal
function showProjectModal(project) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeProjectModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeProjectModal()">×</button>
            <div class="modal-header">
                <div class="project-icon">${project.icon}</div>
                <h2>${project.title}</h2>
            </div>
            <div class="modal-body">
                <p>${project.fullDescription}</p>
                <div class="project-features">
                    <h3>Fitur Utama:</h3>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-tech">
                    <h3>Teknologi:</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-primary" onclick="window.open('${project.demoUrl}', '_blank')">
                    Lihat Demo
                </button>
                <button class="btn-secondary" onclick="window.open('${project.codeUrl}', '_blank')">
                    Lihat Kode
                </button>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 100);
}

// Close project modal
function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.querySelector('.modal-content').style.transform = 'scale(0.8)';
        modal.querySelector('.modal-content').style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Add modal styles to head
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .project-modal .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
    }
    
    .project-modal .modal-content {
        background: rgba(0, 0, 0, 0.9);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        max-width: 600px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        transform: scale(0.8);
        opacity: 0;
        transition: all 0.3s ease;
        backdrop-filter: blur(20px);
    }
    
    .project-modal .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
        z-index: 1;
    }
    
    .project-modal .modal-header {
        padding: 2rem 2rem 1rem;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .project-modal .project-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    
    .project-modal .modal-body {
        padding: 2rem;
    }
    
    .project-modal .project-features ul {
        list-style: none;
        padding: 0;
    }
    
    .project-modal .project-features li {
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .project-modal .project-features li:before {
        content: '✓';
        color: #4A90E2;
        margin-right: 0.5rem;
    }
    
    .project-modal .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    
    .project-modal .modal-footer {
        padding: 1rem 2rem 2rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
    
    .project-modal .btn-primary,
    .project-modal .btn-secondary {
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .project-modal .btn-primary {
        background: linear-gradient(135deg, #4A90E2 0%, #A566FF 100%);
        color: white;
    }
    
    .project-modal .btn-secondary {
        background: transparent;
        border: 2px solid #4A90E2;
        color: #4A90E2;
    }
    
    .project-modal .btn-primary:hover,
    .project-modal .btn-secondary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(74, 144, 226, 0.3);
    }
`;
document.head.appendChild(modalStyles);