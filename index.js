// Demo movie data (replace with backend/API in production)
const movies = [
  {
    "title": "Thunderbolts",
    "genre": "Action, Mystery",
    "actors": ["Florence Pugh", "Sebastian Stan", "David Harbour"],
    "thumb": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSe5hUGbdfpD9GerQdpjIDe6HgB8Kry2mzGejX7f30FqY2tUqi-",
    "year": 2025,
    "page": null,
    "director": null,
    "runtime": "2h 47m", 
    "rating": "PG-13",
    "language": "Hindi & English",
    "subtitle": "YES / English",
    "size": "770MB - 1.4GB - 2.6GB",
    "quality": "480p, 720p",
    "format": "MKV",
    "description": null,
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/dummy.html",
    "play": null,
    "writer": null
  },
  {
    "title": "THE SEED OF THE SACRED FIG",
    "genre": "Drama, Thriller, Crime",
    "actors": [
      "Matt Actor",
      "Foggy Friend",
      "Karen Page"
    ],
    "thumb": "https://vegamovies.uy/uploads/posts/covers/Poster-The-Extraordinary-Adventures-2010.webp",
    "year": 2025,
    "director": "Marvel Director",
    "runtime": "N/A",
    "rating": "PG-13",
    "subtitle": "YES / English",
    "size": "770MB - 1.4GB - 2.6GB",
    "quality": "480p, 720p, 1080p",
    "format": "MKV",
    "description": "HUHIHHHKJHK",
    "review": null,
    "download": "https://www.w3schools.com/html/html_mobile.asp",
    "writer": null
  }
 
];

// Render latest uploads
function renderLatest() {
  const container = document.getElementById('latest-uploads');
  container.innerHTML = movies.map(function(movie) {
    return `
      <div class="movie-card" onclick="showMovieDetails(${movies.indexOf(movie)})">
        <img class="movie-thumb" src="${movie.thumb}" alt="${movie.title}">
        <div class="movie-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-meta">${movie.genre} | ${movie.year}</div>
        </div>
      </div>
    `;
  }).join('');
}
renderLatest();

