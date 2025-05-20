// Demo movie data (replace with backend/API in production)
const movies = [
  {
    title: "Thunderbolts (2025)",
    genre: "Action, Adventure, Superhero",
    actors: ["Florence Pugh", "Sebastian Stan", "David Harbour"],
    thumb: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSe5hUGbdfpD9GerQdpjIDe6HgB8Kry2mzGejX7f30FqY2tUqi-",
    year: 2025,
    page: "https://imthemarco.blogspot.com/2025/05/final-destination.html"
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
    page: "https://imthemarco.blogspot.com/2025/05/final-destination-2000-watch-online.html"
  },
  {
    title: "Nosferatu (1922)",
    genre: "Horror, Classic, Supernatural",
    actors: [
      "Max Schreck",
      "Gustav von Wangenheim",
      "Greta Schröder",
      "Alexander Granach",
      "Ruth Landshoff"
    ],
    thumb: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8xN-4LYoDze_4xWRyGORMfbVxkC5J_X27fAdmEsLvKxVaRkK2",
    year: 1922,
    page: "https://imthemarco.blogspot.com/2025/05/nosferatu-1922-watch-online-root.html"
  },
  {
    title: "The Karate Kid (1984)",
    genre: "Action, Drama, Sport",
    actors: [
      "Ralph Macchio",
      "Pat Morita",
      "Elisabeth Shue"
    ],
    thumb: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcS3_ZveMBrYaAsRJM8oBm0yUhhixMIhJL9t42G7kyDBsQGu0wZ3&psig=AOvVaw36AehMn_SLaKZHnHuXnVWj&ust=1747807193947000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCIw6qvsY0DFQAAAAAdAAAAABAE",
    year: 1984,
    page: "https://imthemarco.blogspot.com/2025/05/karatekid.html"
  },
  {
    title: "The Bhootnii (2025)",
    genre: "Horror, Comedy, Supernatural",
    actors: ["Unknown"],
    thumb: "https://m.media-amazon.com/images/M/MV5BYTllODlhMGUtNTRlOC00Y2U3LTlmZWUtZDExM2I0ZDkwMTZkXkEyXkFqcGc@._V1_.jpg",
    year: 2025,
    page: "https://imthemarco.blogspot.com/2025/05/the-bhootni.html"
  },
  {
    title: "Heretic (2024)",
    genre: "Horror, Thriller",
    actors: [
      "Hugh Grant",
      "Sophie Thatcher",
      "Chloe East",
      "Topher Grace"
    ],
    thumb: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQT6Z8iVA_F6OAUgbSkV7dAZmV5rY-zUp_4lNbqChfu4qlf8mH4&psig=AOvVaw04ewySql7vIGWzWcAfTzUM&ust=1747816483544000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLCt-vfRsY0DFQAAAAAdAAAAABAE",
    year: 2024,
    page: "https://imthemarco.blogspot.com/2025/05/heretic.html",
    director: "Scott Beck",
    runtime: "1h 29m",
    description: "Two young religious women are drawn into a game of cat-and-mouse in the house of a strange man.",
    review: "A tense, atmospheric horror-thriller with strong performances and chilling suspense.",
    download: "https://drive.google.com/file/d/1dcyR7i-Vpl2T-Q4iuQ3W5jSA5leNrxWK/view?usp=sharing"
  },
  {
    title: "Absolution (2024) Hindi Dubbed Movie",
    genre: "Action, Crime, Drama",
    actors: [
      "Liam Neeson",
      "Daniel Diemer",
      "Javier Molina",
      "Jimmy Gonzales"
    ],
    thumb: "https://resizing.flixster.com/MI4gB_erP2feQJ7f-yynf5HbSK8=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28068782_v_v13_ac.jpg",
    year: 2024,
    page: "https://imthemarco.blogspot.com/2025/05/absolution.html",
    director: "Hans Petter Moland",
    runtime: "1h 44m",
    description: "An aging gangster attempts to reconnect with his children and rectify the mistakes in his past, but the criminal underworld won't loosen their grip willingly.",
    review: "\"Absolution\" delivers a gritty crime drama with strong performances, especially from Liam Neeson. While the plot treads familiar ground, the emotional stakes and action sequences keep viewers engaged.",
    download: "https://drive.google.com/file/d/1Ymxbq312ipkc-dFvc3zwQtJWTm0M_Jrc/view?usp=sharing"
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

function showGenreMenu() {
  document.getElementById('genre-dropdown').style.display = 'block';
}
function hideGenreMenu() {
  document.getElementById('genre-dropdown').style.display = 'none';
}
function filterByGenre(genre) {
  const filtered = movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
  const container = document.getElementById('latest-uploads');
  container.innerHTML = filtered.map(function(movie) {
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
  hideGenreMenu();
}
