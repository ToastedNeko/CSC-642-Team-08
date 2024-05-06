document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const photoId = params.get('photoId');

    const photoDatabase = {
        "1": "/application/frontend/assets/images/displayPhotos/album1/5d035-16466484525958-1920.avif",
        "2": "/application/frontend/assets/images/displayPhotos/album1/collage-maker-31-may-2023-08-39-pm-2169.avif",
        "3": "/application/frontend/assets/images/displayPhotos/album1/collage-maker-31-may-2023-08-45-pm-3200.avif",
        "4": "/application/frontend/assets/images/displayPhotos/album1/images.jpg",
        "5": "/application/frontend/assets/images/displayPhotos/album1/images1111.jpg",
        "6": "/application/frontend/assets/images/displayPhotos/album1/images1231231.jpg",
        "7": "/application/frontend/assets/images/displayPhotos/album1/images3.jpg",
        "8": "/application/frontend/assets/images/displayPhotos/album1/kimetsu-no-yaiba-1123123.webp",
        "9": "/application/frontend/assets/images/displayPhotos/album1/kimetsu-no-yaiba-2.jpg",
        "10": "/application/frontend/assets/images/displayPhotos/album1/Rehabilitation_Training_Arc.webp",
        "11": "/application/frontend/assets/images/displayPhotos/album1/Tsuzumi_Mansion.webp",
        "12": "/application/frontend/assets/images/displayPhotos/pexels-matteo-roman-1151921619-21358261.jpg",
        "13": "/application/frontend/assets/images/displayPhotos/album2/a4803d074353bf6easdsadasdd72e5d34691cc2d.jpg",
        "14": "/application/frontend/assets/images/displayPhotos/album2/a4803d074353bf6edd72e5d34691cc2d.jpg",
        "15": "/application/frontend/assets/images/displayPhotos/album2/b_WALL-MARIA-Tecnografica-579930-rel345d3307.webp",
        "16": "/application/frontend/assets/images/displayPhotos/album2/cdb862163f4f6db92d1d095570319c33.jpg",
        "17": "/application/frontend/assets/images/displayPhotos/album2/DgdOVPYXUAApagVzzzzz.jpg",
        "18": "/application/frontend/assets/images/displayPhotos/album2/episode-1-wall-maria-shiganshina.webp",
        "19": "/application/frontend/assets/images/displayPhotos/album2/images.jpg",
        "20": "/application/frontend/assets/images/displayPhotos/album2/imagesaaaaa.jpg",
        "21": "/application/frontend/assets/images/displayPhotos/album2/Witnessing.webp",
        "22": "/application/frontend/assets/images/displayPhotos/album2/Witnessing.webp", // Note: this repeats the same image as ID 21
        "23": "/application/frontend/assets/images/displayPhotos/album1/Tsuzumi_Mansion.webp", // Note: this repeats an image from earlier, check if this is correct
        "24": "/application/frontend/assets/images/displayPhotos/album2/zzzzz.png",
        "25": "/application/frontend/assets/images/displayPhotos/pexels-alina-chernii-682289345-21529784.jpg",
        "26": "/application/frontend/assets/images/displayPhotos/pexels-aloevera-21751135.jpg",
        "27": "/application/frontend/assets/images/displayPhotos/pexels-andrea-roman-291935393-15475219.jpg",
        "28": "/application/frontend/assets/images/displayPhotos/pexels-c1superstar-22940751.jpg",
        "29": "/application/frontend/assets/images/displayPhotos/pexels-erik-schereder-3173655-4786538.jpg",
        "30": "/application/frontend/assets/images/displayPhotos/pexels-fidan-nazim-qizi-134456769-22031751.jpg",
        "31": "/application/frontend/assets/images/displayPhotos/pexels-guesc-21952008.jpg",
        "32": "/application/frontend/assets/images/displayPhotos/pexels-itzel-zarate-1170413563-22858523.jpg",
        "33": "/application/frontend/assets/images/displayPhotos/pexels-jan-van-der-wolf-11680885-16176669.jpg",
        "34": "/application/frontend/assets/images/displayPhotos/pexels-jorjo-tav-569235-9152934.jpg",
        "35": "/application/frontend/assets/images/displayPhotos/pexels-marko_aim-537690234-16549122.jpg",
        "36": "/application/frontend/assets/images/displayPhotos/pexels-matteo-roman-1151921619-21358261.jpg"
    };
    

    const photoToEdit = document.getElementById('photoToEdit');
    if (photoId && photoDatabase[photoId]) {
        photoToEdit.src = photoDatabase[photoId];
        photoToEdit.alt = `Photo ${photoId}`;
    } else {
        console.error('Invalid photo ID or photo ID not provided in the URL');
        // Optionally, redirect or display a default image
        photoToEdit.alt = 'No photo found';
    }
});
