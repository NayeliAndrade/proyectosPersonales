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

function setListeners(){
  let btnPreviousClick = document.querySelector(".previous");
  btnPreviousClick.addEventListener("click",previousPage);

  let btnNextClick= document.querySelector(".next");
  btnNextClick.addEventListener("click",nextPage)
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

function search() {
  let btnFilterTitle = document.querySelector("#filterName");
  let btnFilterYear = document.querySelector("#filterYear");

  btnFilterTitle.addEventListener("click", filterTitle);
  btnFilterYear.addEventListener("click", filterYear);
}

function filterTitle() {
  let word = document.querySelector("#search").value;
  const moviesTitle = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title === word) moviesTitle.push(movies[i]);
  }
  printInfo(moviesTitle);
}
/* filtra dependiendo de la condicion  */
function filterYear() {
  let word = document.querySelector("#search").value;
  const moviesYear = [];
  for (let i = 0; i < movies.length; i++) {
    let year = movies[i].release_date;
    let dataYear = year.split("-");
    if (dataYear[0] === word) moviesYear.push(movies[i]);
  }
  printInfo(moviesYear);
}

function setListenerInput(){
  let inputText = document.querySelector("#search")
  inputText.addEventListener("input",(e)=>filterTitle2(e))
}

function filterTitle2(){
  console.log(e.target.value);
}

setListeners()
makeRequest(pages);
search();
/* input busqueda 
buscar peliculas filtrar:
titulo 
año 
*/
