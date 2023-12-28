let pages = 1;
let movies = [];
function makeRequest(pages) {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=ef39abb1c780cab951081e90b90310fd&language=en-US&page=${pages}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      movies = data.results || [];
      printInfo(movies);
    })
    .catch((err) => console.log("Request fail", err));
}

function printInfo(moviesData) {
  let movieContainer = document.querySelector("#movieContainer");
  movieContainer.innerHTML = "";
  const IMAGE_URL = "https://image.tmdb.org/t/p/w200";

  for (i of moviesData) {
    const pelis = `
    <div class="cards">
    <img src="${IMAGE_URL}${i.poster_path}" alt="">
    <p class="title">${i.title}</p>
    <p>${i.release_date}</p>
    <p>${i.overview}</p>
    </div>
    `;
    movieContainer.innerHTML += pelis;
  }
}

function setListeners() {
  let btnPreviousClick = document.querySelector(".previous");
  btnPreviousClick.addEventListener("click", previousPage);

  let btnNextClick = document.querySelector(".next");
  btnNextClick.addEventListener("click", nextPage)
}

function previousPage() {
  if (pages > 1) {
    pages -= 1;
    makeRequest(pages);
  }
}

function nextPage() {
  if (pages < 500) {
    pages += 1;
    makeRequest(pages);
  }
}


const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", filterTitleInRealTime);
function filterTitleInRealTime() {
  const searchTerm = searchInput.value.toLowerCase(); // Búsqueda insensible a mayúsculas y minúsculas
  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm);
  });
  printInfo(filteredMovies);
}

const filterYearButton = document.querySelector("#filterYearButton");
filterYearButton.addEventListener("click", filterYearInRealTime);

function filterYearInRealTime() {
  const searchTerm = document.querySelector("#search").value;
  const filteredMovies = movies.filter((movie) => {
    const releaseYear = movie.release_date.split("-")[0];
    return releaseYear === searchTerm;
  });
  printInfo(filteredMovies);
}

setListeners()
makeRequest(pages);