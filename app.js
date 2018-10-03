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

        <h1>${val.song}</h1>

        `
    });

    });
    
}
