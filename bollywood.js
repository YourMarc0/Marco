// Demo movie data (replace with backend/API in production)
const movies = [
 
  {
    title: " Bhool Chuk Maaf (2025)",
    genre: "Fantasy, Romantic Comedy",
    actors: ["Rajkummar Rao", "Wamiqa Gabbi", "Seema Pahwa"],
    thumb: "https://m.media-amazon.com/images/M/MV5BZTAwNjIzZjEtZjk1MC00NTI5LTg0MjctZTBkMWVhMWMzMjg5XkEyXkFqcGc@._V1_QL75_UX298.5_.jpg",
    year: 2025,
    page: "https://imthemarco.blogspot.com/2025/05/bhool-chuk-maaf-2025.html"
  },
  {
    title: "L2: Empuraan",
    genre: "Action, Thriller, Political",
    actors: ["Mohanlal", "Prithviraj Sukumaran", "Tovino Thomas", "Indrajith Sukumaran"],
    thumb: "https://upload.wikimedia.org/wikipedia/en/3/35/L2_-_Empuraan_poster.jpg",
    year: 2025,
    page: "https://imthemarco.blogspot.com/2025/05/l2-empuraan.html",
    director: "Prithviraj Sukumaran",
    runtime: "TBA",
    rating: "NR",
    language: "Hindi & English",
    subtitle: "YES / English",
    size: "11GB",
    quality: "480p || 720p || 1080p",
    format: "MKV",
    description: "L2: Empuraan is the highly anticipated sequel to the blockbuster *Lucifer*. The film delves deeper into the mysterious world of Khureshi-Ab'ram, played by Mohanlal, as he expands his political and criminal empire on a global scale.",
    download: "https://gofile.io/d/r3HDLz",
    play: "https://gofile.io/d/r3HDLz"
  }

];

// Render latest uploads
function renderLatest() {
  const container = document.getElementById('latest-uploads');
  container.innerHTML = movies.map(function(movie) {
    return `
      <a href="${movie.page}" class="movie-card">
        <img class="movie-thumb" src="${movie.thumb}" alt="${movie.title}">
        <div class="movie-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-meta">${movie.genre} | ${movie.year}</div>
        </div>
      </a>
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
        ${results.map(function(movie) {
          return `
            <a class="search-result-item" href="${movie.page}">
              <img class="search-thumb" src="${movie.thumb}" alt="${movie.title}">
              <span class="search-title">${movie.title}</span>
            </a>
          `;
        }).join('')}
      </div>
    `;
  }
}
// Platform Menu Functionality
// Populate dropdowns
function populateDropdowns() {
  populateGenreDropdown();
  populateYearDropdown(); 
  populateRatingDropdown();
}

// Add

function populateGenreDropdown() {
  const genreDropdown = document.getElementById('genre-dropdown');
  const genres = [...new Set(movies.flatMap(movie => movie.genre ? movie.genre.split(',').map(g => g.trim()) : []))].sort();
  genreDropdown.innerHTML = `
    ${genres.map(genre => `<a href="#" onclick="filterMovies('genre', '${genre}')">${genre}</a>`).join('')}
  `;
}

function populateYearDropdown() {
  const yearDropdown = document.getElementById('year-dropdown');
  const years = [...new Set(movies.map(movie => movie.year).filter(year => year !== undefined))].sort((a, b) => b - a);
  yearDropdown.innerHTML = `
    ${years.map(year => `<a href="#" onclick="filterMovies('year', '${year}')">${year}</a>`).join('')}
  `;
}

function populateRatingDropdown() {
  const ratingDropdown = document.getElementById('rating-dropdown');
  const ratings = [...new Set(movies.map(movie => movie.rating).filter(rating => rating !== undefined && rating !== 'NR'))].sort();
  ratingDropdown.innerHTML = `
    ${ratings.map(rating => `<a href="#" onclick="filterMovies('rating', '${rating}')">${rating}</a>`).join('')}
  `;
}

// Filter movies based on type and value
function filterMovies(filterType, filterValue) {
  let filteredMovies = movies;

  if (filterType === 'genre') {
    filteredMovies = movies.filter(movie => movie.genre && movie.genre.toLowerCase().includes(filterValue.toLowerCase()));
  } else if (filterType === 'year') {
    filteredMovies = movies.filter(movie => movie.year && movie.year === parseInt(filterValue));
  } else if (filterType === 'rating') {
    filteredMovies = movies.filter(movie => movie.rating && movie.rating.toLowerCase() === filterValue.toLowerCase());
  }

  renderFilteredMovies(filteredMovies);
  hideAllDropdowns();
}

// Render filtered movies
function renderFilteredMovies(filteredMovies) {
  const container = document.getElementById('latest-uploads');
  if (filteredMovies.length === 0) {
    container.innerHTML = '<div class="no-results">No movies found for this filter.</div>';
  } else {
    container.innerHTML = filteredMovies.map(function(movie) {
      return `
        <a href="${movie.page}" class="movie-card">
          <img class="movie-thumb" src="${movie.thumb}" alt="${movie.title}">
          <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-meta">${movie.genre} | ${movie.year}</div>
          </div>
        </a>
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

// Function to show recommended movies (rating > 8)
function showRecommendations() {
  hideAllDropdowns();
  const recommendedMovies = movies.filter(movie => {
    return movie.rating && !isNaN(movie.rating) && parseFloat(movie.rating) > 8;
  });
  const container = document.getElementById('latest-uploads');
  container.innerHTML = `
    <h3 style="color: #E50914; margin-bottom: 20px;">Recommended Movies</h3>
    <div class="recommendations-grid" style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    ">
      ${recommendedMovies.map(movie => `
        <a href="${movie.page}" class="movie-card" style="
          position: relative;
          transition: transform 0.3s ease;
          &:hover {
            transform: scale(1.05);
          }
        ">
          <img class="movie-thumb" src="${movie.thumb}" alt="${movie.title}" style="
            width: 100%;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          ">
          <div class="movie-info" style="
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 15px;
            background: linear-gradient(transparent, rgba(0,0,0,0.9));
            border-radius: 0 0 4px 4px;
          ">
            <div class="movie-title" style="color: #fff; font-weight: bold;">${movie.title}</div>
            <div class="movie-meta" style="color: #ccc; font-size: 0.9em;">${movie.genre} | ${movie.year}</div>
          </div>
        </a>
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

// Initial population of dropdowns and home button when the page loads
document.addEventListener('DOMContentLoaded', function() {
  renderLatest();
  renderSlideshowFromMovies();
  populateDropdowns();
  addHomeButton();
});

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