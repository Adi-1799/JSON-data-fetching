let photos = [];
let users =[];
oneuser();
function oneuser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => users = json)
    .then(() => {
        for (let userItem of users) {
            toApperend.innerHTML += `
            <div class="card text-center " style="width: 18rem; margin: 1rem;">
                    <div class="card-body cards">
                        <h5 class="card-title title_name">${userItem.name}</h5>
                        <p class="card-text">${userItem.username}</p>
                        <p class="card-text">${userItem.email}</p>
                        <p class="card-text">${userItem.phone}</p>
                        <p class="card-text">${userItem.website}</p>
                        <a href="#toAppendMore" class="btn btn-primary" target="_top" onclick="#">Album</a>
                        <a href="#" class="btn btn-primary" onclick="delte()">Delete</a>
                    </div>
                </div>  
                `;
        }
        
    })
}



    // "address": {
    //   "street": "Kulas Light",
    //   "suite": "Apt. 556",
    //   "city": "Gwenborough",
    //   "zipcode": "92998-3874",

    //   "geo": {
    //     "lat": "-37.3159",
    //     "lng": "81.1496"
    //   }
    // },
    
    // "company": {
    //   "name": "Romaguera-Crona",
    //   "catchPhrase": "Multi-layered client-server neural-net",
    //   "bs": "harness real-time e-markets"