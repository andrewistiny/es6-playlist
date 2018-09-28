const musicArea = document.querySelector("#music");
const form = document.querySelector("#form")
const formAnsPop = document.querySelector("#Pop");
const formAnsRock = document.querySelector("#Rock");
let currentGenre;


formAnsRock.addEventListener("click", () => {
    currentGenre = "Rock"
    console.log(currentGenre);
})
const HTMLtemplateBuilder = formAnsPop.addEventListener("click", () => {
    currentGenre = "Pop";
    
return data.filter((genre) => {
    return genre.genre === currentGenre; 
}).map((genre) => {
    return `
        <h1>${genre.song}</h1>
        <h2>${genre.artist}</h2>
        <img src="${genre.image}">
        <h2>${genre.genre}</h2>
    `
}).join(""); 
})
console.log(HTMLtemplateBuilder);



musicArea.innerHTML = HTMLtemplateBuilder;