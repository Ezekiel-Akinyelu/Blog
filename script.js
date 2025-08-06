// Blog posts data
const blogPosts = [
    {
        id: '1',
        title: 'How to Find and Apply for Scholarships that Fit You',
        summary: 'Discover thousands of scholarship opportunities and learn proven strategies to apply successfully and secure funding for your education.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
        readTime: '12 min read'
    },
    {
        id: '2',
        title: 'Top 5 Countries to Study Abroad',
        summary: 'Explore the best destinations for international education in 2025, including costs, opportunities, and unique benefits of each country.',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
        readTime: '15 min read'
    },
    {
        id: '3',
        title: 'The Real Cost of Studying Abroad',
        summary: 'Complete breakdown of studying abroad expenses and how to find funding opportunities to make your international education affordable.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
        readTime: '10 min read'
    },
    {
        id: '4',
        title: 'Complete Student Visa Guide',
        summary: 'Everything you need to know about obtaining a student visa for your destination country.',
        image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=400&h=300&fit=crop',
        readTime: '12 min read'
    },
    {
        id: '5',
        title: 'Best Countries for English-Speaking Students',
        summary: 'Explore top destinations where English is the primary language of instruction.',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop',
        readTime: '7 min read'
    },
    {
        id: '6',
        title: 'Study in Germany',
        summary: 'Your comprehensive guide to studying in Germany, from applications to living costs.',
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56cd6b3?w=400&h=300&fit=crop',
        readTime: '9 min read'
    },
    {
        id: '7',
        title: 'Study in Canada',
        summary: 'Everything you need to know about pursuing education in Canada\'s top universities.',
        image: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=300&fit=crop',
        readTime: '8 min read'
    },
    {
        id: '8',
        title: 'Study in the US',
        summary: 'Navigate the complex US education system with our detailed guide for international students.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
        readTime: '11 min read'
    }
];

