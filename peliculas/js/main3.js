let page = 1;

(function () {
  setListeners();
  makeRequest(page);
})();

async function makeRequest(page) {
  try {
    let movies = [];
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ef39abb1c780cab951081e90b90310fd&language=en-US&page=${page}`
    );
    let data = await response.json();
    /* console.log(response);
    console.log(data);
    console.log(data.results); */
    movies = data.results || [];
    appendMovies(movies);
  } catch {
    console.log("Error");
  }
}
/* function appendMovies(movies) {
  for (const movie of movies) {
    
    let img_url = "https://image.tmdb.org/t/p/w200";
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let p = document.createElement("p");

    let movieContainer = document.getElementById("movieContainer");

    let cards = document.createElement("div");
    cards.classList.add("cards");

    img.src = `${img_url}${movie.poster_path}`;
    h2.textContent = movie.title;
    p.textContent = movie.overview;

    cards.appendChild(h2);
    cards.appendChild(img);
    cards.appendChild(p);
    
    movieContainer.appendChild(cards);
    
  }
} */

function appendMovies(movies) {
  const movieContainer = document.getElementById("movieContainer");
  const templeteMovie = document.querySelector("#templeteMovie").content;
  const fragment = document.createDocumentFragment();
  for (const movie of movies) {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w200";
    templeteMovie.querySelector("h2").textContent = `${movie.title}`;
    templeteMovie
      .querySelector("img")
      .setAttribute("src", `${IMAGE_URL}${movie.poster_path}`);
    templeteMovie.querySelector("p").textContent = `${movie.release_date}`;

    const clone = templeteMovie.cloneNode(true);
    fragment.appendChild(clone);
  }
  movieContainer.replaceChildren(fragment);
}

function btnNextClick(event) {
  console.log("EVENT", event.target.tagName, event.target.type);
  if (page > 0 && page <500){
    page++;
  }
  
  console.log(page);

  makeRequest(page);
}

function btnPreviousClick(event) {
  console.log("EVENT", event.target.tagName, event.target.type);
  
  if (page < 500 && page > 1){
    page--;
  }
  console.log(page);
  makeRequest(page);
}

function setListeners() {
  // BTN NEXT
  const btnNext = document.querySelector(".next");
  btnNext.addEventListener("click", btnNextClick);
  //BTN PREVIOUS
  const btnPrevious = document.querySelector(".previous");
  btnPrevious.addEventListener("click", btnPreviousClick);
}
