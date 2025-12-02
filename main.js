const movies = [
    { id: 1, title: "Inception", rating: 8 },
    { id: 2, title: "Interstellar", rating: 9 },
    { id: 3, title: "Shutter Island", rating: 7 }
];

const movieList = document.getElementById("movieList");
const ratingInput = document.getElementById("ratingInput");
const titleInput = document.getElementById("titleInput");
const addBtn = document.getElementById("addBtn");

const searchInput = document.getElementById("searchInput");
const ratingFilter = document.getElementById("ratingFilter");

function displayMovies(arrayOfMovies) {

    movieList.innerHTML = "";

    arrayOfMovies.forEach((mov) => {

        const movieDiv = document.createElement("div");
        movieDiv.innerHTML = `Film : ${mov.title} — Note : ${mov.rating}`;
        movieList.appendChild(movieDiv);

    })
}

function ajouterMovie(titleValue, ratingValue) {

    const movie = {
        id: Date.now(),
        title: titleValue,
        rating: ratingValue
    };
    movies.push(movie);
}


addBtn.addEventListener('click', () => {

    const titleValue = titleInput.value;
    const ratingValue = ratingInput.value;

    ajouterMovie(titleValue, ratingValue);
    displayMovies(movies);
})

searchInput.addEventListener('input', () => {

    movieList.innerHTML = "";

    const searchValue = searchInput.value.toLocaleLowerCase();

    const filtred = movies.filter(mov => mov.title.toLocaleLowerCase().includes(searchValue));

    console.log(filtred);

    if (filtred) {
        displayMovies(filtred);
        return;
    }


    displayMovies(movies)



})

ratingFilter.addEventListener('change', () => {

    movieList.innerHTML = "";
    const ratingValue = ratingFilter.value;
    console.log(ratingValue);

    let filtered = movies.filter(mov=> mov.rating > ratingValue)

        if(filtered){
            displayMovies(filtered)
            return
        }

            displayMovies(movies)
        

})


displayMovies(movies);