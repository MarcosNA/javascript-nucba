window.addEventListener("load", () =>{

    class Smartphone{
        constructor (marca){
            this.marca = marca
        }

        mensaje (){
            return `Ha llegado tu smartphone de la marca ${this.marca}`
        }
    }

    //herencia de clase
    class Modelo extends Smartphone{
        constructor (marca, modelo){
            super(marca)
            this.modelo = modelo
        }

        mensajeCompleto (){
            return `${this.mensaje()} y el modelo es ${this.modelo}`
        }
    }

    
    let mySmartphone = new Modelo("Motorola", "One funsion");
    document.getElementById(`resultado`).innerHTML = mySmartphone.mensajeCompleto()
}, true) 



//class Calculadora

class Calculadora{
    constructor(n1, n2){
        this.n1 = n1
        this.n2 = n2
    }

    resatar(){
        return this.n1 - this.n2
    }

    sumar (){
        return this.n1 + this.n2
    }

    dividir(){
        return this.n1 / this.n2
    }

    multiplicar(){
        return this.n1 * this.n2
    }

}

let myCalculadora = new Calculadora(10,12)

console.log (myCalculadora.sumar())