// Blog post content templates
const blogPostContent = {
    '1': {
        title: 'How to Find and Apply for Scholarships that Fit You',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop',
        readTime: '12 min read',
        content: `
            <section class="article-section">
                <p class="intro-text">
                    Scholarships are more than just financial aid — they are the key that unlocks the door to higher education 
                    for millions of students around the world. Whether you're aiming to study in the United States, Canada, 
                    the UK, Germany, or anywhere else, funding your studies through scholarships can significantly reduce the 
                    financial burden and even provide a sense of prestige that strengthens your academic resume.
                </p>
                <p>
                    But here's the truth: most students either don't know where to find scholarships or they assume they're 
                    not good enough to apply. The good news? There are thousands of scholarships available every year — and 
                    many go unclaimed.
                </p>
                <p>
                    This guide is here to change that. You'll learn how to find scholarships that truly match your background, 
                    skills, and goals, and most importantly, how to apply in a way that gets you noticed.
                </p>
            </section>
            <section class="article-section">
                <h2 class="section-heading">1. Understanding What Scholarships Really Are</h2>
                <p>
                    Scholarships are awards of financial aid given to students to help fund their education. Unlike loans, 
                    scholarships don't have to be paid back. They are usually awarded based on merit, need, or a combination of both.
                </p>
                <p>There are different types:</p>
                <ul class="article-list">
                    <li><strong>Merit-based scholarships:</strong> Based on academic achievements, talents, or leadership.</li>
                    <li><strong>Need-based scholarships:</strong> Awarded to students with financial need.</li>
                    <li><strong>Subject-specific scholarships:</strong> For students pursuing specific fields like STEM, arts, medicine, etc.</li>
                    <li><strong>Destination-based scholarships:</strong> Offered by governments or institutions to attract foreign students.</li>
                    <li><strong>Community or identity-based scholarships:</strong> For underrepresented groups (women, ethnic minorities, etc.).</li>
                </ul>
            </section>
            <section class="article-section">
                <h2 class="section-heading">Conclusion: Scholarships Are Within Reach</h2>
                <p>
                    Securing a scholarship is not a matter of luck — it's about strategy, consistency, and persistence. 
                    With the right tools, mindset, and preparation, you can absolutely win the funding you need to study abroad.
                </p>
                <p>
                    Remember, every scholarship you apply for is a potential door to your future. Start early, stay organized, 
                    and don't give up.
                </p>
                <p class="conclusion-emphasis">
                    Your dream education is waiting — and now, you have the roadmap to make it happen.
                </p>
            </section>
        `,
        cta: {
            title: 'Ready to Start Your Scholarship Hunt?',
            description: 'This comprehensive guide has equipped you with the knowledge and strategies you need. Now it\'s time to put this into action and start finding scholarships that match your profile.',
            buttonText: 'Start Your Scholarship Search'
        }
    },
    '2': {
        title: 'Top 5 Countries to Study Abroad',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop',
        readTime: '15 min read',
        content: `
            <section class="article-section">
                <p class="intro-text">
                    Studying abroad has become more than a dream for millions of students around the world — it's a gateway to global opportunities, 
                    personal development, and academic excellence. Whether you're looking to build an international career, experience a new culture, 
                    or gain exposure to world-class education, choosing the right destination can significantly influence your academic journey and future prospects.
                </p>
                <p>
                    This guide explores the top 5 countries to study abroad in 2025 based on affordability, quality of education, international reputation, 
                    work opportunities, and student experience. These destinations are not only popular among international students, but they also provide 
                    supportive environments that make it easier to adapt, learn, and grow.
                </p>
                <p>
                    In this detailed article, we will cover the pros, cons, and unique features of each country, helping you decide where your academic 
                    future may shine brightest.
                </p>
            </section>
            <section class="article-section">
                <h2 class="section-heading">1. Canada</h2>
                <p>
                    Canada continues to be one of the most sought-after destinations for international students, and for good reasons. The country offers 
                    high-quality education, welcoming immigration policies, and an inclusive society that celebrates diversity.
                </p>
                <h3 class="subsection-heading">Why Choose Canada?</h3>
                <ul class="article-list">
                    <li>Globally respected universities like the University of Toronto, McGill University, and University of British Columbia.</li>
                    <li>Affordable tuition compared to the US and UK.</li>
                    <li>Generous post-study work permits and pathways to permanent residency.</li>
                    <li>Safe, clean, and multicultural cities.</li>
                    <li>A high standard of living with universal healthcare access for many international students.</li>
                </ul>
                <h3 class="subsection-heading">Cost of Studying</h3>
                <p>Tuition fees vary depending on the program and institution. On average:</p>
                <ul class="article-list">
                    <li>Undergraduate programs: $15,000 – $25,000 CAD per year</li>
                    <li>Graduate programs: $10,000 – $20,000 CAD per year</li>
                    <li>Living expenses: Around $10,000 – $15,000 CAD per year.</li>
                </ul>
            </section>
            <section class="article-section">
                <h2 class="section-heading">2. Germany</h2>
                <p>
                    Germany is often hailed as the most affordable destination for international students, especially those seeking a world-class education 
                    without paying tuition fees. It's also one of Europe's strongest economies with abundant work opportunities.
                </p>
                <h3 class="subsection-heading">Why Choose Germany?</h3>
                <ul class="article-list">
                    <li>Public universities offer tuition-free education to both domestic and international students.</li>
                    <li>Strong emphasis on STEM fields and applied sciences.</li>
                    <li>Rich cultural heritage and modern infrastructure.</li>
                    <li>Centrally located in Europe for easy travel.</li>
                </ul>
            </section>
            <section class="article-section">
                <h2 class="section-heading">3. Australia</h2>
                <p>
                    Australia is known for its friendly people, high quality of life, and top-ranking universities. With cities like Melbourne and Sydney 
                    consistently ranked among the best for students, Australia offers a vibrant academic and social experience.
                </p>
            </section>
            <section class="article-section">
                <h2 class="section-heading">4. United Kingdom</h2>
                <p>
                    The UK is home to some of the world's most prestigious universities and is especially known for its strong academic traditions. 
                    It's a global education hub with a rich history of producing world leaders, Nobel laureates, and industry pioneers.
                </p>
            </section>
            <section class="article-section">
                <h2 class="section-heading">5. United States</h2>
                <p>
                    The United States remains a top destination for international students due to its diversity, innovation, and vast academic options. 
                    With thousands of institutions across 50 states, students can find programs tailored to almost any career path.
                </p>
            </section>
            <section class="article-section">
                <h2 class="section-heading">Conclusion</h2>
                <p>
                    Each of these countries offers unique benefits depending on your academic goals, budget, and future plans. If you're looking for 
                    affordability and quality, Germany is unbeatable. If post-graduation work and migration are important to you, Canada and Australia 
                    are excellent options. For prestige and tradition, the UK shines. For innovation and diversity, the United States is hard to beat.
                </p>
                <p class="conclusion-emphasis">
                    Your study abroad journey starts with choosing the right destination — but where it ends is entirely up to you.
                </p>
            </section>
        `,
        cta: {
            title: 'Ready to Choose Your Destination?',
            description: 'Now that you know the top countries for studying abroad, it\'s time to research specific universities and programs that match your interests and career goals.',
            buttonText: 'Explore Universities'
        }
    },
    '3': {
        title: 'The Real Cost of Studying Abroad',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
        readTime: '10 min read',
        content: `
            <section class="article-section">
                <p class="intro-text">
                    Studying abroad is an exciting and life-changing journey, but it also comes with a significant financial responsibility. 
                    For many prospective students, the dream of studying overseas often feels out of reach because of high tuition fees, travel expenses, 
                    accommodation costs, visa fees, textbooks, health insurance, and day-to-day living costs. But here's the truth: your financial background 
                    does not have to define your academic future.
                </p>
                <p>
                    Every year, thousands of students from low-income and middle-class families study abroad — many without paying a single dollar out of 
                    their own pockets. Scholarships and grants exist to bridge the gap between ambition and affordability. With the right information, a 
                    strategic approach, and strong preparation, you can unlock free funding that will fully or partially cover your study abroad expenses.
                </p>
                <p>
                    But to get there, you need to understand how scholarships work, the different types available, and how to build a winning application. 
                    That's exactly what this guide will help you do.
                </p>
            </section>
            <section class="article-section">
                <h2 class="section-heading">Why Funding Matters: Breaking the Financial Barrier</h2>
                <p>
                    Education should never be a luxury — it is a right. However, the global cost of higher education has created a gap between those who 
                    can afford it and those who can't. Without scholarships, many brilliant students are forced to give up their dreams or settle for less 
                    due to financial constraints.
                </p>
                <p>Here are key reasons why pursuing funding is essential:</p>
                <ul class="article-list">
                    <li>It opens the door to prestigious institutions that may otherwise be financially out of reach.</li>
                    <li>It reduces the burden on families and prevents long-term debt.</li>
                    <li>It allows students to focus on academic success rather than financial survival.</li>
                    <li>It boosts your academic profile — scholarship winners often receive mentorship, career development support, and global networking opportunities.</li>
                    <li>It can cover more than just tuition. Many scholarships include housing, meals, flights, laptops, and living stipends.</li>
                </ul>
            </section>
            <section class="article-section">
                <h2 class="section-heading">Types of Scholarships and Grants Available</h2>
                <p>
                    Scholarships and grants come in many forms. Understanding the different types will help you target the right opportunities and increase 
                    your chances of success.
                </p>
                <h3 class="subsection-heading">1. Merit-Based Scholarships</h3>
                <p>
                    These are awarded based on academic excellence, leadership, artistic talent, or other achievements. They're usually very competitive and 
                    often offered by universities, private institutions, or governments.
                </p>
                <h3 class="subsection-heading">2. Need-Based Scholarships</h3>
                <p>
                    These scholarships are based on financial need. They support students from economically disadvantaged backgrounds who show academic promise 
                    but lack the resources to afford higher education.
                </p>
                <h3 class="subsection-heading">3. Government Scholarships</h3>
                <p>
                    Many countries offer full or partial scholarships to attract international talent. These scholarships are often generous and prestigious, 
                    covering tuition, accommodation, and living expenses.
                </p>
            </section>
            <section class="article-section">
                <h2 class="section-heading">Final Thoughts</h2>
                <p>
                    The cost of studying abroad doesn't have to be a barrier to your dreams. With thousands of scholarships and funding opportunities available, 
                    students from all financial backgrounds can access world-class education. The key is to start early, research thoroughly, and apply strategically.
                </p>
                <p class="conclusion-emphasis">
                    Your financial situation today doesn't determine your academic potential tomorrow. Start your funding journey now.
                </p>
            </section>
        `,
        cta: {
            title: 'Ready to Find Your Funding?',
            description: 'Don\'t let financial concerns hold you back from pursuing your educational dreams. Start exploring scholarship opportunities today and take the first step toward your international education journey.',
            buttonText: 'Search for Scholarships'
        }
    }
};

