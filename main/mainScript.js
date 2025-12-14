const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector(".searchInput");
const searchDiv = document.querySelector(".searchDiv");


// TO hide and show search button
function whenClickOnSearchBtn() {
  searchBtn.addEventListener("click", () => {
    searchInput.classList.toggle("hideShow");
  });
}
whenClickOnSearchBtn();

// To show user matching names when typing
function typing() {
  searchInput.addEventListener("input", () => {
    let movieName = searchInput.value;

    if (movieName !== "") {
      async function dataFetch() {
        let myApi = await fetch(
          `https://www.omdbapi.com/?apikey=d0140c1d&s=${movieName}`
        );
        let data = await myApi.json();

        if (data.Response === "True") {
          data.Search.forEach((movie) => {
            console.log(movie);
          });
        } else {
          console.log("No movies found");
        }
      }

      dataFetch();
    }
  });
}

typing();
