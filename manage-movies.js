document.addEventListener('DOMContentLoaded', function() {
    // Variables for pagination
    const moviesPerPage = 10;
    let currentPage = 1;
    let filteredMovies = [];
    
    // DOM Elements
    const moviesTableBody = document.getElementById('moviesTableBody');
    const paginationControls = document.getElementById('paginationControls');
    const searchInput = document.getElementById('movieSearchInput');
    const searchBtn = document.getElementById('searchMoviesBtn');
    const filterType = document.getElementById('filterType');
    const filterGenre = document.getElementById('filterGenre');
    
    // Modal Elements
    const editMovieModal = document.getElementById('editMovieModal');
    const deleteConfirmModal = document.getElementById('deleteConfirmModal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    
    // Edit Form Elements
    const editMovieForm = document.getElementById('editMovieForm');
    const editMovieId = document.getElementById('editMovieId');
    const editPosterUrlInput = document.getElementById('editMoviePosterUrl');
    const editPreviewPosterBtn = document.getElementById('editPreviewPosterBtn');
    const editPosterPreview = document.getElementById('editPosterPreview');
    const addAlternateDownloadBtn = document.getElementById('addAlternateDownloadBtn');
    const alternateDownloadLinks = document.getElementById('alternateDownloadLinks');
    
    // Load movies on page load
    loadMovies();
    
    // Event Listeners
    searchBtn.addEventListener('click', filterMovies);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterMovies();
        }
    });
    
    filterType.addEventListener('change', filterMovies);
    filterGenre.addEventListener('change', filterMovies);
    
    // Close modals when clicking the X or Cancel button
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            editMovieModal.style.display = 'none';
            deleteConfirmModal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (e.target === editMovieModal) {
            editMovieModal.style.display = 'none';
        }
        if (e.target === deleteConfirmModal) {
            deleteConfirmModal.style.display = 'none';
        }
    });
    
    // Poster Preview Functionality for Edit Form
    editPreviewPosterBtn.addEventListener('click', function() {
        const posterUrl = editPosterUrlInput.value.trim();
        if (posterUrl) {
            const img = document.createElement('img');
            img.src = posterUrl;
            img.onerror = function() {
                alert('Error loading image. Please check the URL.');
                editPosterPreview.innerHTML = '';
            };
            img.onload = function() {
                editPosterPreview.innerHTML = '';
                editPosterPreview.appendChild(img);
            };
        } else {
            alert('Please enter a poster URL first.');
        }
    });
    
    // Add Alternate Download Link Button
    addAlternateDownloadBtn.addEventListener('click', function() {
        addAlternateDownloadField();
    });
    
    // Edit Movie Form Submission
    editMovieForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading indicator
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Saving Changes...';
        submitBtn.disabled = true;
        
        // Collect all form data
        const movieId = editMovieId.value;
        const movieData = {
            id: movieId,
            title: document.getElementById('editMovieTitle').value,
            year: document.getElementById('editMovieYear').value,
            duration: document.getElementById('editMovieDuration').value,
            genre: Array.from(document.getElementById('editMovieGenre').selectedOptions).map(option => option.value),
            country: document.getElementById('editMovieCountry').value,
            posterUrl: document.getElementById('editMoviePosterUrl').value,
            downloadUrl: document.getElementById('editMovieDownloadUrl').value,
            description: document.getElementById('editMovieDescription').value,
            quality: document.querySelector('input[name="editMovieQuality"]:checked').value,
            featured: document.querySelector('input[name="editMovieFeatured"]:checked').value === 'yes',
            type: document.getElementById('editMovieType').value,
            trailerUrl: document.getElementById('editMovieTrailerUrl').value,
            topImdb: document.querySelector('input[name="editMovieTopImdb"]:checked').value === 'yes',
            // Preserve the original upload date
            uploadDate: getMovieById(movieId).uploadDate
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
        
        // Update movie in localStorage
        updateMovie(movieData);
        
        // Reset UI
        setTimeout(() => {
            alert('Movie updated successfully!');
            editMovieModal.style.display = 'none';
            loadMovies(); // Refresh the table
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }, 500);
    });
    
    // Confirm Delete Button
    confirmDeleteBtn.addEventListener('click', function() {
        const movieId = this.dataset.movieId;
        if (movieId) {
            deleteMovie(movieId);
            deleteConfirmModal.style.display = 'none';
            loadMovies(); // Refresh the table
        }
    });
    
    // Function to load movies from localStorage
    function loadMovies() {
        const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
        filteredMovies = [...movies];
        
        // Apply any active filters
        filterMovies(false); // false means don't reset pagination
    }
    
    // Function to filter movies
    function filterMovies(resetPage = true) {
        const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
        const searchTerm = searchInput.value.trim().toLowerCase();
        const typeFilter = filterType.value;
        const genreFilter = filterGenre.value;
        
        // Reset to first page when applying new filters
        if (resetPage) {
            currentPage = 1;
        }
        
        // Apply filters
        filteredMovies = movies.filter(movie => {
            // Search term filter
            const matchesSearch = searchTerm === '' || 
                movie.title.toLowerCase().includes(searchTerm) ||
                (movie.description && movie.description.toLowerCase().includes(searchTerm));
            
            // Type filter
            const matchesType = typeFilter === 'all' || movie.type === typeFilter;
            
            // Genre filter
            const matchesGenre = genreFilter === 'all' || 
                (movie.genre && movie.genre.map(g => g.toLowerCase()).includes(genreFilter.toLowerCase()));
            
            return matchesSearch && matchesType && matchesGenre;
        });
        
        // Display filtered movies
        displayMovies();
    }
    
    // Function to display movies with pagination
    function displayMovies() {
        // Clear the table
        moviesTableBody.innerHTML = '';
        
        if (filteredMovies.length === 0) {
            moviesTableBody.innerHTML = '<tr><td colspan="8" class="no-results">No movies found</td></tr>';
            paginationControls.innerHTML = '';
            return;
        }
        
        // Calculate pagination
        const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = Math.min(startIndex + moviesPerPage, filteredMovies.length);
        
        // Display current page of movies
        for (let i = startIndex; i < endIndex; i++) {
            const movie = filteredMovies[i];
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>
                    <img src="${movie.posterUrl}" alt="${movie.title}" class="table-poster">
                </td>
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.type === 'movie' ? 'Movie' : 'TV Show'}</td>
                <td>${movie.genre.join(', ')}</td>
                <td>${movie.featured ? '<span class="status-badge featured">Yes</span>' : '<span class="status-badge">No</span>'}</td>
                <td>${movie.topImdb === 'yes' || movie.topImdb === true ? '<span class="status-badge featured">Yes</span>' : '<span class="status-badge">No</span>'}</td>
                <td>
                    <button class="action-btn edit-btn" data-movie-id="${movie.id}"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete-btn" data-movie-id="${movie.id}"><i class="fas fa-trash"></i></button>
                </td>
            `;
            
            moviesTableBody.appendChild(row);
        }
        
        // Add event listeners to edit and delete buttons
        addActionButtonListeners();
        
        // Update pagination controls
        updatePaginationControls(totalPages);
    }
    
    // Function to add event listeners to action buttons
    function addActionButtonListeners() {
        // Edit button listeners
        const editButtons = document.querySelectorAll('.edit-btn');
        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                const movieId = this.dataset.movieId;
                openEditModal(movieId);
            });
        });
        
        // Delete button listeners
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const movieId = this.dataset.movieId;
                openDeleteConfirmModal(movieId);
            });
        });
    }
    
    // Function to update pagination controls
    function updatePaginationControls(totalPages) {
        paginationControls.innerHTML = '';
        
        if (totalPages <= 1) return;
        
        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayMovies();
            }
        });
        paginationControls.appendChild(prevBtn);
        
        // Page numbers
        const maxPageButtons = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
        
        if (endPage - startPage + 1 < maxPageButtons) {
            startPage = Math.max(1, endPage - maxPageButtons + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            pageBtn.classList.toggle('active', i === currentPage);
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                displayMovies();
            });
            paginationControls.appendChild(pageBtn);
        }
        
        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayMovies();
            }
        });
        paginationControls.appendChild(nextBtn);
    }
    
    // Function to open edit modal
    function openEditModal(movieId) {
        const movie = getMovieById(movieId);
        if (!movie) return;
        
        // Populate form fields
        editMovieId.value = movie.id;
        document.getElementById('editMovieTitle').value = movie.title;
        document.getElementById('editMovieYear').value = movie.year;
        document.getElementById('editMovieDuration').value = movie.duration;
        
        // Set genre (multi-select)
        const genreSelect = document.getElementById('editMovieGenre');
        Array.from(genreSelect.options).forEach(option => {
            option.selected = movie.genre.includes(option.value);
        });
        
        document.getElementById('editMovieCountry').value = movie.country;
        document.getElementById('editMoviePosterUrl').value = movie.posterUrl;
        document.getElementById('editMovieDownloadUrl').value = movie.downloadUrl;
        document.getElementById('editMovieDescription').value = movie.description;
        document.getElementById('editMovieTrailerUrl').value = movie.trailerUrl || '';
        
        // Set radio buttons
        document.querySelector(`input[name="editMovieQuality"][value="${movie.quality}"]`).checked = true;
        document.querySelector(`input[name="editMovieFeatured"][value="${movie.featured ? 'yes' : 'no'}"]`).checked = true;
        document.querySelector(`input[name="editMovieTopImdb"][value="${movie.topImdb === true || movie.topImdb === 'yes' ? 'yes' : 'no'}"]`).checked = true;
        
        // Set type
        document.getElementById('editMovieType').value = movie.type;
        
        // Clear and populate alternate download links
        alternateDownloadLinks.innerHTML = '';
        if (movie.alternateDownloads && movie.alternateDownloads.length > 0) {
            movie.alternateDownloads.forEach(link => {
                addAlternateDownloadField(link.url, link.label);
            });
        }
        
        // Show poster preview
        if (movie.posterUrl) {
            const img = document.createElement('img');
            img.src = movie.posterUrl;
            editPosterPreview.innerHTML = '';
            editPosterPreview.appendChild(img);
        }
        
        // Show modal
        editMovieModal.style.display = 'block';
    }
    
    // Function to open delete confirmation modal
    function openDeleteConfirmModal(movieId) {
        confirmDeleteBtn.dataset.movieId = movieId;
        deleteConfirmModal.style.display = 'block';
    }
    
    // Function to get movie by ID
    function getMovieById(id) {
        const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
        return movies.find(movie => movie.id === id);
    }
    
    // Function to update movie in localStorage
    function updateMovie(updatedMovie) {
        const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
        const index = movies.findIndex(movie => movie.id === updatedMovie.id);
        
        if (index !== -1) {
            movies[index] = updatedMovie;
            localStorage.setItem('marcoMovies', JSON.stringify(movies));
            return true;
        }
        
        return false;
    }
    
    // Function to delete movie from localStorage
    function deleteMovie(movieId) {
        const movies = JSON.parse(localStorage.getItem('marcoMovies')) || [];
        const filteredMovies = movies.filter(movie => movie.id !== movieId);
        
        if (filteredMovies.length < movies.length) {
            localStorage.setItem('marcoMovies', JSON.stringify(filteredMovies));
            return true;
        }
        
        return false;
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
});