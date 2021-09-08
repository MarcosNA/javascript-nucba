//ASINCRONIA

//.Concurrencia => Una sola tarea se ejecuta en un momento determinado

//.Paralelismo => Multiples tareas se ejecutan simultaneamente

//Javascript es Asincrono y concurrente
//. Solo sepuede ejecutar una instruccion a la vez
//. El event loop es la pieza fundamental quue coordina la ejecucion, eventosy callbacks
//. Node.js y los navegadores implementan la funcionalidad de hablar con la web, sistema operativo, file system, etc.


/*setTimeout(() =>{
    console.log("hola")
}, 3000)*/


/*const callBack = () => console.log("Este es el callback a llamar")
setTimeout (callBack, 4000)*/

/*const saludo = () => console.log ("hola marcos")
const mensaje = () => console.log ("sos un profesor mediocre")
const adios = () => console.log ("nos vemos")

console.log ("entre en la funcion")

setTimeout (saludo, 2000);
setTimeout (mensaje, 4000);
setTimeout(adios, 6000);*/


const datos = [
    {
        id: 1,
        title: "Batman return",
        year: 1992,
    },
    {
        id: 2,
        tittle: "Avengers",
        year: 2018,
    },
    {
        id: 3,
        tittle: "Spiderman",
        year: 1999,
    }
]



const getDatos = () =>{

    setTimeout(() =>{
        console.log(datos.filter (item => item.id > 2))
    }, 1500)
        
}

getDatos()
