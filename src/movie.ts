import { movies } from "./movie-array";

let movieCardWrapper:any = document.querySelector(".movie-results-wrapper");

let searchInput = document.getElementById("movie-search") as HTMLInputElement;
let searchBtn = document.getElementById("search-btn");
searchBtn?.addEventListener("click", movieSearch);

let yearUpBtn = document.getElementById("year-up") as HTMLButtonElement;
yearUpBtn?.addEventListener("click", yearUp);

let yearDownBtn = document.getElementById("year-down") as HTMLButtonElement;
yearDownBtn?.addEventListener("click", yearDown);

let bestRateBtn = document.getElementById("best-rate") as HTMLButtonElement;
bestRateBtn?.addEventListener("click", bestRating);

createCard(movies);

function createCard(paramOne:string[]){
    paramOne.forEach(movie => {
        let card = movieCardWrapper?.appendChild(document.createElement("div"));
        

        let title:any = card?.appendChild(document.createElement("h2"));
        let year:any = card?.appendChild(document.createElement("p"));
        let director:any = card?.appendChild(document.createElement("h4"));
        let runTime:any = card?.appendChild(document.createElement("p"));
        let genre:any = card?.appendChild(document.createElement("p"));
        let rating:any = card?.appendChild(document.createElement("p"));


        title.innerHTML = movie[0];
        year.innerHTML = movie[1];
        director.innerHTML = movie[2];
        runTime.innerHTML = movie[3];
        genre.innerHTML = movie[4];
        rating.innerHTML = movie[5];
    });
}

function yearUp(event: Event):void {
    event.preventDefault();
    movieCardWrapper.innerHTML = "";
    if (yearUpBtn) {
        let moviesCopyForSort:any = movies.slice();
            moviesCopyForSort.sort((a:any, b:any) => {
                return a[1].localeCompare(b[1]);
            });
            createCard(moviesCopyForSort);
        }        
};


function yearDown(event: Event):void {
    event.preventDefault();
    movieCardWrapper.innerHTML = "";
    if (yearDownBtn) {
        let moviesCopyForSort:any = movies.slice();
            moviesCopyForSort.sort((a:any, b:any) => {
                return b[1].localeCompare(a[1]);
            });
            createCard(moviesCopyForSort);
        }        
};


function bestRating(event: Event):void {
    event.preventDefault();
    movieCardWrapper.innerHTML = "";
    if (bestRateBtn) {
        let moviesCopyForSort:any = movies.slice();
            moviesCopyForSort.sort((a:any, b:any) => {
                return b[5].localeCompare(a[5]);
            });
            createCard(moviesCopyForSort);
        }        
};


function movieSearch(){
    movieCardWrapper.innerHTML = "";
let searchTerm = searchInput.value.toLocaleLowerCase();
let searchResult:any = movies.filter((movie) => movie[0].toLocaleLowerCase().includes(searchTerm) || movie[1].includes(searchTerm) ||movie[2].toLocaleLowerCase().includes(searchTerm));
createCard(searchResult);
}



