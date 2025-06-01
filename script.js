document.addEventListener('DOMContentLoaded', function() {
    // Featured Slider Functionality
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    function showSlide(index) {
        sliderItems.forEach(item => item.classList.remove('active'));
        
        if (index < 0) {
            currentSlide = sliderItems.length - 1;
        } else if (index >= sliderItems.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        sliderItems[currentSlide].classList.add('active');
    }
    
    if (prevBtn && nextBtn && sliderItems.length > 0) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
        
        // Auto slide every 5 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }
    
    // Filter Tabs Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    
1.    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.dataset.filter;
            const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
            const movieGrid = document.querySelector('.movie-grid');
            
            if (!movieGrid) return;
            
            let filteredMovies = [];
            
            // Filter movies based on button value
            if (filterValue === 'all') {
                filteredMovies = movies;
            } else if (filterValue === 'movie') {
                filteredMovies = movies.filter(movie => movie.type === 'movie');
            } else if (filterValue === 'tvshow') {
                filteredMovies = movies.filter(movie => movie.type === 'tvshow');
            }
            
            // Display filtered movies
            displayMovies(filteredMovies, movieGrid);
        });
    });
    
    // Movie Card Click Functionality
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            const movieTitle = card.querySelector('h3').textContent;
            alert(`You clicked on ${movieTitle}. This would typically open the movie details page.`);
        });
    });
    
    // Replace the existing social share buttons functionality with this:
    
    // Social Share Buttons Functionality
    const shareBtns = document.querySelectorAll('.share-btn');
    
    shareBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.classList[1];
            const pageUrl = encodeURIComponent(window.location.href);
            const pageTitle = encodeURIComponent(document.title);
            let shareUrl = '';
            
            // Get movie details if on movie details page
            let description = '';
            const movieDetailsContainer = document.getElementById('movieDetailsContainer');
            if (movieDetailsContainer) {
                const descriptionElement = movieDetailsContainer.querySelector('.movie-description');
                if (descriptionElement) {
                    description = encodeURIComponent(descriptionElement.textContent.trim());
                }
            }
            
            // Create share URLs based on platform
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://api.whatsapp.com/send?text=${pageTitle} ${pageUrl}`;
                    break;
                case 'telegram':
                    shareUrl = `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;
                    break;
                case 'reddit':
                    shareUrl = `https://www.reddit.com/submit?url=${pageUrl}&title=${pageTitle}`;
                    break;
                case 'pinterest':
                    // Try to get the first image on the page for Pinterest
                    let imageUrl = '';
                    const firstImage = document.querySelector('.movie-poster img');
                    if (firstImage) {
                        imageUrl = encodeURIComponent(firstImage.src);
                    }
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${imageUrl}&description=${pageTitle}`;
                    break;
            }
            
            // Open share dialog in a new window
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
    
    // Load movies from localStorage
    loadMoviesFromLocalStorage();
});

// Replace the existing loadMoviesFromLocalStorage function
function loadMoviesFromLocalStorage() {
    const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
    console.log('Loaded movies from localStorage:', movies.length);
    
    if (movies.length === 0) {
        console.log('No movies found in localStorage');
        // Display a message if no movies are found
        const movieGrid = document.querySelector('.movie-grid');
        if (movieGrid) {
            movieGrid.innerHTML = '<p class="no-results">No movies found. Please add movies through the admin panel.</p>';
        }
        
        // Clear the slider if no movies
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.innerHTML = '<p class="no-results">No featured movies available.</p>';
        }
        return;
    }
    
    // Sort movies by upload date (newest first)
    const sortedMovies = [...movies].sort((a, b) => {
        const dateA = a.uploadDate ? new Date(a.uploadDate) : new Date(0);
        const dateB = b.uploadDate ? new Date(b.uploadDate) : new Date(0);
        return dateB - dateA;
    });
    
    console.log('Sorted movies:', sortedMovies.length);
    
    // Get the latest movies for the featured slider
    const latestMovies = sortedMovies.slice(0, 30);
    
    // Update the featured slider
    updateFeaturedSlider(latestMovies);
    
    // Update the movie grid on the homepage
    updateMovieGrid(sortedMovies);
    
    // Update trending section
    updateTrendingSection();
}

// Modify the updateFeaturedSlider function to match the reference design
function updateFeaturedSlider(movies) {
    const sliderContainer = document.querySelector('.slider-container');
    if (!sliderContainer) return;
    
    sliderContainer.innerHTML = ''; // Clear existing content
    
    movies.forEach((movie, index) => {
        const sliderItem = document.createElement('div');
        sliderItem.className = 'slider-item';
        if (index === 0) sliderItem.classList.add('active');
        sliderItem.dataset.movieId = movie.id;
        
        // Add HD or CAM tag based on quality
        const qualityTag = movie.quality.toUpperCase();
        const qualityClass = movie.quality === 'hd' ? 'hd-tag' : 'cam-tag';
        
        sliderItem.innerHTML = `
            <div class="movie-card large">
                <div class="movie-poster">
                    <img src="${movie.posterUrl}" alt="${movie.title}">
                    <div class="movie-overlay">
                        <div class="play-button"><i class="fas fa-play"></i></div>
                    </div>
                    <div class="${qualityClass}">${qualityTag}</div>
                </div>
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <div class="movie-meta">
                        <span class="year">${movie.year}</span>
                        <span class="duration">${movie.duration}m</span>
                    </div>
                </div>
            </div>
        `;
        
        sliderContainer.appendChild(sliderItem);
    });
    
    // Add click event to slider items
    document.querySelectorAll('.slider-item').forEach(item => {
        item.addEventListener('click', function() {
            const movieId = this.dataset.movieId;
            if (movieId) {
                window.location.href = `movie-details.html?id=${movieId}`;
            }
        });
    });
    
    // Initialize slider with visible items
    initializeMultiItemSlider();
}

// Function to update the movie grid
function updateMovieGrid(movies) {
    const movieGrid = document.querySelector('.movie-grid');
    if (!movieGrid) return;
    
    // Clear existing content
    movieGrid.innerHTML = '';
    
    // Check if we're on a specific page type
    const isTopImdbPage = window.location.pathname.includes('topimdb.html');
    const isMoviesPage = window.location.pathname.includes('movies.html');
    const isTvShowsPage = window.location.pathname.includes('tvshows.html');
    
    // Filter movies based on page type
    let filteredMovies = movies;
    
    if (isTopImdbPage) {
        filteredMovies = movies.filter(movie => movie.topImdb === true || movie.topImdb === 'yes');
    } else if (isMoviesPage) {
        filteredMovies = movies.filter(movie => movie.type === 'movie');
    } else if (isTvShowsPage) {
        filteredMovies = movies.filter(movie => movie.type === 'tvshow');
    }
    
    // Check for search parameter
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredMovies = filteredMovies.filter(movie => {
            return (
                movie.title.toLowerCase().includes(term) ||
                (movie.description && movie.description.toLowerCase().includes(term)) ||
                (movie.genre && movie.genre.some(g => g.toLowerCase().includes(term))) ||
                (movie.country && movie.country.toLowerCase().includes(term))
            );
        });
    }
    
    // Check for genre parameter
    const genreParam = urlParams.get('genre');
    
    if (genreParam) {
        filteredMovies = filteredMovies.filter(movie => {
            return movie.genre && movie.genre.map(g => g.toLowerCase()).includes(genreParam.toLowerCase());
        });
    }
    
    // Display filtered movies
    displayMovies(filteredMovies, movieGrid);
}

// Replace the existing initializeMultiItemSlider function with this improved version:

// Initialize multi-item slider functionality
function initializeMultiItemSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!sliderContainer || sliderItems.length === 0) return;
    
    const itemsPerSlide = 5; // Show 5 items at once
    let currentIndex = 0;
    const totalItems = sliderItems.length;
    const totalSlides = Math.ceil(totalItems / itemsPerSlide);
    let autoSlideInterval;
    
    // Set initial state
    updateSliderPosition();
    
    function updateSliderPosition() {
        const translateValue = -currentIndex * (100 / itemsPerSlide);
        sliderContainer.style.transform = `translateX(${translateValue}%)`;
        
        // Update active state for slider items
        sliderItems.forEach((item, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + itemsPerSlide;
            item.classList.toggle('active', isVisible);
            
            // Add animation class
            item.classList.remove('slide-in');
            if (isVisible) {
                setTimeout(() => {
                    item.classList.add('slide-in');
                }, 50 * (index - currentIndex)); // Staggered animation
            }
        });
        
        // Update button states
        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= totalItems - itemsPerSlide;
        }
    }
    
    function startAutoSlide() {
        stopAutoSlide(); // Clear any existing interval
        
        autoSlideInterval = setInterval(() => {
            if (currentIndex < totalItems - itemsPerSlide) {
                currentIndex += itemsPerSlide;
                if (currentIndex > totalItems - itemsPerSlide) {
                    currentIndex = 0; // Loop back to start
                }
            } else {
                currentIndex = 0; // Loop back to start
            }
            updateSliderPosition();
        }, 5000);
    }
    
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex -= itemsPerSlide;
                if (currentIndex < 0) currentIndex = 0;
                updateSliderPosition();
                stopAutoSlide();
                startAutoSlide(); // Reset the timer
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalItems - itemsPerSlide) {
                currentIndex += itemsPerSlide;
                if (currentIndex > totalItems - itemsPerSlide) {
                    currentIndex = totalItems - itemsPerSlide;
                }
                updateSliderPosition();
                stopAutoSlide();
                startAutoSlide(); // Reset the timer
            }
        });
    }
    
    // Add touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoSlide();
    }, { passive: true });
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to register as a swipe
        const swipeDistance = touchEndX - touchStartX;
        
        if (swipeDistance > swipeThreshold) {
            // Swipe right - go to previous slide
            if (currentIndex > 0) {
                currentIndex -= itemsPerSlide;
                if (currentIndex < 0) currentIndex = 0;
                updateSliderPosition();
            }
        } else if (swipeDistance < -swipeThreshold) {
            // Swipe left - go to next slide
            if (currentIndex < totalItems - itemsPerSlide) {
                currentIndex += itemsPerSlide;
                if (currentIndex > totalItems - itemsPerSlide) {
                    currentIndex = totalItems - itemsPerSlide;
                }
                updateSliderPosition();
            }
        }
    }
    
    // Start auto-slide
    startAutoSlide();
    
    // Pause auto-slide when hovering over the slider
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
}
    
    // Sidebar Navigation Functionality
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const category = this.textContent.trim();
            
            // Don't prevent default for the home link
            if (!this.getAttribute('href').includes('index.html')) {
                e.preventDefault();
                
                // Remove active class from all links
                document.querySelectorAll('.sidebar ul li').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to parent li
                this.parentElement.classList.add('active');
                
                // Filter content based on category
                filterContent(category);
            }
        });
    });
    
    // Function to filter content based on category
    function filterContent(category) {
        const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
        const movieGrid = document.querySelector('.movie-grid');
        
        if (!movieGrid) return;
        
        // Clear existing content
        movieGrid.innerHTML = '';
        
        // Update page heading
        const pageHeading = document.querySelector('.section-title h2');
        if (pageHeading) {
            pageHeading.textContent = category;
        }
        
        let filteredMovies = [];
        
        // Filter based on category
        switch(category) {
            case 'Home':
                filteredMovies = movies;
                break;
            case 'TopIMDB':
                filteredMovies = movies.filter(movie => movie.topImdb === 'yes');
                break;
            case 'Movies':
                filteredMovies = movies.filter(movie => movie.type === 'movie');
                break;
            case 'TV Shows':
                filteredMovies = movies.filter(movie => movie.type === 'tvshow');
                break;
            default:
                // Check if it's a genre
                filteredMovies = movies.filter(movie => 
                    movie.genre && movie.genre.map(g => g.toLowerCase()).includes(category.toLowerCase())
                );
                
                // Check if it's a country
                if (filteredMovies.length === 0) {
                    filteredMovies = movies.filter(movie => 
                        movie.country && movie.country.toLowerCase() === category.toLowerCase()
                    );
                }
        }
        
        // Display filtered movies
        displayMovies(filteredMovies, movieGrid);
    }
    
    // Function to display movies in a grid
    function displayMovies(movies, container) {
        if (movies.length === 0) {
            container.innerHTML = '<p class="no-results">No movies found</p>';
            return;
        }
        
        container.innerHTML = ''; // Clear existing content
        
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.dataset.movieId = movie.id;
            
            // Add HD or CAM tag based on quality
            const qualityTag = movie.quality.toUpperCase();
            const qualityClass = movie.quality === 'hd' ? 'hd-tag' : 'cam-tag';
            
            movieCard.innerHTML = `
                <div class="movie-poster">
                    <img src="${movie.posterUrl}" alt="${movie.title}">
                    <div class="movie-overlay">
                        <div class="play-button"><i class="fas fa-play"></i></div>
                    </div>
                    <div class="${qualityClass}">${qualityTag}</div>
                </div>
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <div class="movie-meta">
                        <span class="year">${movie.year}</span>
                        <span class="duration">${movie.duration}m</span>
                    </div>
                </div>
            `;
            
            container.appendChild(movieCard);
        });
        
        // Add click event to movie cards
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(card => {
            card.addEventListener('click', () => {
                const movieId = card.dataset.movieId;
                if (movieId) {
                    window.location.href = `movie-details.html?id=${movieId}`;
                }
            });
        });
    }
}

// Search Functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

// Create search suggestions container
const searchSuggestionsContainer = document.createElement('div');
searchSuggestionsContainer.className = 'search-suggestions';
searchSuggestionsContainer.style.display = 'none';
searchSuggestionsContainer.style.position = 'absolute';
searchSuggestionsContainer.style.top = '100%';
searchSuggestionsContainer.style.left = '0';
searchSuggestionsContainer.style.width = '100%';
searchSuggestionsContainer.style.backgroundColor = '#1a1c22';
searchSuggestionsContainer.style.borderRadius = '0 0 4px 4px';
searchSuggestionsContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
searchSuggestionsContainer.style.zIndex = '1000';
searchSuggestionsContainer.style.maxHeight = '300px';
searchSuggestionsContainer.style.overflowY = 'auto';

// Add suggestions container to search bar
const searchBar = document.querySelector('.search-bar');
searchBar.style.position = 'relative';
searchBar.appendChild(searchSuggestionsContainer);

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (!searchTerm) return;
    
    const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
    
    // Filter movies based on search term
    const searchResults = movies.filter(movie => {
        return (
            movie.title.toLowerCase().includes(searchTerm) ||
            (movie.description && movie.description.toLowerCase().includes(searchTerm)) ||
            (movie.genre && movie.genre.some(g => g.toLowerCase().includes(searchTerm))) ||
            (movie.country && movie.country.toLowerCase().includes(searchTerm))
        );
    });
    
    // Redirect to search results page with query parameter
    window.location.href = `genre.html?search=${encodeURIComponent(searchTerm)}`;
}

// Search button click event
searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    performSearch();
});

// Search on Enter key
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
    }
});

// Show suggestions as user types
searchInput.addEventListener('input', showSearchSuggestions);

// Add the missing showSearchSuggestions function
function showSearchSuggestions() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (!searchTerm) {
        searchSuggestionsContainer.style.display = 'none';
        return;
    }
    
    const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
    
    // Filter movies based on search term
    const searchResults = movies.filter(movie => {
        return (
            movie.title.toLowerCase().includes(searchTerm) ||
            (movie.description && movie.description.toLowerCase().includes(searchTerm)) ||
            (movie.genre && movie.genre.some(g => g.toLowerCase().includes(searchTerm))) ||
            (movie.country && movie.country.toLowerCase().includes(searchTerm))
        );
    }).slice(0, 5); // Limit to 5 suggestions
    
    if (searchResults.length === 0) {
        searchSuggestionsContainer.style.display = 'none';
        return;
    }
    
    // Display suggestions
    searchSuggestionsContainer.innerHTML = '';
    
    searchResults.forEach(movie => {
        const suggestion = document.createElement('div');
        suggestion.className = 'search-suggestion';
        
        suggestion.innerHTML = `
            <img src="${movie.posterUrl}" alt="${movie.title}" class="suggestion-poster">
            <div class="suggestion-info">
                <div class="suggestion-title">${movie.title}</div>
                <div class="suggestion-meta">${movie.year} • ${movie.duration}m • ${movie.type}</div>
            </div>
        `;
        
        suggestion.addEventListener('click', () => {
            window.location.href = `movie-details.html?id=${movie.id}`;
        });
        
        searchSuggestionsContainer.appendChild(suggestion);
    });
    
    searchSuggestionsContainer.style.display = 'block';
}

// Hide suggestions when clicking outside
document.addEventListener('click', function(e) {
    if (!searchBar.contains(e.target)) {
        searchSuggestionsContainer.style.display = 'none';
    }
});

// Add this function to update the trending section
function updateTrendingSection() {
    const trendingSection = document.querySelector('.trending-section .movie-grid');
    if (!trendingSection) return;
    
    const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
    if (movies.length === 0) {
        trendingSection.innerHTML = '<p class="no-results">No trending movies available</p>';
        return;
    }
    
    // Get featured or top IMDB movies for trending
    const trendingMovies = movies.filter(movie => movie.featured === true || movie.topImdb === true || movie.topImdb === 'yes');
    
    // If no featured/top IMDB movies, just show the latest
    const moviesToShow = trendingMovies.length > 0 ? trendingMovies : movies.slice(0, 12);
    
    // Display trending movies
    displayMovies(moviesToShow, trendingSection);
}

// Call this function when the page loads
// Add this at the end of script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded - initializing movie loading');
    loadMoviesFromLocalStorage();
    
    // Initialize other functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', showSearchSuggestions);
    }
    
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });
    }
});