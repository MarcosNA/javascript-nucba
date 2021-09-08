//THIS
//Hace refernecia al contexto en el que se esta ejecutando la funcion


//INVOCACION DIRECTA
//INVOCACION POR METEDO

const marcos ={
    name: "Marcos",
    age: 20,
    instagram: "@nahuelmarcos",
    saludar: function (vozAlta, despeidaAlta ){
        const saludoOficial = "hola soy "+this.name
        const despedidaOficial = "Adios"

        const seguimeInstagram = () =>console.log("seguime en "+this.instagram)

        const saludo = vozAlta ? saludoOficial.toUpperCase() : saludoOficial
        const despedida = despeidaAlta ? despedidaOficial.toUpperCase() : despedidaOficial

        console.log(saludo)

        if(despeidaAlta){
            console.log(despedida)
        }
            
        seguimeInstagram()
    },
    
    familia:{
        name: "agustina",
        age: 22,
        saludar: function (){
            console.log("Hola "+this.name)
        }
    }
},

function saludar(name) {
    console.log(name)
}

const saludar2 = new saludar(marcos)


//hacer el mismo objeto sin repetir codigo
//const pepe = { name: "pepe" }

//call
//marcos.saludar.call(pepe, true, true)

//apply
//marcos.saludar.apply(pepe,[true, true])


const boton = document.getElementById("button")

boton.addEventListener("click", marcos.saludar.bind(marcos, false, false))




//Clases, Constructores

class persona{
    constructor(name){
        this.name = name
        this.saludar = this.saludar.bind(this)
    }

    saludar(){
        console.log("hola "+this.name)
    }
}

persona("Marcos")