// Search functionality  
function searchMovies() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  const results = movies.filter(function(movie) {
    return movie.title.toLowerCase().includes(query) ||
           movie.genre.toLowerCase().includes(query) ||
           (movie.actors && movie.actors.some(function(actor) {
             return actor.toLowerCase().includes(query);
           }));
  });
  const section = document.getElementById('search-section');
  const container = document.getElementById('search-results');
  if (query === "") {
    section.style.display = 'none';
    container.innerHTML = "";
    return;
  }
  section.style.display = 'block';
  if (results.length === 0) {
    container.innerHTML = '<div class="no-results">No movies found.</div>';
  } else {
    // Show as a dropdown list with image and icon like in the reference
    container.innerHTML = `
      <div class="search-dropdown">
        ${results.map(function(movie, index) {
          return `
            <div class="search-result-item" onclick="showMovieDetails(${movies.indexOf(movie)})">
              <img class="search-thumb" src="${movie.thumb}" alt="${movie.title}">
              <span class="search-title">${movie.title}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

// Movie Details Panel Functions - Enhanced Version
function showMovieDetails(movieIndex) {
  const movie = movies[movieIndex];
  if (!movie) return;
  
  // Set movie details in the panel
  const backdrop = document.getElementById('movie-details-backdrop');
  if (backdrop) backdrop.src = movie.thumb; // Use thumbnail as backdrop
  
  document.getElementById('movie-details-poster').src = movie.thumb;
  document.getElementById('movie-details-title').textContent = movie.title;
  
  // Set meta information with improved formatting
  const metaHTML = `
    <span>${movie.year || 'N/A'}</span>
    <span>${movie.rating || 'N/A'}</span>
    <span>${movie.runtime || 'N/A'}</span>
    <span>${movie.genre || 'N/A'}</span>
    ${movie.director ? `<span>Director: ${movie.director}</span>` : ''}
  `;
  document.getElementById('movie-details-meta').innerHTML = metaHTML;
  
  // Set description with fallback
  document.getElementById('movie-details-description').textContent = 
    movie.description || 'No description available for this movie.';
  
  // Set cast with improved handling
  const castHTML = movie.actors && movie.actors.length > 0 ?
    movie.actors.map(actor => `<div class="movie-details-cast-item">${actor}</div>`).join('') :
    '<div class="movie-details-cast-item">Cast information not available</div>';
  document.getElementById('movie-details-cast').innerHTML = castHTML;
  
  // Set a single download button and hide the others
  const downloadLink = movie.download || '#';
  const download480p = document.getElementById('download-480p');
  const download720p = document.getElementById('download-720p');
  const download1080p = document.getElementById('download-1080p');
  
  if (download480p) {
    download480p.href = downloadLink;
    download480p.textContent = 'DOWNLOAD';
    // Add ripple effect on click
    download480p.addEventListener('click', createRipple);
  }
  
  if (download720p) download720p.style.display = 'none';
  if (download1080p) download1080p.style.display = 'none';
  
  // Show the panel with smooth animation
  const overlay = document.getElementById('movie-details-overlay');
  overlay.classList.add('active');
  
  // Prevent body scrolling when panel is open
  document.body.style.overflow = 'hidden';
  
  // For mobile: ensure the panel is properly positioned and scrollable
  if (window.innerWidth <= 768) {
    // Scroll to top of panel for better mobile experience
    setTimeout(() => {
      const panel = document.querySelector('.movie-details-panel');
      if (panel) {
        panel.scrollTop = 0;
      }
      
      // Add visual cue to indicate scrollability
      const content = document.querySelector('.movie-details-content');
      if (content && content.scrollHeight > content.clientHeight) {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = `
          <div class="scroll-text">Scroll to Download</div>
          <div class="scroll-arrow">↓</div>
        `;
        content.appendChild(scrollIndicator);
        
        // Add fade-out animation when scrolling starts
        content.addEventListener('scroll', function() {
          if (scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            setTimeout(() => {
              scrollIndicator.remove();
            }, 300); // Remove after fade animation
          }
        }, { once: true });

        // Add CSS for scroll indicator
        const style = document.createElement('style');
        style.textContent = `
          .scroll-indicator {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(229, 9, 20, 0.9);
            padding: 10px 20px;
            border-radius: 20px;
            color: white;
            text-align: center;
            transition: opacity 0.3s ease;
            z-index: 1000;
          }
          .scroll-text {
            font-size: 14px;
            margin-bottom: 5px;
          }
          .scroll-arrow {
            font-size: 20px;
            animation: bounce 1s infinite;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(5px); }
          }
        `;
        document.head.appendChild(style);
      }
    }, 100);
    // Add touch swipe down to close for mobile
    const panel = document.querySelector('.movie-details-panel');
    let touchStartY = 0;
    let touchEndY = 0;
    
    panel.addEventListener('touchstart', function(e) {
      touchStartY = e.changedTouches[0].screenY;
    }, {passive: true});
    
    panel.addEventListener('touchend', function(e) {
      touchEndY = e.changedTouches[0].screenY;
      const content = document.querySelector('.movie-details-content');
      
      if (touchEndY - touchStartY > 100 && 
          (!content || content.scrollTop <= 0)) {
        // Swipe down detected at top of panel
        closeMovieDetails();
      }
    }, {passive: true});
  }
}

// Function to create ripple effect on buttons
function createRipple(event) {
  const button = event.currentTarget;
  
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple');
  
  // Remove existing ripples
  const ripple = button.querySelector('.ripple');
  if (ripple) {
    ripple.remove();
  }
  
  button.appendChild(circle);
}

function closeMovieDetails() {
  const overlay = document.getElementById('movie-details-overlay');
  overlay.classList.remove('active');
  
  // Re-enable body scrolling
  document.body.style.overflow = '';
  
  // Remove event listeners to prevent memory leaks
  const download480p = document.getElementById('download-480p');
  if (download480p) {
    download480p.removeEventListener('click', createRipple);
  }
}

// Close movie details panel when clicking outside
document.getElementById('movie-details-overlay').addEventListener('click', function(event) {
  if (event.target === this) {
    closeMovieDetails();
  }
});

// Close movie details with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && document.getElementById('movie-details-overlay').classList.contains('active')) {
    closeMovieDetails();
  }
});

