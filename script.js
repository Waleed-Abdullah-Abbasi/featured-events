// ============================================
// Event Data (Simulated JSON API Response)
// ============================================
const eventsData = [
    {
        id: 1,
        name: "Summer Music Festival",
        category: "Music",
        date: "January 15, 2026",
        time: "6:00 PM - 11:00 PM",
        location: "Central Park Amphitheater",
        description: "Experience an unforgettable evening with top artists and bands. Enjoy live performances, food trucks, and a vibrant atmosphere under the stars.",
        price: "$45",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80"
    },
    {
        id: 2,
        name: "Tech Startup Networking",
        category: "Business",
        date: "January 20, 2026",
        time: "2:00 PM - 5:00 PM",
        location: "Innovation Hub, Downtown",
        description: "Connect with entrepreneurs, investors, and tech enthusiasts. Share ideas, find co-founders, and discover the latest innovations in the startup ecosystem.",
        price: "Free",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
    },
    {
        id: 3,
        name: "International Food Festival",
        category: "Food & Drink",
        date: "January 25, 2026",
        time: "11:00 AM - 8:00 PM",
        location: "Riverside Market Square",
        description: "Taste authentic cuisines from around the world. With over 50 food vendors, cooking demos, and live entertainment, this is a food lover's paradise.",
        price: "$15",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
    },
    {
        id: 4,
        name: "Contemporary Art Exhibition",
        category: "Art & Culture",
        date: "February 1, 2026",
        time: "10:00 AM - 6:00 PM",
        location: "Metropolitan Art Gallery",
        description: "Explore stunning contemporary artworks from emerging and established artists. Features paintings, sculptures, and interactive installations.",
        price: "$20",
        image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&q=80"
    },
    {
        id: 5,
        name: "City Marathon Challenge",
        category: "Sports",
        date: "February 10, 2026",
        time: "7:00 AM - 12:00 PM",
        location: "City Center Start Line",
        description: "Join thousands of runners in this annual marathon. Whether you're a seasoned runner or a beginner, there's a category for everyone!",
        price: "$35",
        image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80"
    }
];

// ============================================
// State Management
// ============================================
let allEvents = [...eventsData];
let filteredEvents = [...eventsData];

// ============================================
// DOM Elements
// ============================================
const eventsGrid = document.getElementById('events-grid');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.getElementById('nav-links');

// ============================================
// Event Card Rendering
// ============================================
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.setAttribute('data-event-id', event.id);
    
    card.innerHTML = `
        <img src="${event.image}" alt="${event.name}" class="event-image" loading="lazy">
        <div class="event-content">
            <div class="event-header">
                <span class="event-category">${event.category}</span>
                <h3 class="event-name">${event.name}</h3>
            </div>
            <div class="event-meta">
                <div class="event-meta-item">
                    <svg class="event-meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>${event.date}</span>
                </div>
                <div class="event-meta-item">
                    <svg class="event-meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>${event.time}</span>
                </div>
                <div class="event-meta-item">
                    <svg class="event-meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>${event.location}</span>
                </div>
            </div>
            <p class="event-description">${event.description}</p>
            <div class="event-footer">
                <span class="event-price">${event.price}</span>
                <button class="event-register-btn" onclick="handleRegister(${event.id})">Register</button>
            </div>
        </div>
    `;
    
    return card;
}

function renderEvents(events) {
    eventsGrid.innerHTML = '';
    
    if (events.length === 0) {
        noResults.style.display = 'block';
        eventsGrid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        eventsGrid.style.display = 'grid';
        
        events.forEach((event, index) => {
            const card = createEventCard(event);
            card.style.animationDelay = `${index * 0.1}s`;
            eventsGrid.appendChild(card);
        });
    }
}

// ============================================
// Search Functionality
// ============================================
function filterEvents(searchQuery) {
    const query = searchQuery.toLowerCase().trim();
    
    if (query === '') {
        filteredEvents = [...allEvents];
    } else {
        filteredEvents = allEvents.filter(event => 
            event.name.toLowerCase().includes(query) ||
            event.category.toLowerCase().includes(query) ||
            event.location.toLowerCase().includes(query) ||
            event.description.toLowerCase().includes(query)
        );
    }
    
    renderEvents(filteredEvents);
}

// Debounce function for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedFilter = debounce((query) => filterEvents(query), 300);

// ============================================
// Event Handlers
// ============================================
function handleRegister(eventId) {
    const event = allEvents.find(e => e.id === eventId);
    if (event) {
        alert(`Thank you for your interest in "${event.name}"!\n\nIn a real application, this would redirect you to a registration form.`);
    }
}

function handleMobileMenuToggle() {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

function handleNavLinkClick(e) {
    if (window.innerWidth <= 768) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
    
    // Update active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    e.target.classList.add('active');
}

// ============================================
// Scroll Effects
// ============================================
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
}

// ============================================
// Event Listeners
// ============================================
searchInput.addEventListener('input', (e) => {
    debouncedFilter(e.target.value);
});

mobileMenuToggle.addEventListener('click', handleMobileMenuToggle);

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
});

window.addEventListener('scroll', debounce(handleScroll, 100));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        const isClickInsideNav = navLinks.contains(e.target);
        const isClickOnToggle = mobileMenuToggle.contains(e.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
});

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderEvents(filteredEvents);
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('🎉 Featured Events page loaded successfully!');
    console.log(`📊 Total events: ${allEvents.length}`);
});
