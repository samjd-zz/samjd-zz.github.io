// SAMJD Technologies Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Projects toggle functionality
    const showMoreBtn = document.getElementById('show-more-projects');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            // Toggle hidden projects visibility
            let isExpanded = this.getAttribute('data-expanded') === 'true';
            
            if (!isExpanded) {
                // Show hidden projects with staggered animation
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.add('show');
                    }, index * 150); // 150ms delay between each project
                });
                
                this.textContent = 'Show Less Projects';
                this.setAttribute('data-expanded', 'true');
            } else {
                // Hide projects
                hiddenProjects.forEach(project => {
                    project.classList.remove('show');
                });
                
                this.textContent = 'Show More Projects';
                this.setAttribute('data-expanded', 'false');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-nav a, a.btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to links that start with #
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Get header height for offset
                    const headerHeight = document.querySelector('header').offsetHeight;
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real implementation, you would send this data to a server
            // For demo purposes, we'll just show a success message
            alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add active class to current section in navigation
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        // Get current scroll position
        const scrollPosition = window.scrollY;
        
        // Get header height for offset
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // Find the current section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100; // 100px buffer
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to corresponding link
                const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initialize active nav link
    updateActiveNavLink();
    
    // Mobile menu toggle (for smaller screens)
    // This assumes you'll add a mobile menu button in the HTML for smaller screens
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('mobile-menu-toggle');
    mobileMenuButton.innerHTML = '<span></span><span></span><span></span>';
    
    const nav = document.querySelector('nav');
    const header = document.querySelector('header .container');
    
    // Only add mobile menu functionality if screen width is below 768px
    function setupMobileMenu() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                header.insertBefore(mobileMenuButton, nav);
                
                mobileMenuButton.addEventListener('click', function() {
                    nav.classList.toggle('active');
                    this.classList.toggle('active');
                });
                
                // Close mobile menu when clicking a link
                navLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        nav.classList.remove('active');
                        mobileMenuButton.classList.remove('active');
                    });
                });
            }
            
            // Add mobile menu styles if not already added
            if (!document.getElementById('mobile-menu-styles')) {
                const mobileStyles = document.createElement('style');
                mobileStyles.id = 'mobile-menu-styles';
                mobileStyles.textContent = `
                    @media (max-width: 768px) {
                        nav {
                            display: none;
                            width: 100%;
                        }
                        
                        nav.active {
                            display: block;
                        }
                        
                        nav ul {
                            flex-direction: column;
                            align-items: center;
                        }
                        
                        .mobile-menu-toggle {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            width: 30px;
                            height: 21px;
                            background: transparent;
                            border: none;
                            cursor: pointer;
                            padding: 0;
                            z-index: 10;
                        }
                        
                        .mobile-menu-toggle span {
                            display: block;
                            width: 100%;
                            height: 3px;
                            background-color: var(--primary-color);
                            border-radius: 3px;
                            transition: all 0.3s ease;
                        }
                        
                        .mobile-menu-toggle.active span:nth-child(1) {
                            transform: translateY(9px) rotate(45deg);
                        }
                        
                        .mobile-menu-toggle.active span:nth-child(2) {
                            opacity: 0;
                        }
                        
                        .mobile-menu-toggle.active span:nth-child(3) {
                            transform: translateY(-9px) rotate(-45deg);
                        }
                    }
                `;
                document.head.appendChild(mobileStyles);
            }
        } else {
            // Remove mobile menu button if screen is larger
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileMenuToggle) {
                mobileMenuToggle.remove();
            }
            
            // Ensure nav is visible on larger screens
            nav.classList.remove('active');
        }
    }
    
    // Setup mobile menu on load
    setupMobileMenu();
    
    // Update mobile menu on window resize
    window.addEventListener('resize', setupMobileMenu);
    
    // Add scroll animation for elements
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .expertise-item, .project-card, .about-content, .contact-content');
        
        elements.forEach(element => {
            // Add animation class if element is in viewport
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }
    
    // Add animation styles
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .service-card, .expertise-item, .project-card, .about-content, .contact-content {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .service-card.animate, .expertise-item.animate, .project-card.animate, .about-content.animate, .contact-content.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-card:nth-child(2), .expertise-item:nth-child(2), .project-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .service-card:nth-child(3), .expertise-item:nth-child(3), .project-card:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .expertise-item:nth-child(4) {
            transition-delay: 0.6s;
        }
        
        .expertise-item:nth-child(5) {
            transition-delay: 0.8s;
        }
        
        .expertise-item:nth-child(6) {
            transition-delay: 1s;
        }
        
        .expertise-item:nth-child(7) {
            transition-delay: 1.2s;
        }
        
        .expertise-item:nth-child(8) {
            transition-delay: 1.4s;
        }
    `;
    document.head.appendChild(animationStyles);
    
    // Run animation on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