// Navigation state
let currentPage = 'main';
let currentLayout = 'grid';
let currentBlogPostId = null;

// DOM elements
const mainPage = document.getElementById('main-page');
const blogPostPages = document.getElementById('blog-post-pages');
const comingSoonPage = document.getElementById('coming-soon-page');
const blogContainer = document.getElementById('blog-container');
const layoutButtons = document.querySelectorAll('.layout-btn');
const backFromComingSoonBtn = document.getElementById('back-from-coming-soon');

// Navigation functions
function showMainPage() {
    mainPage.classList.remove('hidden');
    blogPostPages.classList.add('hidden');
    comingSoonPage.classList.add('hidden');
    currentPage = 'main';
    currentBlogPostId = null;
    document.title = 'Study Abroad - Your Guide to International Education';
    window.scrollTo(0, 0);
}

function showBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    if (blogPostContent[postId]) {
        mainPage.classList.add('hidden');
        comingSoonPage.classList.add('hidden');
        currentPage = 'blog-post';
        currentBlogPostId = postId;
        
        // Load the blog post content
        loadBlogPostContent(postId);
        
        blogPostPages.classList.remove('hidden');
        document.title = `${post.title} - Study Abroad`;
    } else {
        showComingSoonPage();
    }
    window.scrollTo(0, 0);
}

