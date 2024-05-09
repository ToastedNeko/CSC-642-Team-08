/*
* This script allows a user to add images to the page.
* This only shows the image; it doesn't store it.
*
* */

const imagePreviews = document.getElementById('imagePreviews');
const uploadButton = document.getElementById('upload-button');
let totalFiles = 0;
let filesUploaded = 0;

// Prevent default drag behaviors for the entire document body
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    document.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop zone when a file is dragged over the entire document
['dragenter', 'dragover'].forEach(eventName => {
    document.addEventListener(eventName, highlight, false);
});

// Unhighlight drop zone when a file is dragged out of the entire document
['dragleave', 'drop'].forEach(eventName => {
    document.addEventListener(eventName, unhighlight, false);
});

// Handle file drop on the entire document
document.addEventListener('drop', handleDrop, false);

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    imagePreviews.classList.add('highlight');
}

function unhighlight() {
    imagePreviews.classList.remove('highlight');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files || e.target.files; // Fix for different browser behaviors
    totalFiles += files.length;
    handleFiles(files);
}

function handleFiles(files) {
    for (const file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // Determine the aspect ratio of the original image
                    const aspectRatio = img.width / img.height;

                    // Calculate the new width and height to fit within 300x300 box
                    let newWidth, newHeight;
                    if (aspectRatio > 1) { // Landscape orientation
                        newWidth = Math.min(img.width, 100);
                        newHeight = newWidth / aspectRatio;
                    } else { // Portrait or square orientation
                        newHeight = Math.min(img.height, 100);
                        newWidth = newHeight * aspectRatio;
                    }

                    // Resize the canvas and draw the image
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);

                    // Create a new Image element with the resized image
                    const resizedImg = new Image();
                    resizedImg.src = canvas.toDataURL('image/jpeg');
                    resizedImg.classList.add('image-preview');
                    imagePreviews.appendChild(resizedImg);

                    // Increment filesUploaded and check if all files are uploaded
                    filesUploaded++;
                    if (filesUploaded === totalFiles) {
                        uploadButton.disabled = false; // Enable the upload button
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
}

uploadButton.addEventListener('click', function() {
    console.log('Upload button clicked'); // Check if this message appears in the browser console
    simulateUpload();
    uploadButton.disabled = true; // Disable the upload button until the upload is complete
});

function simulateUpload() {
    let progress = 0;
    const progressBar = document.createElement('div');
    progressBar.classList.add('upload-progress-bar');
    const progressIndicator = document.createElement('div');
    progressIndicator.classList.add('progress');
    progressBar.appendChild(progressIndicator);
    imagePreviews.appendChild(progressBar);

    const interval = setInterval(() => {
        progress += 20;
        progressIndicator.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
            // Remove the progress bar after completion
            progressBar.remove();
            // Reset counters
            totalFiles = 0;
            filesUploaded = 0;

            // Remove uploaded images
            const uploadedImages = imagePreviews.querySelectorAll('.image-preview');
            uploadedImages.forEach(image => {
                image.remove();
            });

            // Clear the upload button disabled state
            uploadButton.disabled = false;

            // Show a mock upload alert
            setTimeout(() => {
                alert('Upload completed!');
            }, 250);
        }
    }, 200);
}


