// Demo movie data (replace with backend/API in production)
const movies = [
  
  {
    "title": "The Accountant 2",
    "genre": "Action, Thriller",
    "actors": [
      "Ben Affleck",
      "Jon Bernthal",
      "Cynthia Addai-Robinson",
      "Daniella Pineda",
      "J.K. Simmons"
    ],
    "thumb": "https://www.6filmywap.net/files/images/The_Accountant_2_(2025)_5Hollywood_Hindi_Dubbed.jpg",
    "year": 2025,
    "director": "Gavin O'Connor",
    "runtime": "2h 12min",
    "rating": "R",
    "language": "Hindi dubbed",
    "subtitle": "Yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "description": "Christian Wolff and his estranged brother Brax investigate the murder of a Treasury agent, uncovering a conspiracy involving human trafficking and corruption.",
    "download": "https://imthemarco.blogspot.com/2025/06/10-accountant.html"
  },  
  {
    "title": "Salt",
    "genre": "Action, Thriller, Mystery",
    "actors": [
      "Angelina Jolie",
      "Liev Schreiber",
      "Chiwetel Ejiofor",
      "Daniel Olbrychski",
      "August Diehl",
      "Andre Braugher"
    ],
    "thumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxDifXPfC8UMnCikL635VosLMX6VYVm-ceyTCW_wBtId13jIw",
    "year": 2010,
    "page": null,
    "director": "Phillip Noyce",
    "runtime": "1h 40min",
    "rating": "PG-13",
    "language": "Hindi dubbed",
    "subtitle": "Yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "format": null,
    "description": "Evelyn Salt, a CIA officer, is accused of being a Russian spy. She goes on the run to clear her name, using her training and cunning to stay ahead of her pursuers. As the truth unfolds, Salt’s loyalty is questioned, and a deadly conspiracy is revealed that could change the fate of nations.",
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/7-salt.html",
    "play": "https://imthemarco.blogspot.com/2025/06/7-salt.html",
    "writer": "Kurt Wimmer"
  },  
  {
    "title": "Nosferatu",
    "genre": "Horror, Gothic, Thriller",
    "actors": [
      "Bill Skarsgård",
      "Nicholas Hoult",
      "Lily-Rose Depp",
      "Aaron Taylor-Johnson",
      "Emma Corrin",
      "Willem Dafoe",
      "Ralph Ineson",
      "Simon McBurney"
    ],
    "thumb": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8xN-4LYoDze_4xWRyGORMfbVxkC5J_X27fAdmEsLvKxVaRkK2",
    "year": 2024,
    "page": null,
    "director": "Robert Eggers",
    "runtime": "2h 12min",
    "rating": "R",
    "language": "Hindi dubbed",
    "subtitle": "Yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "format": null,
    "description": "In this gothic horror remake, Count Orlok (Bill Skarsgård), a reclusive vampire, becomes infatuated with Ellen Hutter (Lily-Rose Depp), the wife of real estate agent Thomas Hutter (Nicholas Hoult). As Orlok's obsession grows, he brings terror and plague to the town of Wisborg, forcing Ellen to confront the ancient evil threatening her world.",
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/6nosferat.html",
    "play": "https://imthemarco.blogspot.com/2025/06/6nosferat.html",
    "writer": "Robert Eggers"
  },  
  {
    "title": "Karate Kid: Legends",
    "genre": "Action, Drama",
    "actors": [
      "Ben Wang",
      "Jackie Chan",
      "Ralph Macchio",
      "Joshua Jackson",
      "Sadie Stanley",
      "Ming-Na Wen",
      "Aramis Knight",
      "Wyatt Oleff"
    ],
    "thumb": "https://m.media-amazon.com/images/M/MV5BM2MwYTlkY2MtNmUzNy00MTljLThjNDAtZGUzNzMxMzcxNzM5XkEyXkFqcGc@._V1_.jpg",
    "year": 2025,
    "page": null,
    "director": "Jonathan Entwistle",
    "runtime": "1h 58min",
    "rating": "PG-13",
    "language": "Hindi dubbed",
    "subtitle": "Yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "format": null,
    "description": "After a family tragedy, kung fu prodigy Li Fong (Ben Wang) relocates from Beijing to New York City with his mother. Struggling to adapt, he finds solace in a new friendship and begins training under Mr. Han (Jackie Chan) and Daniel LaRusso (Ralph Macchio) to prepare for a high-stakes karate tournament. As Li confronts his past and faces formidable opponents, he embarks on a journey of self-discovery and resilience.",
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/5-karate-kid.html",
    "play": "https://imthemarco.blogspot.com/2025/06/5-karate-kid.html",
    "writer": "Rob Lieber"
  },  
  {
    "title": "Final Destination: Bloodlines",
    "genre": "Horror, Thriller",
    "actors": [
      "Kaitlyn Santa Juana",
      "Teo Briones",
      "Richard Harmon",
      "Rya Kihlstedt",
      "Owen Patrick Joyner",
      "Anna Lore",
      "Tony Todd",
      "Brec Bassinger"
    ],
    "thumb": "https://upload.wikimedia.org/wikipedia/en/a/ab/Final_Destination_Bloodlines_%282025%29_poster.jpg",
    "year": 2025,
    "page": null,
    "director": "Zach Lipovsky, Adam B. Stein",
    "runtime": "1h 50min",
    "rating": "R",
    "language": "Hindi dubbed",
    "subtitle": "Yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "format": null,
    "description": "In this chilling sixth installment of the Final Destination franchise, college student Stefani Reyes is plagued by violent nightmares linked to a 1968 tower disaster her grandmother, Iris, once foresaw and prevented. As Death seeks to correct the disrupted design by targeting Iris's descendants, Stefani must uncover her family's dark past to break the deadly cycle.",
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/4.html",
    "play": "https://imthemarco.blogspot.com/2025/06/4.html",
    "writer": "Guy Busick, Lori Evans Taylor"
  },  
  {
    "title": "Heretic",
    "genre": "Horror, Mystery, Thriller",
    "actors": [
      "Hugh Grant",
      "Sophie Thatcher",
      "Chloe East",
      "Topher Grace"
    ],
    "thumb": "https://m.media-amazon.com/images/M/MV5BZjBlNTU4ZGMtMTNhYy00ZDZlLWJiNDYtNTU1NmFhMDNhNDJlXkEyXkFqcGc@._V1_.jpg",
    "year": 2024,
    "page": null,
    "director": "Scott Beck, Bryan Woods",
    "runtime": "1h 51min",
    "rating": "R",
    "language": "Hindi dubbed",
    "subtitle": "Yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "format": null,
    "description": "Two young Mormon missionaries, Sister Barnes and Sister Paxton, visit the home of a reclusive man, Mr. Reed, who lures them into a sinister game of faith and survival. As they attempt to escape his psychological torment, they are forced to confront their beliefs and the true nature of evil.",
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/4.html",
    "play": "https://imthemarco.blogspot.com/2025/06/4.html",
    "writer": "Scott Beck, Bryan Woods"
  },  
  {
    "title": "Conclave",
    "genre": "Drama, Mystery, Thriller",
    "actors": [
      "Ralph Fiennes",
      "John Lithgow",
      "Stanley Tucci",
      "Isabella Rossellini"
    ],
    "thumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZw-cN2nhkoJXU8aMI8pnoANMTVLLOFUEm2Q&s",
    "year": 2024,
    "page": null,
    "director": "Edward Berger",
    "runtime": "1h 46min",
    "rating": "PG-13",
    "language": "Hindi dubbed",
    "subtitle": "Yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "format": null,
    "description": "Following the death of the Pope, the Cardinals gather in the Vatican to elect his successor. As secrets and political agendas emerge behind closed doors, one Cardinal discovers a conspiracy that could shake the very foundations of the Church.",
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/3.html",
    "play": "https://imthemarco.blogspot.com/2025/06/3.html",
    "writer": null
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
    director: "Hans Petter Moland",
    runtime: "1h 44m",
    description: "An aging gangster attempts to reconnect with his children and rectify the mistakes in his past, but the criminal underworld won't loosen their grip willingly.",
    review: "\"Absolution\" delivers a gritty crime drama with strong performances, especially from Liam Neeson. While the plot treads familiar ground, the emotional stakes and action sequences keep viewers engaged.",
    download: "https://drive.google.com/file/d/1Ymxbq312ipkc-dFvc3zwQtJWTm0M_Jrc/view?usp=sharing"
  },
  {
    "title": "Ashgrove",
    "genre": "Drama",
    "actors": [
      "Amanda Brugel",
      "Natalie Brown",
      "Sugith Varughese",
      "Shawn Doyle"
    ],
    "thumb": "https://vegamovies.mk/uploads/posts/covers/Poster-Ashgrove-2022.webp",
    "year": 2022,
    "page": null,
    "director": null,
    "runtime": "1h,32min",
    "rating": "PG",
    "language": "hindi dubbed",
    "subtitle": "yes",
    "size": null,
    "quality": "480p, 720p, 1080p",
    "format": null,
    "description": "Set in the not-so-distant future, Dr. Jennifer Ashgrove - one of the world's top scientists - is battling to find a cure to a crisis that affects the world's water supply. As the weight of the world takes its toll, she retreats to the countryside with her husband in a bid to clear her mind.",
    "review": null,
    "download": "https://imthemarco.blogspot.com/2025/06/2.html",
    "play": "https://imthemarco.blogspot.com/2025/06/2.html",
    "writer": null
  },
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
    title: "The Seed of the Sacred Fig",
    genre: "Drama, Thriller, Crime",
    actors: ["Soheila Golestani", "Setareh Maleki", "Niousha Akhshi", "Shiva Ordooie", "Mohammad Kamal Alavi", "Barat Azimi", "Parisa Mohyedini", "Amineh Mazrouie Arani", "Reza Akhlaghirad", "Mahsa Rostami", "Missagh Zareh"],
    thumb: "https://m.media-amazon.com/images/M/MV5BMmYxMTlmODQtZTUyOS00YWE3LWFjYTktOWU4ZjU3ZGYwZDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    year: 2024,
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
    title: "Bogota City of the Lost (2025) Hindi Dubbed",
    genre: "Crime, Thriller, Drama",
    actors: [
      "Song Joong-ki",
      "Lee Hee-joon",
      "Kwon Hae-hyo"
    ],
    thumb: "https://resizing.flixster.com/uTfj1yJwOT57A0i6GNWpp9WbaEQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1NjFjMzBlLWE2MzgtNGIwNC05ZTkxLWEwZTVhMmU0YTRmMy5qcGc=",
    year: 2025,
    director: "Kim Seong-je",
    runtime: "1h 53m",
    description: "A gripping crime thriller set in 1990s Colombia, following a group of Korean immigrants struggling to survive.",
    review: "A tense, atmospheric drama with strong performances and a unique setting.",
    download: "https://drive.google.com/file/d/1lkzGGl9Bod0rprSia35H51P07rABW5Rm/view?usp=drive_link"
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
  },{
    title: "Mission Impossible The Final Reckoning (2025)",
    genre: "Action, Thriller, Spy",
    actors: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"], // Update with actual cast if known
    thumb: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1KzgP3ubLzquySUERfhx0ZTs-v3IVwifHZnQQw5CwiSYfmSomi8pUUhEEzr0cw73Lgiz6",
    year: 2025,
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
  },{
    title: "The Devil's Plan Death Room (Season 1)",
    genre: "Reality, Game Show, Survival",
    actors: ["Unknown"],
    thumb: "https://images.ctfassets.net/4cd45et68cgf/YZtrXZMbcSKvAu3qg1oT9/65785e88520431b68300bf5115472789/The_Devil-s_Plan_Death_Room.jpg?w=1200",
    year: 2025,
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