// Render filtered movies
function renderFilteredMovies(filteredMovies) {
  const container = document.getElementById('latest-uploads');
  if (filteredMovies.length === 0) {
    container.innerHTML = '<div class="no-results">No movies found for this filter.</div>';
  } else {
    container.innerHTML = filteredMovies.map(function(movie) {
      return `
        <div class="movie-card" onclick="showMovieDetails(${movies.indexOf(movie)})">
          <img class="movie-thumb" src="${movie.thumb}" alt="${movie.title}">
          <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-meta">${movie.genre} | ${movie.year}</div>
          </div>
        </div>
      `;
    }).join('');
  }
}
// Show/Hide Dropdown Menus with Netflix-inspired styling
function showDropdown(id) {
  const dropdown = document.getElementById(id);
  
  // Clear any existing styles first
  const existingStyle = document.getElementById('netflix-dropdown-style');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Reset dropdown content from stored data
  if (!dropdown.dataset.originalContent) {
    dropdown.dataset.originalContent = dropdown.innerHTML;
  } else {
    dropdown.innerHTML = dropdown.dataset.originalContent;
  }

  dropdown.style.display = 'block';
  dropdown.style.position = 'absolute';
  dropdown.style.backgroundColor = '#141414';
  dropdown.style.borderRadius = '4px';
  dropdown.style.padding = '20px';
  dropdown.style.width = '300px';
  dropdown.style.zIndex = '1000';
  dropdown.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
  dropdown.style.border = '1px solid rgba(255,255,255,0.15)';

  // Get content and organize into grid layout
  const items = dropdown.dataset.originalContent.split('<a').filter(item => item.trim());
  
  // Create grid container
  dropdown.innerHTML = `
    <div class="netflix-dropdown-grid">
      ${items.map(item => `
        <div class="netflix-dropdown-item"><a${item}</div>
      `).join('')}
    </div>
  `;

  // Add custom styles with unique ID
  const style = document.createElement('style');
  style.id = 'netflix-dropdown-style';
  style.textContent = `
    .netflix-dropdown-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 15px;
      max-height: 400px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: #E50914 #141414;
    }
    .netflix-dropdown-grid::-webkit-scrollbar {
      width: 5px;
    }
    .netflix-dropdown-grid::-webkit-scrollbar-track {
      background: #141414;
    }
    .netflix-dropdown-grid::-webkit-scrollbar-thumb {
      background: #E50914;
      border-radius: 5px;
    }
    .netflix-dropdown-item {
      padding: 10px;
      background: rgba(255,255,255,0.1);
      border-radius: 4px;
      transition: all 0.2s ease;
      cursor: pointer;
      text-align: center;
    }
    .netflix-dropdown-item:hover {
      background: rgba(229,9,20,0.7) !important;
      transform: scale(1.05);
    }
    .netflix-dropdown-item a {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      display: block;
    }
  `;
  document.head.appendChild(style);
}

function hideDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown) {
    dropdown.style.display = 'none';
  }
}

function hideAllDropdowns() {
  ['genre-dropdown', 'year-dropdown', 'rating-dropdown'].forEach(id => {
    hideDropdown(id);
  });
}

// Function to reset all filters and show all movies
function resetToHome() {
  hideAllDropdowns();
  renderLatest();
  const activeButtons = document.querySelectorAll('.platform-button.active');
  activeButtons.forEach(button => button.classList.remove('active'));
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const searchSection = document.getElementById('search-section');
  if (searchSection) searchSection.style.display = 'none';
}

// Function to show all movies
function showAllMovies() {
  hideAllDropdowns();
  renderLatest();
}

