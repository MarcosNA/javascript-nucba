//FETCH

//fetch('http://example.com/movies.json') // necesita como parametro la url que vamos a necesita
  //.then(response => response.json()) //parsear la informacion a json (por lo general son notacion de objetos )
  //.then(data => console.log(data));

//ajax: son peticiones a servidores


const API_URL = "https://jsonplaceholder.typicode.com"

const datos = document.querySelector("#dataContainer")
const ulElement = document.createElement(`ul`)

/*fetch (`${API_URL}/users`)
    .then(Response => Response.json())
    .then(users =>{
        const template = users.map(users => `<li>${users.name} ${users.email}<li>`)
        datos.innerHTML = `<ul>${template}<ul>`
    })*/


fetch (`${API_URL}/users`)
    .then(Response => Response.json())
    .then(users =>{
        users.map(users =>{
            let liElement = document.createElement(`li`)
            liElement.appendChild(
                document.createTextNode(`${users.name} ${users.email}`)
            )
            ulElement.appendChild(liElement)
        })
    datos.appendChild(ulElement)
})
