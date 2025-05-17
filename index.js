// Demo movie data (replace with backend/API in production)
const movies = [
  {
    title: "Thunderbolts (2025)",
    genre: "Action, Adventure, Superhero",
    actors: ["Florence Pugh", "Sebastian Stan", "David Harbour"],
    thumb: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSe5hUGbdfpD9GerQdpjIDe6HgB8Kry2mzGejX7f30FqY2tUqi-",
    year: 2025,
    page: "thunderbolts.html"
  },
  {
    title: "Final Destination (2000)",
    genre: "Horror, Thriller, Supernatural",
    actors: [
      "Devon Sawa", "Ali Larter", "Kerr Smith", "Kristen Cloke",
      "Seann William Scott", "Chad Donella", "Amanda Detmer",
      "Daniel Roebuck", "Roger Guenveur Smith"
    ],
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRY-xDKrIC0cj-mHHeX9A6K3s3fXn4FjsycWtbRBx2Jd3HcuF",
    year: 2000,
    page: "finaldestination.html"
  }
];

// Render latest uploads
function renderLatest() {
  const container = document.getElementById('latest-uploads');
  container.innerHTML = movies.slice(0, 8).map(function(movie) {
    return `
      <div class="movie-card">
        <a href="${movie.page}">
          <img class="movie-thumb" src="${movie.thumb}" alt="${movie.title}">
        </a>
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
           movie.actors.some(function(actor) {
             return actor.toLowerCase().includes(query);
           });
  });
  const section = document.getElementById('search-section');
  const container = document.getElementById('search-results');
  if (query === "") {
    section.style.display = 'none';
    return;
  }
  section.style.display = 'block';
  if (results.length === 0) {
    container.innerHTML = '<div class="no-results">No movies found.</div>';
  } else {
    container.innerHTML = results.map(function(movie) {
      return `
        <div class="movie-card">
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
