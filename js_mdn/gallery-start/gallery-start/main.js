const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const img_filenames = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg'
]

/* Declaring the alternative text for each image file */
const img_alternatives = [
    'picture 1',
    'picture 2',
    'picture 3',
    'picture 4',
    'picture 5'
]

let darken = false;

/* Looping through images */
for (let i = 0; i <= img_filenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', './images/' + img_filenames[i]);
    newImage.setAttribute('alt', img_alternatives[i]);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (event) => {
    displayedImage.setAttribute('src', event.target.src);
    displayedImage.setAttribute('alt', event.target.alt);
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (event) => {
    console.log(overlay.style);
    if (darken) {
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
        darken = false;
    } else {
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
        darken = true;
    }
    
})