// Function to show random recommended movies
function showRecommendations() {
  hideAllDropdowns();
  
  // Get a copy of the movies array and shuffle it
  const shuffledMovies = [...movies].sort(() => Math.random() - 0.5);
  
  // Take first 50 movies as recommendations (or all if less than 50)
  const recommendedMovies = shuffledMovies.slice(0, Math.min(50, shuffledMovies.length));
  
  const container = document.getElementById('latest-uploads');
  container.innerHTML = `
    <h3 style="color: #E50914; margin-bottom: 20px;">Recommended Movies</h3>
    <div class="recommendations-grid" style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    ">
      ${recommendedMovies.map(movie => `
        <div class="movie-card" onclick="showMovieDetails(${movies.indexOf(movie)})">
          <img class="movie-thumb" src="${movie.thumb}" alt="${movie.title}">
          <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-meta">${movie.genre || 'N/A'} | ${movie.year || 'N/A'}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.platform-button')) {
    hideAllDropdowns();
  }
});

// Platform Menu Functionality - Move these outside DOMContentLoaded
function populateDropdowns() {
  populateGenreDropdown();
  populateYearDropdown();
  populateRatingDropdown();
}

function populateGenreDropdown() {
  const genreDropdown = document.getElementById('genre-dropdown');
  if (!genreDropdown) return;
  
  const genres = [...new Set(movies.flatMap(movie => 
    movie.genre ? movie.genre.split(',').map(g => g.trim()) : []
  ))].sort();
  
  genreDropdown.innerHTML = genres.map(genre => 
    `<a href="#" onclick="filterMovies('genre', '${genre}'); return false;">${genre}</a>`
  ).join('');
}

function populateYearDropdown() {
  const yearDropdown = document.getElementById('year-dropdown');
  if (!yearDropdown) return;
  
  const years = [...new Set(movies
    .map(movie => movie.year)
    .filter(year => year !== undefined)
  )].sort((a, b) => b - a); // Sort years in descending order
  
  yearDropdown.innerHTML = years.map(year =>
    `<a href="#" onclick="filterMovies('year', '${year}'); return false;">${year}</a>`
  ).join('');
}

function populateRatingDropdown() {
  const ratingDropdown = document.getElementById('rating-dropdown');
  if (!ratingDropdown) return;
  
  const ratings = [...new Set(movies
    .map(movie => movie.rating)
    .filter(rating => rating && rating !== 'NR')
  )].sort();
  
  ratingDropdown.innerHTML = ratings.map(rating =>
    `<a href="#" onclick="filterMovies('rating', '${rating}'); return false;">${rating}</a>`
  ).join('');
}

// Filter movies based on type and value
function filterMovies(filterType, filterValue) {
  let filteredMovies = [...movies];

  switch(filterType) {
    case 'genre':
      filteredMovies = filteredMovies.filter(movie => 
        movie.genre && movie.genre.toLowerCase().includes(filterValue.toLowerCase())
      );
      break;
    case 'year':
      filteredMovies = filteredMovies.filter(movie => 
        movie.year && movie.year === parseInt(filterValue)
      );
      break;
    case 'rating':
      filteredMovies = filteredMovies.filter(movie => 
        movie.rating && movie.rating.toLowerCase() === filterValue.toLowerCase()
      );
      break;
  }

  renderFilteredMovies(filteredMovies);
  hideAllDropdowns();
}

// Add home button functionality
function addHomeButton() {
  const homeBtn = document.querySelector('.home-btn');
  if (homeBtn) {
    homeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      resetToHome();
    });
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderSlideshowFromMovies() {
  const slideshow = document.getElementById('movie-slideshow');
  if (!slideshow) return;
  const shuffled = shuffleArray([...movies]);
  let html = '';
  for (let i = 0; i < 2; i++) {
    shuffled.forEach(movie => {
      html += `
        <div class="movie-card-slideshow">
          <img src="${movie.thumb}" alt="${movie.title}">
          <div class="movie-card-title-slideshow">${movie.title}</div>
        </div>
      `;
    });
  }
  slideshow.innerHTML = html;
}

// Initial population of dropdowns and home button when the page loads
document.addEventListener('DOMContentLoaded', function() {
  renderLatest();
  renderSlideshowFromMovies();
  populateDropdowns(); // Call the function to populate dropdowns
  addHomeButton();
});