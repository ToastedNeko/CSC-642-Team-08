document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.photo-item img');
    const contextMenu = document.getElementById('contextMenu');

    // Setup right-click event listeners for each image
    images.forEach(img => {
        img.addEventListener('contextmenu', function(event) {
            event.preventDefault();  // Prevent the default context menu
            contextMenu.style.display = 'block';  // Show the custom context menu
            contextMenu.style.left = `${event.pageX}px`;  // Position the menu at the mouse pointer
            contextMenu.style.top = `${event.pageY}px`;

            // Set the href for the edit page in the context menu
            const photoId = img.getAttribute('data-id'); // Ensure your images have a 'data-id' attribute
            if(photoId) {
                contextMenu.setAttribute('data-edit-href', `edit_photos.html?photoId=${photoId}`);
            } else {
                console.error('Data ID attribute is missing on the image');
            }
        });
    });

    // Hide the context menu when clicking anywhere on the page
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#contextMenu') && event.button !== 2) { // Not a right-click
            contextMenu.style.display = 'none';
        }
    });

    // Hide the context menu when a different context menu is requested
    document.addEventListener('contextmenu', function(event) {
        if (!event.target.closest('.photo-item img')) {
            contextMenu.style.display = 'none';
        }
    });

    // Fetch photo details if a photo ID is present in the URL
    const params = new URLSearchParams(window.location.search);
    const photoId = params.get('photoId');
    if (photoId) {
        fetch(`/api/photos/${photoId}`)  // URL to your API that returns photo details
            .then(response => response.json())
            .then(data => {
                document.getElementById('photoToEdit').src = data.imageUrl; // Update the src for the image
                document.getElementById('photoTitle').value = data.title; // Set the title in the input field
            })
            .catch(error => console.error('Failed to load photo details:', error));
    } else {
        console.error('No photo ID provided in the URL');
    }
});

// Function to handle photo editing
function editPhoto() {
    const contextMenu = document.getElementById('contextMenu');
    const editHref = contextMenu.getAttribute('data-edit-href');
    if (editHref) {
        window.location.href = editHref; // Redirect to the edit page
    } else {
        console.error('Edit URL not found or is null');
    }
}

// Function to handle adding to album
function addToAlbum() {
    console.log('Add to album option selected');
}
