// Blog posts data
const blogPosts = [
    {
        id: '1',
        title: 'How to Apply to Schools Abroad',
        summary: 'Complete step-by-step guide to navigate the application process for international universities.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
        readTime: '8 min read'
    },
    {
        id: '2',
        title: 'Top Scholarships You Shouldn\'t Miss',
        summary: 'Discover the best scholarship opportunities available for international students worldwide.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
        readTime: '6 min read'
    },
    {
        id: '3',
        title: 'Complete Student Visa Guide',
        summary: 'Everything you need to know about obtaining a student visa for your destination country.',
        image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=400&h=300&fit=crop',
        readTime: '12 min read'
    },
    {
        id: '4',
        title: 'Study Abroad on a Low Budget',
        summary: 'Practical tips and strategies to make your international education affordable.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
        readTime: '10 min read'
    },
    {
        id: '5',
        title: 'Best Countries for English-Speaking Students',
        summary: 'Explore top destinations where English is the primary language of instruction.',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
        readTime: '7 min read'
    },
    {
        id: '6',
        title: 'Study in Germany',
        summary: 'Your comprehensive guide to studying in Germany, from applications to living costs.',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop',
        readTime: '9 min read'
    },
    {
        id: '7',
        title: 'Study in Canada',
        summary: 'Everything you need to know about pursuing education in Canada\'s top universities.',
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56cd6b3?w=400&h=300&fit=crop',
        readTime: '8 min read'
    },
    {
        id: '8',
        title: 'Study in the US',
        summary: 'Navigate the complex US education system with our detailed guide for international students.',
        image: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=300&fit=crop',
        readTime: '11 min read'
    }
];

// Current layout state
let currentLayout = 'grid';

// DOM elements
const blogContainer = document.getElementById('blog-container');
const layoutButtons = document.querySelectorAll('.layout-btn');

// Create blog card HTML
function createBlogCard(post, layout) {
    const cardClass = layout === 'list' ? 'blog-card list-card' : 'blog-card';
    
    if (layout === 'list') {
        return `
            <article class="${cardClass}">
                <div class="blog-card-image-container">
                    <img src="${post.image}" alt="${post.title}" class="blog-card-image">
                </div>
                <div class="blog-card-content">
                    <div>
                        <div class="blog-card-header">
                            <h3 class="blog-card-title">${post.title}</h3>
                            <div class="blog-card-meta">
                                <i class="fas fa-clock"></i>
                                <span>${post.readTime}</span>
                            </div>
                        </div>
                        <p class="blog-card-summary">${post.summary}</p>
                    </div>
                    <button class="blog-card-button">Read More</button>
                </div>
            </article>
        `;
    } else {
        return `
            <article class="${cardClass}">
                <img src="${post.image}" alt="${post.title}" class="blog-card-image">
                <div class="blog-card-content">
                    <div class="blog-card-header">
                        <h3 class="blog-card-title">${post.title}</h3>
                        <div class="blog-card-meta">
                            <i class="fas fa-clock"></i>
                            <span>${post.readTime}</span>
                        </div>
                    </div>
                    <p class="blog-card-summary">${post.summary}</p>
                    <button class="blog-card-button">Read More</button>
                </div>
            </article>
        `;
    }
}

// Render blog posts
function renderBlogPosts(layout) {
    const layoutClass = `${layout}-layout`;
    blogContainer.className = `blog-container ${layoutClass}`;
    
    const postsHTML = blogPosts.map(post => createBlogCard(post, layout)).join('');
    blogContainer.innerHTML = postsHTML;
    
    // Add click event listeners to Read More buttons
    const readMoreButtons = blogContainer.querySelectorAll('.blog-card-button');
    readMoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            alert(`You clicked on "${blogPosts[index].title}". This would typically navigate to the full blog post.`);
        });
    });
}

// Handle layout button clicks
function handleLayoutChange(newLayout) {
    if (newLayout === currentLayout) return;
    
    // Update button states
    layoutButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.layout === newLayout) {
            btn.classList.add('active');
        }
    });
    
    // Update layout
    currentLayout = newLayout;
    renderBlogPosts(currentLayout);
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add loading animation
function showLoading() {
    blogContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; grid-column: 1 / -1;">
            <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: #2563eb;"></i>
            <p style="margin-top: 1rem; color: #6b7280;">Loading guides...</p>
        </div>
    `;
}

// Initialize the application
function init() {
    // Set up layout button event listeners
    layoutButtons.forEach(button => {
        button.addEventListener('click', () => {
            const layout = button.dataset.layout;
            handleLayoutChange(layout);
        });
    });
    
    // Set up smooth scrolling
    setupSmoothScrolling();
    
    // Show loading state briefly, then render content
    showLoading();
    
    setTimeout(() => {
        renderBlogPosts(currentLayout);
    }, 500);
    
    // Add some interactive effects
    setupInteractiveEffects();
}

// Add interactive effects
function setupInteractiveEffects() {
    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effect to layout buttons
    layoutButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Handle responsive navigation (for mobile)
function setupMobileNavigation() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    setupMobileNavigation();
});

// Handle window resize for responsive layout
window.addEventListener('resize', () => {
    // Re-render blog posts to ensure proper layout
    renderBlogPosts(currentLayout);
});

// Export functions for potential future use
window.StudyAbroad = {
    renderBlogPosts,
    handleLayoutChange,
    blogPosts
};