// Blog posts data
const blogPosts = [
    {
        id: '1',
        title: 'How to Apply to Schools Abroad',
        summary: 'Complete step-by-step guide to navigate the application process for international universities.',
        image: './How.jpg',
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
        image: './canada.jpg',
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

// Navigation state
let currentPage = 'main';
let currentLayout = 'grid';

// DOM elements
const mainPage = document.getElementById('main-page');
const blogPostPage = document.getElementById('blog-post-page');
const comingSoonPage = document.getElementById('coming-soon-page');
const blogContainer = document.getElementById('blog-container');
const layoutButtons = document.querySelectorAll('.layout-btn');
const backToGuidesBtn = document.getElementById('back-to-guides');
const backFromComingSoonBtn = document.getElementById('back-from-coming-soon');

// Navigation functions
function showMainPage() {
    mainPage.classList.remove('hidden');
    blogPostPage.classList.add('hidden');
    comingSoonPage.classList.add('hidden');
    currentPage = 'main';
    document.title = 'Study Abroad - Your Guide to International Education';
    window.scrollTo(0, 0);
}

function showBlogPost(postId) {
    if (postId === '1') {
        mainPage.classList.add('hidden');
        blogPostPage.classList.remove('hidden');
        comingSoonPage.classList.add('hidden');
        currentPage = 'blog-post';
        document.title = 'How to Apply to Schools Abroad - Study Abroad';
    } else {
        showComingSoonPage();
    }
    window.scrollTo(0, 0);
}

function showComingSoonPage() {
    mainPage.classList.add('hidden');
    blogPostPage.classList.add('hidden');
    comingSoonPage.classList.remove('hidden');
    currentPage = 'coming-soon';
    document.title = 'Coming Soon - Study Abroad';
    window.scrollTo(0, 0);
}

// Create blog card HTML
function createBlogCard(post, layout) {
    const cardClass = layout === 'list' ? 'blog-card list-card' : 'blog-card';
    
    if (layout === 'list') {
        return `
            <article class="${cardClass}" data-post-id="${post.id}">
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
                    <button class="blog-card-button" data-post-id="${post.id}">Read More</button>
                </div>
            </article>
        `;
    } else {
        return `
            <article class="${cardClass}" data-post-id="${post.id}">
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
                    <button class="blog-card-button" data-post-id="${post.id}">Read More</button>
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
    
    // Add click event listeners to Read More buttons and cards
    const readMoreButtons = blogContainer.querySelectorAll('.blog-card-button');
    const blogCards = blogContainer.querySelectorAll('.blog-card');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const postId = button.getAttribute('data-post-id');
            showBlogPost(postId);
        });
    });
    
    blogCards.forEach(card => {
        card.addEventListener('click', () => {
            const postId = card.getAttribute('data-post-id');
            showBlogPost(postId);
        });
        
        // Add cursor pointer style
        card.style.cursor = 'pointer';
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
    
    // Update layout with animation
    currentLayout = newLayout;
    showLoading();
    
    setTimeout(() => {
        renderBlogPosts(currentLayout);
    }, 300);
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement && currentPage === 'main') {
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

// Show loading animation
function showLoading() {
    blogContainer.innerHTML = `
        <div class="loading-container">
            <i class="fas fa-spinner loading-icon"></i>
            <p class="loading-text">Loading guides...</p>
        </div>
    `;
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
        if (currentPage !== 'main') return;
        
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize blog post page interactions
function setupBlogPostInteractions() {
    // Continue reading button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Full guide coming soon! This would typically lead to the complete article or a premium section.');
        });
    }
    
    // Related article buttons
    const relatedButtons = document.querySelectorAll('.related-button');
    relatedButtons.forEach(button => {
        button.addEventListener('click', () => {
            showComingSoonPage();
        });
    });
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
    
    // Set up navigation button listeners
    if (backToGuidesBtn) {
        backToGuidesBtn.addEventListener('click', showMainPage);
    }
    
    if (backFromComingSoonBtn) {
        backFromComingSoonBtn.addEventListener('click', showMainPage);
    }
    
    // Set up smooth scrolling
    setupSmoothScrolling();
    
    // Show loading state briefly, then render content
    showLoading();
    
    setTimeout(() => {
        renderBlogPosts(currentLayout);
    }, 500);
    
    // Add interactive effects
    setupInteractiveEffects();
    
    // Set up blog post interactions
    setupBlogPostInteractions();
    
    // Handle browser back/forward buttons
    setupHistoryNavigation();
}

// Handle browser history navigation
function setupHistoryNavigation() {
    // Push initial state
    history.replaceState({ page: 'main' }, 'Study Abroad', window.location.pathname);
    
    // Handle popstate event
    window.addEventListener('popstate', (event) => {
        if (event.state) {
            switch (event.state.page) {
                case 'main':
                    showMainPage();
                    break;
                case 'blog-post':
                    showBlogPost(event.state.postId || '1');
                    break;
                case 'coming-soon':
                    showComingSoonPage();
                    break;
                default:
                    showMainPage();
            }
        }
    });
    
    // Override navigation functions to update history
    const originalShowBlogPost = showBlogPost;
    const originalShowMainPage = showMainPage;
    const originalShowComingSoonPage = showComingSoonPage;
    
    showBlogPost = function(postId) {
        originalShowBlogPost(postId);
        const post = blogPosts.find(p => p.id === postId);
        const title = post ? `${post.title} - Study Abroad` : 'Study Abroad';
        history.pushState(
            { page: 'blog-post', postId }, 
            title, 
            `#blog-post-${postId}`
        );
    };
    
    showMainPage = function() {
        originalShowMainPage();
        history.pushState(
            { page: 'main' }, 
            'Study Abroad - Your Guide to International Education', 
            window.location.pathname
        );
    };
    
    showComingSoonPage = function() {
        originalShowComingSoonPage();
        history.pushState(
            { page: 'coming-soon' }, 
            'Coming Soon - Study Abroad', 
            '#coming-soon'
        );
    };
    
    // Make functions globally accessible
    window.showMainPage = showMainPage;
    window.showBlogPost = showBlogPost;
    window.showComingSoonPage = showComingSoonPage;
}

// Handle window resize for responsive layout
window.addEventListener('resize', () => {
    if (currentPage === 'main') {
        // Re-render blog posts to ensure proper layout
        renderBlogPosts(currentLayout);
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    setupMobileNavigation();
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key to go back to main page
    if (e.key === 'Escape' && currentPage !== 'main') {
        showMainPage();
    }
    
    // Number keys to switch layouts on main page
    if (currentPage === 'main') {
        switch (e.key) {
            case '1':
                handleLayoutChange('grid');
                break;
            case '2':
                handleLayoutChange('list');
                break;
            case '3':
                handleLayoutChange('masonry');
                break;
        }
    }
});

// Export functions for potential future use
window.StudyAbroad = {
    renderBlogPosts,
    handleLayoutChange,
    blogPosts,
    showMainPage,
    showBlogPost,
    showComingSoonPage
};

// Add loading overlay for better UX
function showPageTransition() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
    `;
    overlay.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: #2563eb;"></i>';
    
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    }, 500);
}

// Performance optimization: Lazy load images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        // Apply to future dynamically loaded images
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const lazyImages = node.querySelectorAll && node.querySelectorAll('img[data-src]');
                        if (lazyImages) {
                            lazyImages.forEach(img => imageObserver.observe(img));
                        }
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Initialize lazy loading
setupLazyLoading();
