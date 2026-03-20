// Matrix Rain Effect
class MatrixRain {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        this.animationId = null;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(1);
    }
    
    draw() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            const char = this.chars[Math.floor(Math.random() * this.chars.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;
            
            this.ctx.fillText(char, x, y);
            
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            
            this.drops[i]++;
        }
    }
    
    start() {
        const animate = () => {
            this.draw();
            this.animationId = requestAnimationFrame(animate);
        };
        animate();
    }
    
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Typing Animation
class TypeWriter {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
    }
    
    type() {
        return new Promise((resolve) => {
            const typeChar = () => {
                if (this.index < this.text.length) {
                    this.element.textContent += this.text.charAt(this.index);
                    this.index++;
                    setTimeout(typeChar, this.speed);
                } else {
                    resolve();
                }
            };
            typeChar();
        });
    }
}

// Intro Sequence
async function initIntro() {
    const overlay = document.getElementById('intro-overlay');
    const canvas = document.getElementById('matrix-canvas');
    const typedText = document.getElementById('typed-text');
    const hackerMessage = document.getElementById('hacker-message');
    
    const matrix = new MatrixRain(canvas);
    matrix.start();
    
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    typedText.appendChild(cursor);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    cursor.remove();
    const line1 = 'Jangam Sri Charan\n';
    const line2 = 'Aspiring Software Developer';
    
    const writer1 = new TypeWriter(typedText, line1, 80);
    await writer1.type();
    
    const writer2 = new TypeWriter(typedText, line2, 80);
    await writer2.type();
    
    await new Promise(resolve => setTimeout(resolve, 500));
    hackerMessage.textContent = '> System access granted... Welcome.';
    hackerMessage.classList.add('visible');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.remove('active');
        matrix.stop();
    }, 500);
}

// Skip Intro
function setupIntroSkip() {
    const overlay = document.getElementById('intro-overlay');
    
    const skipIntro = () => {
        if (overlay.classList.contains('active')) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.classList.remove('active');
            }, 300);
        }
    };
    
    overlay.addEventListener('click', skipIntro);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') skipIntro();
    });
}

// Navigation
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.glass-card, .section-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize
function init() {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (!hasSeenIntro) {
        setupIntroSkip();
        initIntro().then(() => {
            sessionStorage.setItem('hasSeenIntro', 'true');
        });
    } else {
        const overlay = document.getElementById('intro-overlay');
        overlay.classList.remove('active');
    }
    
    setupNavigation();
    setupScrollAnimations();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
