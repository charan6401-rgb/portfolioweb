/* ==================== VARIABLES ==================== */
:root {
    --bg-gradient-start: #0a0e1a;
    --bg-gradient-end: #1a1f2e;
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: rgba(0, 0, 0, 0.3);
    
    --text-primary: #e8eaed;
    --text-secondary: #9ca3af;
    --text-muted: #6b7280;
    
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    
    --border-radius: 16px;
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
    
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ==================== RESET & BASE ==================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-family);
    background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
    background-attachment: fixed;
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

::selection {
    background: var(--accent-primary);
    color: #ffffff;
}

/* ==================== NAVIGATION ==================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1.25rem 0;
    transition: var(--transition);
}

.navbar.scrolled {
    background: rgba(10, 14, 26, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--glass-border);
    box-shadow: 0 4px 24px var(--glass-shadow);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
}

.nav-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    transition: var(--transition);
    border-radius: 2px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: var(--spacing-md);
    align-items: center;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;
    transition: var(--transition);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--text-primary);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

/* ==================== GLASS CARD ==================== */
.glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    box-shadow: 0 8px 32px var(--glass-shadow);
    transition: var(--transition);
}

.glass-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.15);
}

/* ==================== CONTAINER ==================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

section {
    padding: var(--spacing-xl) 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
}

/* ==================== SECTION HEADER ==================== */
.section-header {
    text-align: center;
    margin-bottom: var(--spacing-lg);
}

.section-label {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--accent-primary);
    margin-bottom: var(--spacing-xs);
}

.section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

/* ==================== HERO SECTION ==================== */
.hero {
    position: relative;
    min-height: 100vh;
    padding-top: 100px;
}

.hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.hero-badge {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--accent-primary);
    margin-bottom: var(--spacing-md);
}

.hero-title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: var(--spacing-sm);
}

.gradient-text {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
    font-weight: 500;
}

.hero-description {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto var(--spacing-md);
    line-height: 1.8;
}

.hero-cta {
    display: flex;
    gap: var(--spacing-sm);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--spacing-md);
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: var(--accent-gradient);
    color: #ffffff;
    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(99, 102, 241, 0.4);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
    border: 1px solid var(--glass-border);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
}

.hero-social {
    display: flex;
    gap: var(--spacing-sm);
    justify-content: center;
}

.hero-social a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: 50%;
    color: var(--text-secondary);
    transition: var(--transition);
}

.hero-social a:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--accent-primary);
    transform: translateY(-2px);
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: var(--text-muted);
    font-size: 0.875rem;
}

.scroll-arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid var(--text-muted);
    border-bottom: 2px solid var(--text-muted);
    transform: rotate(45deg);
    margin: 0.5rem auto 0;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: rotate(45deg) translateY(0);
    }
    40% {
        transform: rotate(45deg) translateY(-8px);
    }
    60% {
        transform: rotate(45deg) translateY(-4px);
    }
}

/* ==================== ABOUT SECTION ==================== */
.about-content {
    max-width: 900px;
    margin: 0 auto;
}

.about-card {
    padding: var(--spacing-lg);
}

.about-text {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.8;
}

.about-text:last-of-type {
    margin-bottom: var(--spacing-lg);
}

.about-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.info-item {
    display: flex;
    gap: var(--spacing-sm);
    align-items: flex-start;
}

.info-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
}

.info-label {
    display: block;
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-bottom: 0.25rem;
}

.info-value {
    display: block;
    font-size: 1rem;
    color: var(--text-primary);
    font-weight: 500;
}

.interests-section {
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--glass-border);
}

.interests-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--spacing-sm);
}

.interest-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: 0.75rem 1rem;
    background: rgba(99, 102, 241, 0.05);
    border: 1px solid rgba(99, 102, 241, 0.1);
    border-radius: 12px;
    transition: var(--transition);
}

.interest-item:hover {
    background: rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.2);
    transform: translateX(4px);
}

