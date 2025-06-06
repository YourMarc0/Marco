// Demo movie data (replace with backend/API in production)
const movies = [
  {
    "title": "Housefull 5",
    "genre": "Comedy, Mystery, Thriller",
    "actors": [
      "Akshay Kumar",
      "Riteish Deshmukh",
      "Abhishek Bachchan",
      "Jacqueline Fernandez",
      "Nargis Fakhri",
      "Sonam Bajwa",
      "Sanjay Dutt",
      "Jackie Shroff",
      "Nana Patekar",
      "Fardeen Khan",
      "Shreyas Talpade",
      "Dino Morea",
      "Chitrangda Singh",
      "Soundarya Sharma",
      "Chunky Panday",
      "Johnny Lever",
      "Nikitin Dheer",
      "Ranjeet"
    ],
    "thumb": "https://upload.wikimedia.org/wikipedia/en/e/ec/Housefull_5.jpg",
    "year": 2025,
    "page": null,
    "director": "Tarun Mansukhani",
    "runtime": "2h 45min",
    "rating": "U/A",
    "language": "Hindi dubbed",
    "subtitle": "Yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "format": null,
    "description": "Set aboard a luxurious 20-story cruise ship, billionaire Mr. Dobriyal's 100th birthday celebration takes a dark turn when he is found dead. Chaos ensues as three impostors, each claiming to be his long-lost heir named 'Jolly', compete for his fortune. Amidst the confusion, a series of murders occur, and two fake cops further complicate matters. The film introduces suspense elements and multiple climactic twists—each theatre screening may feature a different killer reveal to keep audiences guessing until the end.",
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/9-houseful.html",
    "play": "https://imthemarco.blogspot.com/2025/06/9-houseful.html",
    "writer": "Farhad Samji, Tarun Mansukhani"
  },  
  {
    "title": "The Bhootnii",
    "genre": "Comedy, Horror",
    "actors": [
      "Sanjay Dutt",
      "Mouni Roy",
      "Sunny Singh",
      "Palak Tiwari",
      "Aasif Khan",
      "Nikunj Lotia"
    ],
    "thumb": "https://m.media-amazon.com/images/M/MV5BYmIyMWMzMTItNDJhMS00MTBlLWI4MDYtZGQ2ZjQ4ZWI2MDU5XkEyXkFqcGc@._V1_.jpg",
    "year": 2025,
    "page": null,
    "director": "Sidhaant Sachdev",
    "runtime": "2h 10min",
    "rating": "UA",
    "language": "Hindi",
    "subtitle": "Yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "format": null,
    "description": "Set in Delhi's St. Vincent College, the film revolves around the legend of the 'Virgin Tree', believed to grant true love on Valentine's Day. However, every year on Holika Dahan, a student mysteriously dies, their soul claimed by a vengeful spirit. Shantanu, heartbroken after a recent breakup, seeks solace under the Virgin Tree, awakening Mohabbat, a ghost who becomes infatuated with him. As Mohabbat's obsession grows, she begins haunting anyone who comes between her and Shantanu. To combat the escalating supernatural occurrences, the college administration enlists Baba, a seasoned para-physicist and alumnus of the institution, to uncover the mystery.",
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/8bhootni.html",
    "play": "https://imthemarco.blogspot.com/2025/06/8bhootni.html",
    "writer": "Sidhaant Sachdev, Vankush Arora"
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
        // Create a floating download button that appears immediately
        const floatingDownload = document.createElement('div');
        floatingDownload.className = 'floating-download-indicator';
        floatingDownload.innerHTML = `
          <div class="floating-download-text">Download Available</div>
          <div class="floating-download-arrow">↓</div>
        `;
        document.body.appendChild(floatingDownload);
        
        // Add CSS for floating download indicator
        const style = document.createElement('style');
        style.textContent = `
          .floating-download-indicator {
            position: fixed;
            bottom: 70px;
            right: 20px;
            background: #e50914;
            color: white;
            padding: 10px 15px;
            border-radius: 50px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            z-index: 1001;
            display: flex;
            flex-direction: column;
            align-items: center;
            animation: floatIn 0.5s forwards, pulse 2s infinite;
            cursor: pointer;
          }
          
          @keyframes floatIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          .floating-download-text {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5px;
          }
          
          .floating-download-arrow {
            font-size: 20px;
            animation: bounce 1s infinite;
          }
        `;
        document.head.appendChild(style);
        
        // Auto-scroll to download section after a delay
        setTimeout(() => {
          // Find the download section
          const downloadSection = document.querySelector('.movie-details-download');
          if (downloadSection && content) {
            // Calculate position of download section relative to content
            const downloadPosition = downloadSection.offsetTop;
            
            // Smooth scroll to download section
            content.scrollTo({
              top: downloadPosition - 20, // Scroll slightly above for better visibility
              behavior: 'smooth'
            });
            
            // Highlight the download button with a pulsing effect
            const downloadButton = document.getElementById('download-480p');
            if (downloadButton) {
              downloadButton.classList.add('download-highlight');
              
              // Add CSS for download button highlight
              const highlightStyle = document.createElement('style');
              highlightStyle.textContent = `
                .download-highlight {
                  animation: downloadPulse 2s infinite;
                }
                
                @keyframes downloadPulse {
                  0% { transform: scale(1); box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3); }
                  50% { transform: scale(1.05); box-shadow: 0 8px 25px rgba(229, 9, 20, 0.5); }
                  100% { transform: scale(1); box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3); }
                }
              `;
              document.head.appendChild(highlightStyle);
              
              // Remove highlight after a few seconds
              setTimeout(() => {
                downloadButton.classList.remove('download-highlight');
              }, 5000);
            }
          }
          
          // Remove floating download indicator when user interacts with content
          content.addEventListener('touchstart', function() {
            const indicator = document.querySelector('.floating-download-indicator');
            if (indicator) {
              indicator.style.animation = 'floatOut 0.3s forwards';
              
              // Add float out animation
              const floatOutStyle = document.createElement('style');
              floatOutStyle.textContent = `
                @keyframes floatOut {
                  from { transform: translateY(0); opacity: 1; }
                  to { transform: translateY(20px); opacity: 0; }
                }
              `;
              document.head.appendChild(floatOutStyle);
              
              setTimeout(() => {
                indicator.remove();
              }, 300);
            }
          }, { once: true });
          
          // Make floating indicator clickable to scroll to download
          const indicator = document.querySelector('.floating-download-indicator');
          if (indicator) {
            indicator.addEventListener('click', function() {
              // Find the download section
              const downloadSection = document.querySelector('.movie-details-download');
              if (downloadSection && content) {
                // Calculate position of download section relative to content
                const downloadPosition = downloadSection.offsetTop;
                
                // Smooth scroll to download section
                content.scrollTo({
                  top: downloadPosition - 20,
                  behavior: 'smooth'
                });
                
                // Remove the indicator
                this.style.animation = 'floatOut 0.3s forwards';
                setTimeout(() => {
                  this.remove();
                }, 300);
              }
            });
          }
        }, 1500); // Delay before auto-scrolling to download section
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
  
  // Remove any floating download indicators
  const floatingIndicator = document.querySelector('.floating-download-indicator');
  if (floatingIndicator) {
    floatingIndicator.remove();
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