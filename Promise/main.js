//PROMISE
// SOn un objeto especial de js que nos permite ejecutar codigo que cuando este listo, se devuelve y si no esta, devuelve un error


const datos = [
    {
        nombre: "Marcos",
        equipo: "Independiente",
        posicion: "Defensor",
    },
    {
        nombre: "Agustin",
        equipo: "Lanus",
        posicion: "Delantero"
    }
]

/*const getDato = () =>{
    return new Promise ((resolve, reject) =>{
        if(datos.length === 0){
            reject (new Error("no existen los datos"))
        }
        setTimeout(() => {
           resolve(datos) 
        }, 1500);
    })
}


//getDato().then(datos => console.log(datos))


const fetchedData = async () => {
    try{
        const fetchedValues = await getDato()
        console.log(fetchedValues)
    } catch(error){
        console.log(error)
    }
}

fetchedData()*/