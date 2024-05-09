function hideContextMenu() {
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.photo-item img');
    const contextMenu = document.getElementById('contextMenu');

    images.forEach(img => {
        img.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${event.pageX}px`;
            contextMenu.style.top = `${event.pageY}px`;
            const photoId = img.getAttribute('data-id');
            if (photoId) {
                contextMenu.setAttribute('data-edit-href', `edit_photos.html?photoId=${photoId}`);
            } else {
                console.error('Data ID attribute is missing on the image');
            }
        });
    });
});

function editPhoto() {
    const contextMenu = document.getElementById('contextMenu');
    const editHref = contextMenu.getAttribute('data-edit-href');
    if (editHref) {
        window.location.href = editHref;
    } else {
        console.error('Edit URL not found or is null');
    }
}

function addToAlbum() {
    alert('Add to album option selected');
}

function sharePhoto() {
    alert('Photo shared');
}