function showComingSoonPage() {
    mainPage.classList.add('hidden');
    blogPostPages.classList.add('hidden');
    comingSoonPage.classList.remove('hidden');
    currentPage = 'coming-soon';
    document.title = 'Coming Soon - Study Abroad';
    window.scrollTo(0, 0);
}

function loadBlogPostContent(postId) {
    const content = blogPostContent[postId];
    if (!content) return;

    const blogPostHTML = `
        <div class="blog-post-page">
            <!-- Blog Post Header -->
            <header class="blog-post-header">
                <div class="container">
                    <button class="back-button" onclick="showMainPage()">
                        <i class="fas fa-arrow-left"></i>
                        Back to Guides
                    </button>
                </div>
            </header>

            <!-- Blog Post Hero -->
            <div class="blog-post-hero">
                <img src="${content.image}" alt="${content.title}" class="blog-post-hero-image">
                <div class="blog-post-hero-overlay">
                    <div class="container">
                        <div class="blog-post-hero-content">
                            <h1 class="blog-post-title">${content.title}</h1>
                            <div class="blog-post-meta">
                                <div class="meta-item">
                                    <i class="fas fa-clock"></i>
                                    <span>${content.readTime}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-calendar"></i>
                                    <span>January 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Blog Post Content -->
            <article class="blog-post-content">
                <div class="container">
                    <div class="article-content">
                        ${content.content}
                        
                        <!-- Call to Action -->
                        <div class="call-to-action">
                            <h3>${content.cta.title}</h3>
                            <p>${content.cta.description}</p>
                            <button class="cta-button">${content.cta.buttonText}</button>
                        </div>

                        <!-- Related Articles -->
                        <div class="related-articles">
                            <h3>Related Articles</h3>
                            <div class="related-grid">
                                <div class="related-card">
                                    <h4>How to Find and Apply for Scholarships that Fit You</h4>
                                    <p>Discover thousands of scholarship opportunities and learn proven strategies to apply successfully.</p>
                                    <button class="related-button" onclick="showBlogPost('1')">Read More</button>
                                </div>
                                <div class="related-card">
                                    <h4>Complete Student Visa Guide</h4>
                                    <p>Everything you need to know about obtaining a student visa for your destination country.</p>
                                    <button class="related-button" onclick="showComingSoonPage()">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    `;

    blogPostPages.innerHTML = blogPostHTML;

    // Set up CTA button interaction
    const ctaButton = blogPostPages.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            if (postId === '1') {
                alert('Ready to start your scholarship search? This would typically redirect to a scholarship database or application portal.');
            } else if (postId === '2') {
                alert('Ready to explore universities? This would typically redirect to university search and comparison tools.');
            } else if (postId === '3') {
                alert('Ready to find funding? This would typically redirect to scholarship and funding opportunity searches.');
            }
        });
    }
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

// Show loading animation
function showLoading() {
    blogContainer.innerHTML = `
        <div class="loading-container">
            <i class="fas fa-spinner loading-icon"></i>
            <p class="loading-text">Loading guides...</p>
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
    
    // Set up navigation button listeners
    if (backFromComingSoonBtn) {
        backFromComingSoonBtn.addEventListener('click', showMainPage);
    }
    
    // Show loading state briefly, then render content
    showLoading();
    
    setTimeout(() => {
        renderBlogPosts(currentLayout);
    }, 500);
    
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
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
