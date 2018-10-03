window.onload = function() {
    const form = document.querySelector('#form');
    const genre = document.querySelector('#genre');
    const container = document.querySelector("#container");
    
    console.log(data);


    let dataDiv = document.querySelector('#data');
    form.addEventListener('submit', function(event){ 
    event.preventDefault();
    container.innerHTML = data.filter((filter) => {

        console.log('genre', genre.value);
        return filter.genre === genre.value;

    })


    .map((val) => {

        return `
        <div id = "songBox">
            <div id = "title">
                <h2>${val.song}</h2>
            </div>
            <img src=${val.image} width="250" height="auto">
            <h3>${val.artist}</h3>
            <br>
            <br>
            <h5>(${val.genre})</h5>
        </div>
        `

    })
    .join("");
    });
    
}
