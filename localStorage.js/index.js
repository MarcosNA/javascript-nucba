//setItem ==> almacena items en el local storage
//getItem ==> para consumir / leer item almacenado en el local storage
//removeItem ==>  para eliminar el item almacenado en el local storage
//clear ==>  elimina TODOS los items almacenado en el local storage



const button = document.getElementById("set-local-storage")


const names = [
    {name: "Marcos"},
    {name: "Pablo"},
    {name: "Agustin"}
    
]

localStorage.setItem("Nucba", JSON.stringify(names))

const list = JSON.parse(localStorage.getItem("Nucba"))

list.forEach(item => {

const resultado = document.getElementById("resultado")

let p = document.createElement("p")

p.appendChild(document.createTextNode(item.name))

resultado.appendChild(p)
  
});


  
