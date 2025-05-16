// Demo movie data (replace with backend/API in production)
const movies = [
  {
    title: "The Lost City",
    genre: "Adventure",
    actors: ["Sandra Bullock", "Channing Tatum"],
    thumb: "https://image.tmdb.org/t/p/w500/1.jpg",
    year: 2022
  },
  {
    title: "Night Hunter",
    genre: "Thriller",
    actors: ["Henry Cavill"],
    thumb: "https://image.tmdb.org/t/p/w500/2.jpg",
    year: 2021
  },
  {
    title: "Cosmic Dawn",
    genre: "Sci-Fi",
    actors: ["Camille Rowe"],
    thumb: "https://image.tmdb.org/t/p/w500/3.jpg",
    year: 2023
  },
  {
    title: "Jungle Cruise",
    genre: "Adventure",
    actors: ["Dwayne Johnson", "Emily Blunt"],
    thumb: "https://image.tmdb.org/t/p/w500/4.jpg",
    year: 2021
  },
  {
    title: "Red Notice",
    genre: "Action",
    actors: ["Gal Gadot", "Ryan Reynolds"],
    thumb: "https://image.tmdb.org/t/p/w500/5.jpg",
    year: 2022
  },
  {
    title: "The Batman",
    genre: "Action",
    actors: ["Robert Pattinson"],
    thumb: "https://image.tmdb.org/t/p/w500/6.jpg",
    year: 2022
  },
  {
    title: "Encanto",
    genre: "Animation",
    actors: ["Stephanie Beatriz"],
    thumb: "https://image.tmdb.org/t/p/w500/7.jpg",
    year: 2021
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "Action",
    actors: ["Tom Holland"],
    thumb: "https://image.tmdb.org/t/p/w500/8.jpg",
    year: 2021
  }
];

// Render latest uploads
function renderLatest() {
  const container = document.getElementById('latest-uploads');
  container.innerHTML = movies.slice(0, 8).map(function(movie) {
    if (movie.title === "Jungle Cruise") {
      return `
        <div class="movie-card">
          <a href="final-destination-bloodlines.html">
            <img class="movie-thumb" src="${movie.thumb}" alt="${movie.title}">
          </a>
          <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-meta">${movie.genre} | ${movie.year}</div>
          </div>
        </div>
      `;
    }
    if (movie.title === "The Batman") {
      return `
        <div class="movie-card">
          <a href="finaldestination.html">
            <img class="movie-thumb" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFSPlzSzvfDieqjCJXOU717GcZj0yyBPmDS_UGc0G6qS9TjEn-9xgruwmGbgt4-v_zCsCZg" alt="${movie.title}">
          </a>
          <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-meta">${movie.genre} | ${movie.year}</div>
          </div>
        </div>
      `;
    }
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