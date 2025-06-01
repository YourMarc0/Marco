document.addEventListener('DOMContentLoaded', function() {
    // Poster Preview Functionality
    const posterUrlInput = document.getElementById('moviePosterUrl');
    const previewPosterBtn = document.getElementById('previewPosterBtn');
    const posterPreview = document.getElementById('posterPreview');
    
    previewPosterBtn.addEventListener('click', function() {
        const posterUrl = posterUrlInput.value.trim();
        if (posterUrl) {
            const img = document.createElement('img');
            img.src = posterUrl;
            img.onerror = function() {
                alert('Error loading image. Please check the URL.');
                posterPreview.innerHTML = '';
            };
            img.onload = function() {
                posterPreview.innerHTML = '';
                posterPreview.appendChild(img);
            };
        } else {
            alert('Please enter a poster URL first.');
        }
    });
    
    // Alternate Download Links Functionality
    const addAlternateDownloadBtn = document.getElementById('addAlternateDownloadBtn');
    const alternateDownloadLinks = document.getElementById('alternateDownloadLinks');
    
    if (addAlternateDownloadBtn) {
        addAlternateDownloadBtn.addEventListener('click', function() {
            addAlternateDownloadField();
        });
    }
    
    // Function to add alternate download field
    function addAlternateDownloadField(url = '', label = '') {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'alternate-download-container';
        
        fieldContainer.innerHTML = `
            <div class="form-group">
                <label>Alternate Download Link</label>
                <div class="alternate-download-fields">
                    <input type="url" class="alternate-download-url" placeholder="https://example.com/movie.mp4" value="${url}">
                    <input type="text" class="alternate-download-label" placeholder="Label (e.g. 720p, 1080p)" value="${label}">
                    <button type="button" class="btn-danger btn-small remove-alternate-link"><i class="fas fa-times"></i></button>
                </div>
            </div>
        `;
        
        alternateDownloadLinks.appendChild(fieldContainer);
        
        // Add event listener to remove button
        fieldContainer.querySelector('.remove-alternate-link').addEventListener('click', function() {
            fieldContainer.remove();
        });
    }
    
    // Form Submission
    const uploadForm = document.getElementById('uploadMovieForm');
    
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading indicator
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Adding Movie...';
        submitBtn.disabled = true;
        
        // Collect all form data
        const movieData = {
            title: document.getElementById('movieTitle').value,
            year: document.getElementById('movieYear').value,
            duration: document.getElementById('movieDuration').value,
            genre: Array.from(document.getElementById('movieGenre').selectedOptions).map(option => option.value),
            country: document.getElementById('movieCountry').value,
            posterUrl: document.getElementById('moviePosterUrl').value,
            downloadUrl: document.getElementById('movieDownloadUrl').value,
            description: document.getElementById('movieDescription').value,
            quality: document.querySelector('input[name="movieQuality"]:checked').value,
            featured: document.querySelector('input[name="movieFeatured"]:checked').value === 'yes',
            type: document.getElementById('movieType').value,
            trailerUrl: document.getElementById('movieTrailerUrl').value,
            topImdb: document.querySelector('input[name="movieTopImdb"]:checked').value === 'yes',
            uploadDate: new Date().toISOString() // Add upload date
        };
        
        // Collect alternate download links
        const alternateLinks = [];
        const alternateUrlInputs = document.querySelectorAll('.alternate-download-url');
        const alternateLabelInputs = document.querySelectorAll('.alternate-download-label');
        
        for (let i = 0; i < alternateUrlInputs.length; i++) {
            const url = alternateUrlInputs[i].value.trim();
            const label = alternateLabelInputs[i].value.trim();
            
            if (url && label) {
                alternateLinks.push({ url, label });
            }
        }
        
        movieData.alternateDownloads = alternateLinks;
        
        // Save to localStorage
        saveMovieToLocalStorage(movieData);
        
        // Reset form and UI
        setTimeout(() => {
            alert('Movie added successfully!');
            uploadForm.reset();
            posterPreview.innerHTML = '';
            alternateDownloadLinks.innerHTML = '';
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }, 1000);
    });
    
    // Function to save movie data to localStorage
    // Add this at the end of the file, just before the closing });
    function verifyMovieUpload(movieData) {
        console.log('Movie saved to localStorage:', movieData);
        
        // Check if the movie was actually saved
        const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
        const savedMovie = movies.find(m => m.id === movieData.id);
        
        if (savedMovie) {
            console.log('Verification successful: Movie found in localStorage');
            return true;
        } else {
            console.error('Verification failed: Movie not found in localStorage');
            return false;
        }
    }
    
    // Modify the saveMovieToLocalStorage function to include verification
    function saveMovieToLocalStorage(movieData) {
        // Get existing movies or initialize empty array
        let movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
        
        // Add new movie with unique ID
        movieData.id = Date.now().toString();
        movies.push(movieData);
        
        // Save back to localStorage
        localStorage.setItem('marcoMovies', JSON.stringify(movies));
        
        console.log('Movie saved successfully:', movieData.title);
        console.log('Total movies in storage:', movies.length);
        
        return true;
    }
});

// Add this function at the end of your admin.js file
// Complete the verifyWebsiteConnection function
function verifyWebsiteConnection() {
  // Check if localStorage is available
  if (typeof(Storage) === "undefined") {
    console.error("LocalStorage is not supported by your browser. The website will not function properly.");
    alert("Your browser does not support local storage. The website will not function properly.");
    return false;
  }
  
  // Check if we can access localStorage
  try {
    localStorage.setItem('testConnection', 'test');
    localStorage.removeItem('testConnection');
    console.log("Website connection verified: LocalStorage is working properly.");
    return true;
  } catch (e) {
    console.error("Error accessing localStorage. The website will not function properly.", e);
    alert("Error accessing local storage. The website will not function properly. This may be due to private browsing mode or storage restrictions.");
    return false;
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
  verifyWebsiteConnection();
});