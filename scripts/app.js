//console.log('hello app.js')
const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.unserInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const yearToDisplay = document.querySelector('.favoriteMovieYear')


let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');


console.log(titleInStorage);
console.log(imageUrlInStorage);
console.log(yearInStorage);

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    yearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `url('${imageUrlInStorage}')`;

};

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    yearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(hsla(240, 17%, 37%, 0.534), rgba(77, 65, 65, 0.61)),
    url('${posterUrlInput}')`;
    console.log(movieTitleInput);
    console.log(posterUrlInput);
    movieTitle.value = "";
    moviePosterUrl.value = "";
    movieYear.value = "";
});
