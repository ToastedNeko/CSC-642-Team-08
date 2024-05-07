function saveAlbumName() {
    const inputField = document.getElementById('albumName');
    const newName = inputField.value;

    console.log('Saving new album name:', newName);
    // Simulate a successful save operation
    console.log('Saved successfully');

    alert('Album name saved as "' + newName + '".');

    // Make the input field read-only again
    inputField.readOnly = true;
}

