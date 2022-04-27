let users = [];
let photos = [];
let albums = [];
user();
function user(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    )
    .then(json => users = json)
    .then(() => {
        for (let item of users) {
            console.log(item)
            toAppend.innerHTML += `
            <div class="card text-center" style="width: 18rem; margin: 1rem;">
                <div class="card-body">
                    <h5 class="card-title title_name">${item.name}</h5>
                    <p class="card-text">${item.username}</p>
                    <a href="details_albums.html" class="btn btn-primary" target="_top" onclick="oneuser()">Album</a>
                    <a href="" class="btn btn-primary">Delete</a>
                </div>
            </div>  
            `;
            
        }
    })
}

// function photo(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => user = json)
//     .then(() => {
//         for (let item of users) {
//             for (let user_name of Object.keys(item)) {
//                 toAppendMore.innerHTML += `
//                 <div class="card text-center more" style="width: 18rem; margin: 1rem;">
//                  <div class="card-body">
//                      <h5 class="card-title">${user_name.item}</h5>
//                      <p class="card-text">${user_name.item}</p>
//                      <a href="" class="btn btn-primary">Photos</a>
//                      <a href="" class="btn btn-primary">Delete</a>
//                  </div>
//                 </div>  
//                 `;
//             }
//         }
//     })
// }

// function search() {
//     let input = document.getElementsByClassName('searchbar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('title_name');
      
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";                 
//         }
//     }
// }



