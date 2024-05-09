/*
* This script displays a collage of all photos from each of the albums available.
*
* */

const imagePaths = [
    "assets/images/displayPhotos/album1/5d035-16466484525958-1920.avif",
    "assets/images/displayPhotos/album1/collage-maker-31-may-2023-08-39-pm-2169.avif",
    "assets/images/displayPhotos/album1/collage-maker-31-may-2023-08-45-pm-3200.avif",
    "assets/images/displayPhotos/album1/images.jpg",
    "assets/images/displayPhotos/album1/images3.jpg",
    "assets/images/displayPhotos/album1/images1111.jpg",
    "assets/images/displayPhotos/album1/images1231231.jpg",
    "assets/images/displayPhotos/album1/kimetsu-no-yaiba-2.jpg",
    "assets/images/displayPhotos/album1/kimetsu-no-yaiba-1123123.webp",
    "assets/images/displayPhotos/album1/Rehabilitation_Training_Arc.webp",
    "assets/images/displayPhotos/album1/Tsuzumi_Mansion.webp",
    "assets/images/displayPhotos/album2/a4803d074353bf6easdsadasdd72e5d34691cc2d.jpg",
    "assets/images/displayPhotos/album2/a4803d074353bf6edd72e5d34691cc2d.jpg",
    "assets/images/displayPhotos/album2/b_WALL-MARIA-Tecnografica-579930-rel345d3307.webp",
    "assets/images/displayPhotos/album2/cdb862163f4f6db92d1d095570319c33.jpg",
    "assets/images/displayPhotos/album2/DgdOVPYXUAApagVzzzzz.jpg",
    "assets/images/displayPhotos/album2/episode-1-wall-maria-shiganshina.webp",
    "assets/images/displayPhotos/album2/images.jpg",
    "assets/images/displayPhotos/album2/imagesaaaaa.jpg",
    "assets/images/displayPhotos/album2/Witnessing.webp",
    "assets/images/displayPhotos/album2/zzzzz.png",
    "assets/images/displayPhotos/albumPic.jpg",
    "assets/images/displayPhotos/pexels-alina-chernii-682289345-21529784.jpg",
    // "/assets/images/displayPhotos/pexels-aloevera-21751135.jpg",
    "assets/images/displayPhotos/pexels-andrea-roman-291935393-15475219.jpg",
    "assets/images/displayPhotos/pexels-c1superstar-22940751.jpg",
    "assets/images/displayPhotos/pexels-erik-schereder-3173655-4786538.jpg",
    "assets/images/displayPhotos/pexels-fidan-nazim-qizi-134456769-22031751.jpg",
    "assets/images/displayPhotos/pexels-guesc-21952008.jpg",
    "assets/images/displayPhotos/pexels-itzel-zarate-1170413563-22858523.jpg",
    "assets/images/displayPhotos/pexels-jan-van-der-wolf-11680885-16176669.jpg",
    // "/assets/images/displayPhotos/pexels-jorjo-tav-569235-9152934.jpg",
    // "/assets/images/displayPhotos/pexels-marko_aim-537690234-16549122.jpg",
    "assets/images/displayPhotos/pexels-matteo-roman-1151921619-21358261.jpg"
];

const collageContainer = document.getElementById('imageCollage');

// Function to create the collage
function createCollage() {
    imagePaths.forEach(path => {
        const imgElement = document.createElement('img');
        imgElement.src = path;
        imgElement.alt = 'Image';
        collageContainer.appendChild(imgElement);
    });
}

// Call the function to create the collage when the DOM content is loaded
document.addEventListener('DOMContentLoaded', createCollage);