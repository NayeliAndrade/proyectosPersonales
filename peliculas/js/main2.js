let pages = 1;
let movies = [];
let number = 1;

(()=>{
    console.log("m",number);
    fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=ef39abb1c780cab951081e90b90310fd&language=en-US&page=${number}`
      )
        .then((response) => response.json())
        .then((data) => {
          /* btn() */
          movies = data.results || [];
          printInfo(movies);
        })
        .catch((err) => console.log("Request fail", err));
        
        
        console.log("w",number);
})(number);

function btn(){
    let btnRight = document.querySelector(".right")
    btnRight.addEventListener("click",next)
}

function next(){
    number+=1;
    console.log(number);
    return number
    
}
btn()


function printInfo(moviesData) {
    let movieContainer = document.querySelector(".movieContainer");
    movieContainer.innerHTML = "";
    const IMAGE_URL = "https://image.tmdb.org/t/p/w200";
  
    for (i of moviesData) {
      const pelis = `
      <div class="all">
      <img src="${IMAGE_URL}${i.poster_path}" alt="">
      <p class="title">${i.title}</p>
      <p>${i.release_date}</p>
      <p>${i.overview}</p>
      </div>
      `;
      movieContainer.innerHTML += pelis;
    }
  }
  
  /* function previewPage() {
    if (pages > 1) {
      pages -= 1;
    }
  }
  
  function next() {
    if (pages < 500) {
      pages += 1;
    }
  } */
  
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
  
 
  search();