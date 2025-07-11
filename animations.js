// Advanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    initParticleSystem();
    initTypingAnimation();
    initScrollReveal();
    initParallaxEffects();
    initCursorEffects();
});

// Particle system for background
function initParticleSystem() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    hero.appendChild(particlesContainer);

    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 3 + 3;
    const delay = Math.random() * 2;
    const opacity = Math.random() * 0.5 + 0.2;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(45deg, #4A90E2, #A566FF);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        animation: float-particle ${duration}s linear infinite;
        animation-delay: ${delay}s;
        opacity: ${opacity};
    `;
    
    container.appendChild(particle);
    
    // Remove and recreate particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createParticle(container);
        }
    }, (duration + delay) * 1000);
}

// Typing animation for hero title
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let index = 0;
    const speed = 50;
    
    function typeWriter() {
        if (index < text.length) {
            heroTitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            // Add blinking cursor
            heroTitle.innerHTML += '<span class="cursor">|</span>';
            
            // Remove cursor after 3 seconds
            setTimeout(() => {
                const cursor = heroTitle.querySelector('.cursor');
                if (cursor) cursor.remove();
            }, 3000);
        }
    }
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// Advanced scroll reveal animations
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animation || 'fadeInUp';
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.classList.add(`animate-${animationType}`);
                    element.classList.remove('animate-on-scroll');
                }, delay);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe elements with data-animation attributes
    const animateElements = document.querySelectorAll('[data-animation]');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Parallax effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    // Use requestAnimationFrame for smooth animation
    let ticking = false;
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    function handleScroll() {
        requestTick();
        ticking = false;
    }
    
    window.addEventListener('scroll', handleScroll);
}

// Custom cursor effects
function initCursorEffects() {
    // Skip on mobile devices
    if (window.innerWidth <= 768) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: linear-gradient(45deg, #4A90E2, #A566FF);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    
    document.body.appendChild(cursor);
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .testimonial-card');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.opacity = '0.8';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.opacity = '1';
        });
    });
}

// Smooth scroll with easing
function smoothScrollTo(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - 80; // Account for navbar
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Intersection Observer for counting animations
function initCountingAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                const duration = parseInt(counter.dataset.duration) || 2000;
                
                animateCounter(counter, target, duration);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Text reveal animation
function initTextReveal() {
    const textElements = document.querySelectorAll('[data-text-reveal]');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        // Wrap each character in a span
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.cssText = `
                display: inline-block;
                opacity: 0;
                transform: translateY(50px);
                transition: all 0.5s ease;
                transition-delay: ${index * 0.05}s;
            `;
            element.appendChild(span);
        });
        
        // Reveal text when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(element);
    });
}

// Magnetic effect for buttons
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// Initialize all advanced animations
document.addEventListener('DOMContentLoaded', function() {
    initCountingAnimations();
    initTextReveal();
    initMagneticEffect();
});

// Add CSS for cursor
const cursorStyles = document.createElement('style');
cursorStyles.textContent = `
    .cursor {
        animation: blink 1s infinite;
        color: #4A90E2;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .custom-cursor {
        transition: all 0.3s ease;
    }
    
    body {
        cursor: none;
    }
    
    @media (max-width: 768px) {
        body {
            cursor: auto;
        }
        
        .custom-cursor {
            display: none;
        }
    }
`;
document.head.appendChild(cursorStyles);