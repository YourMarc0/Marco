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
    year: 2024,
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
  },
  {
    title: "Bogota City of the Lost (2025) Hindi Dubbed",
    genre: "Crime, Thriller, Drama",
    actors: [
      "Song Joong-ki",
      "Lee Hee-joon",
      "Kwon Hae-hyo"
    ],
    thumb: "https://resizing.flixster.com/uTfj1yJwOT57A0i6GNWpp9WbaEQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1NjFjMzBlLWE2MzgtNGIwNC05ZTkxLWEwZTVhMmU0YTRmMy5qcGc=",
    year: 2025,
    page: "https://imthemarco.blogspot.com/2025/05/bogota-city-of-lost.html",
    director: "Kim Seong-je",
    runtime: "1h 53m",
    description: "A gripping crime thriller set in 1990s Colombia, following a group of Korean immigrants struggling to survive.",
    review: "A tense, atmospheric drama with strong performances and a unique setting.",
    download: "https://drive.google.com/file/d/1lkzGGl9Bod0rprSia35H51P07rABW5Rm/view?usp=drive_link"
  },
  {
    title: "Underworld: Rise of the Lycans (2009)",
    genre: "Action, Fantasy, Horror",
    actors: ["Michael Sheen", "Bill Nighy", "Rhona Mitra", "Steven Mackintosh"],
    thumb: "https://m.media-amazon.com/images/I/71-lvXTyG2L._AC_UF1000,1000_QL80_.jpg",
    year: 2009,
    page: "https://imthemarco.blogspot.com/2025/05/underworld-rise-of-lycans.html",
    director: "Patrick Tatopoulos",
    writer: "Danny McBride, Dirk Blackman, Howard McCain",
    runtime: "1h 32m",
    rating: "R",
    language: "Dual Audio {Hindi-English}",
    size: "300MB || 1GB || 1.4GB",
    quality: "480p || 720p || 1080p – BluRay",
    format: "MKV",
    description: "The prequel story traces the origins of the centuries-old blood feud between the aristocratic vampires and their onetime slaves, the Lycans. In the Dark Ages, a young Lycan named Lucian emerges as a powerful leader who rallies the werewolves to rise up against Viktor, the cruel vampire king who has enslaved them. Lucian is joined by his secret lover, Sonja, in his battle against the Vampire army and his struggle for Lycan freedom.",
    download: "https://pixeldrain.net/api/file/78Kf7nP4?download",
    play: "https://pixeldrain.net/api/file/78Kf7nP4?download"
  },
  {
    title: "Salt (2010)",
    genre: "Action, Thriller, Spy",
    actors: ["Angelina Jolie", "Liev Schreiber", "Chiwetel Ejiofor", "Daniel Olbrychski"],
    thumb: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7937523_p_v10_ac.jpg",
    year: 2010,
    page: "https://imthemarco.blogspot.com/2025/05/salt-2010-dual-audio-hindi-english.html",
    director: "Phillip Noyce",
    writer: "Kurt Wimmer",
    runtime: "1h 40m",
    rating: "PG-13",
    language: "Dual Audio {Hindi-English}",
    subtitle: "Yes / English",
    size: "350MB || 900MB || 2.5GB",
    quality: "480p || 720p || 1080p – BluRay",
    format: "MKV",
    description: "Evelyn Salt is a CIA agent and highly respected by all, including his boss, Ted Winter. Out of the blue, a Russian spy walks into their offices and offers a vital piece of information: the President of Russia will be assassinated during his forthcoming visit to New York City to attend the funeral of the recently deceased U.S. Vice President. The name of the assassin:",
    download: "https://vcloud.lol/dtt8nynnkbdypla",
    play: "https://pixeldrain.net/api/file/gupkwRbB?download"
  },
  {
    title: "Fountain of Youth",
    genre: "Action / Adventure / Heist",
    year: 2025,
    runtime: "125 minutes",
    thumb: "https://m.media-amazon.com/images/M/MV5BNWRlZmU3ZTItM2JlYi00YTg1LTgxNTItMjMyNzIyZWY5YWJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpghttps://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2F6%2Fgracenote%2F61645ff02c24d958cb3926e2a797fa46.jpg",
    page: "https://imthemarco.blogspot.com/2025/05/fountain-of-youth.html",
    director: "John Krasinski",
    description: "Estranged siblings Luke and Charlotte Purdue reunite to embark on a globe-trotting quest for the legendary Fountain of Youth. Their journey leads them through ancient libraries and cryptic clues, culminating beneath the Great Pyramid of Giza. As they confront mercenaries and ancient guardians, they uncover the Fountain's true nature and the perilous cost of immortality. Faced with visions of eternal life and its consequences, they must decide whether to seize the power or let it remain hidden.",
    download: "https://gofile.io/d/x97a01",
    play: "https://gofile.io/d/x97a01",
    actors: ["John Krasinski", "Natalie Portman", "Eiza González", "Domhnall Gleeson", "Arian Moayed", "Laz Alonso", "Carmen Ejogo", "Stanley Tucci", "Benjamin Chivers", "Michael Epp", "Steve Tran", "Daniel de Bourg"],
    rating: "PG-13"
  },
  {
    title: "Mission Impossible The Final Reckoning (2025)",
    genre: "Action, Thriller, Spy",
    actors: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"], // Update with actual cast if known
    thumb: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1KzgP3ubLzquySUERfhx0ZTs-v3IVwifHZnQQw5CwiSYfmSomi8pUUhEEzr0cw73Lgiz6",
    year: 2025,
    page: "https://imthemarco.blogspot.com/2025/05/mission-impossible-final-reckoning-2025.html",
    director: "Christopher McQuarrie", // Update if different
    runtime: "TBA",
    rating: "NR",
    language: "Hindi & English",
    subtitle: "YES / English",
    size: "11GB",
    quality: "480p || 720p || 1080p",
    format: "MKV",
    description: "Mission Impossible The Final Reckoning is the latest installment in the legendary action franchise. Ethan Hunt and his team face their most dangerous mission yet, with the fate of the world hanging in the balance.",
    download: "https://nexdrive.xyz/genfxm/20108",
    play: "https://nexdrive.xyz/genfxm/20108"
  },
  {
    title: "The Devil's Plan Death Room (Season 1)",
    genre: "Reality, Game Show, Survival",
    actors: ["Unknown"],
    thumb: "https://images.ctfassets.net/4cd45et68cgf/YZtrXZMbcSKvAu3qg1oT9/65785e88520431b68300bf5115472789/The_Devil-s_Plan_Death_Room.jpg?w=1200",
    year: 2025,
    page: "https://imthemarco.blogspot.com/2025/05/the-devils-plan-death-room.html",
    director: "Unknown",
    runtime: "12 Episodes",
    rating: "NR",
    language: "Hindi DD5.1 + Korean [DUAL AUDIO SERIES]",
    subtitle: "YES / English",
    size: "240MB / 340MB || 700MB / 700MB || 1.5GB / 4.5GB - Each Episodes",
    quality: "480p || 720p || 1080p - WEB-DL",
    format: "MKV",
    description: "'THE DEVIL'S PLAN: DEATH ROOM' - A Netflix Original South Korean Reality TV Survival Game Show - It's the ultimate showdown of wits, brains, strategy, and alliances for a chance to win 500 million won.",
    download: "https://nexdrive.xyz/genfxm/20395",
    play: "https://nexdrive.xyz/genfxm/20395"
  },
  {
    title: "The Seed of the Sacred Fig",
    genre: "Drama, Thriller, Crime",
    actors: ["Soheila Golestani", "Setareh Maleki", "Niousha Akhshi", "Shiva Ordooie", "Mohammad Kamal Alavi", "Barat Azimi", "Parisa Mohyedini", "Amineh Mazrouie Arani", "Reza Akhlaghirad", "Mahsa Rostami", "Missagh Zareh"],
    thumb: "https://vegamovies.uy/uploads/posts/covers/Poster-The-Sed-of-the-sacred-fig-2024.webp",
    year: 2024,
    page: "https://imthemarco.blogspot.com/2025/05/the-sed-of-sacred-fig-2024.html",
    director: "Mohammad Rasoulof",
    runtime: "2h 47m",
    rating: "NR",
    language: "Hindi & English",
    subtitle: "YES / English",
    size: "770MB - 1.4GB - 2.6GB",
    quality: "WEB-DL 480p - 720p - 1080p",
    format: "MKV",
    description: "**The Seed of the Sacred Fig** (2024) is a critically acclaimed Iranian drama-thriller directed by Mohammad Rasoulof. The film explores the story of a judge working within Iran's judiciary system who begins to experience deep mistrust and paranoia after a political protest leads to nationwide unrest. As surveillance and suspicion invade his personal life, the conflict between duty, conscience, and family loyalty intensifies. Known for its bold commentary on authoritarianism and justice, the film has received praise for its compelling narrative and powerful performances.",
    download: "https://fast-dl.lol/dl/c2edfb",
    play: "https://fast-dl.lol/dl/c2edfb"
  },
  {
    title: "I Am Number Four 2011",
    genre: "Action, Adventure, Superhero",
    actors: ["Florence Pugh", "Sebastian Stan", "David Harbour"],
    thumb: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8329406_p_v8_ad.jpg",
    year: 2025,
    page: "https://imthemarco.blogspot.com/2025/05/i-am-number-four-2011.html"
  },
  {
    title: " Bhool Chuk Maaf (2025)",
    genre: "Fantasy, Romantic Comedy",
    actors: ["Rajkummar Rao", "Wamiqa Gabbi", "Seema Pahwa"],
    thumb: "https://m.media-amazon.com/images/M/MV5BZTAwNjIzZjEtZjk1MC00NTI5LTg0MjctZTBkMWVhMWMzMjg5XkEyXkFqcGc@._V1_QL75_UX298.5_.jpg",
    year: 2025,
    page: "https://imthemarco.blogspot.com/2025/05/bhool-chuk-maaf-2025.html"
  },
  {
    title: "CRUEL WAR",
    genre: "",
    actors: [],
    thumb: `https://i.mydramalist.com/RB36kr_4c.jpg`,
    year: 2024,
    page: `https://imthemarco.blogspot.com/2025/05/cruelwars.html`
  },
  {
    title: "Eternity (2012)",
    genre: "Science Fiction, Mystery",
    actors: ["Elliot Travers", "Dean Knowsley", "Amy Usherwood", "Alan Brunton", "Felicity Cozens", "Alex Galvin", "Luke Hawker", "Ralph Johnson", "Energy Lewis", "Jessica Manins", "Sam Lee", "Alana Henderson", "Nigel Harbrow", "Ben Fransham", "Rachel Clentworth", "Geraldine Brophy", "Liz Kirkman", "Amy Tsang"],
    thumb: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFO-gMYvhK-Op70l2ECbbaIfS2wqu0glq9CWsfqRLxjvdfkiM-BKoxYNVfIvw8UVS1lg&usqp=CAU`,
    year: 2012,
    page: `https://imthemarco.blogspot.com/2025/05/eternity-2012.html`
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
  container.innerHTML = movies.slice().reverse().map(function(movie) {
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

function populateGenreDropdown() {
  const genreDropdown = document.getElementById('genre-dropdown');
  const genres = [...new Set(movies.flatMap(movie => movie.genre ? movie.genre.split(',').map(g => g.trim()) : []))].sort();
  genreDropdown.innerHTML = genres.map(genre => `<a href="#" onclick="filterMovies('genre', '${genre}')">${genre}</a>`).join('');
}

function populateYearDropdown() {
  const yearDropdown = document.getElementById('year-dropdown');
  const years = [...new Set(movies.map(movie => movie.year).filter(year => year !== undefined))].sort((a, b) => b - a);
  yearDropdown.innerHTML = years.map(year => `<a href="#" onclick="filterMovies('year', '${year}')">${year}</a>`).join('');
}

function populateRatingDropdown() {
  const ratingDropdown = document.getElementById('rating-dropdown');
  const ratings = [...new Set(movies.map(movie => movie.rating).filter(rating => rating !== undefined && rating !== 'NR'))].sort();
  ratingDropdown.innerHTML = ratings.map(rating => `<a href="#" onclick="filterMovies('rating', '${rating}')">${rating}</a>`).join('');
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

// Render filtered movies (can reuse renderLatest's structure or create a new one)
function renderFilteredMovies(filteredMovies) {
  const container = document.getElementById('latest-uploads'); // Or a new container for filtered results
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

// Show/Hide Dropdown Menus
function showDropdown(id) {
  document.getElementById(id).style.display = 'block';
}

function hideDropdown(id) {
  document.getElementById(id).style.display = 'none';
}

function hideAllDropdowns() {
  hideDropdown('genre-dropdown');
  hideDropdown('year-dropdown');
  hideDropdown('rating-dropdown');
}

// Function to show recommended movies (rating > 8)
function showRecommendations() {
  hideAllDropdowns(); // Hide any open dropdowns
  const recommendedMovies = movies.filter(movie => {
    // Ensure rating exists and is a number before comparing
    return movie.rating && !isNaN(movie.rating) && parseFloat(movie.rating) > 8;
  });
  renderFilteredMovies(recommendedMovies);
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.platform-button')) {
    hideAllDropdowns();
  }
});

// Initial population of dropdowns when the page loads
document.addEventListener('DOMContentLoaded', function() {
  renderLatest();
  renderSlideshowFromMovies();
  populateDropdowns();
});

function shuffleArray(array) {
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderSlideshowFromMovies() {
  const slideshow = document.getElementById('movie-slideshow');
  if (!slideshow) return;
  // Shuffle a copy of the movies array
  const shuffled = shuffleArray([...movies]);
  // Duplicate for seamless loop
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