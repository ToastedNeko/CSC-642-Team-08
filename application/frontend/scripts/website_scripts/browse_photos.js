document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.photo-item img');
    const contextMenu = document.getElementById('contextMenu');

    images.forEach(img => {
        img.addEventListener('contextmenu', function(event) {
            event.preventDefault(); 
            contextMenu.style.display = 'block'; 
            contextMenu.style.left = event.pageX + 'px'; 
            contextMenu.style.top = event.pageY + 'px';
        });
    });

    document.addEventListener('click', function(event) {
        
        if (event.button !== 2) { // Not a right-click
            contextMenu.style.display = 'none';
        }
    });

    document.addEventListener('contextmenu', function(event) {
        if (!event.target.closest('.photo-item img')) {
            contextMenu.style.display = 'none';
        }
    });
});

function editPhoto() {
    console.log('Edit photo option selected'); 
}

function addToAlbum() {
    console.log('Add to album option selected'); 
}