.interest-icon {
    font-size: 1.25rem;
}

.interest-text {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-primary);
}

/* ==================== SKILLS SECTION ==================== */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--spacing-md);
}

.skill-category {
    padding: var(--spacing-md);
}

.category-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.skill-tag {
    padding: 0.5rem 1rem;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--accent-primary);
    transition: var(--transition);
}

.skill-tag:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
}

/* ==================== PROJECTS SECTION ==================== */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--spacing-md);
}

.project-card {
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-sm);
}

.project-icon {
    font-size: 2rem;
}

.project-links {
    display: flex;
    gap: 0.75rem;
}

.project-links a {
    color: var(--text-secondary);
    transition: var(--transition);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-links a:hover {
    color: var(--accent-primary);
}

.project-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--spacing-xs);
}

.project-description {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-sm);
}

.project-highlights {
    list-style: none;
    margin-bottom: var(--spacing-sm);
}

.project-highlights li {
    font-size: 0.9375rem;
    color: var(--text-secondary);
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
}

.project-highlights li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent-primary);
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
}

.tech-tag {
    padding: 0.375rem 0.875rem;
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 50px;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--accent-secondary);
}

/* ==================== EDUCATION SECTION ==================== */
.education-content {
    max-width: 800px;
    margin: 0 auto;
}

.education-card {
    padding: var(--spacing-lg);
    display: flex;
    gap: var(--spacing-md);
}

.education-icon {
    font-size: 3rem;
    flex-shrink: 0;
}

.education-degree {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.education-institution {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 0.25rem;
}

.education-year {
    font-size: 1rem;
    color: var(--text-muted);
    margin-bottom: var(--spacing-md);
}

.achievements h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.achievements ul {
    list-style: none;
}

.achievements li {
    font-size: 1rem;
    color: var(--text-secondary);
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
}

.achievements li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-primary);
    font-weight: bold;
}

/* ==================== CONTACT SECTION ==================== */
.contact-content {
    max-width: 700px;
    margin: 0 auto;
}

.contact-info {
    padding: var(--spacing-lg);
    text-align: center;
}

.contact-info h3 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.contact-info > p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.contact-method {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    text-decoration: none;
    transition: var(--transition);
}

.contact-method:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.12);
    transform: translateX(4px);
}

.method-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
}

.method-label {
    display: block;
    font-size: 0.875rem;
    color: var(--text-muted);
}

.method-value {
    display: block;
    font-size: 1rem;
    color: var(--text-primary);
    font-weight: 500;
}

/* ==================== FOOTER ==================== */
.footer {
    padding: var(--spacing-md) 0;
    border-top: 1px solid var(--glass-border);
    background: rgba(10, 14, 26, 0.5);
}

.footer-content {
    text-align: center;
}

.footer-text {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.footer-text strong {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-subtext {
    font-size: 0.875rem;
    color: var(--text-muted);
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 768px) {
    .nav-toggle {
        display: flex;
    }
    
    .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(10, 14, 26, 0.95);
        backdrop-filter: blur(20px);
        border-top: 1px solid var(--glass-border);
        padding: var(--spacing-sm);
        gap: 0;
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
        transition: var(--transition);
    }
    
    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
    }
    
    .nav-link {
        padding: var(--spacing-sm);
        width: 100%;
        text-align: center;
    }
    
    section {
        padding: var(--spacing-lg) 0;
        min-height: auto;
    }
    
    .hero-cta {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        max-width: 280px;
        justify-content: center;
    }
    
    .education-card {
        flex-direction: column;
        text-align: center;
    }
    
    .projects-grid,
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .interests-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    :root {
        --spacing-md: 1rem;
        --spacing-lg: 2rem;
        --spacing-xl: 3rem;
    }
    
    .container {
        padding: 0 var(--spacing-sm);
    }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

button:focus,
a:focus,
input:focus,
textarea:focus {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
}
