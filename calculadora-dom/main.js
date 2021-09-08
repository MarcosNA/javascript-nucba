// prompt -  string
// parseInt(promp('Ejemplo numero'))

// getElementById - devuelve un elemento
// getElementsByClassName - devuelve un array

function calcular(){
    operacion = prompt("Que operacion desea realizar?")
    numUNo = parseInt(prompt("Ingrese el primer numero"))
    numDos = parseInt(prompt("Ingrese el segundo numero"))

    if(operacion == "sumar" || operacion == "+"){
        document.getElementById("resultado").innerHTML = numUNo + numDos
    }
    else if(operacion == "restar" || operacion == "-"){
        document.getElementById("resultado").innerHTML = numUNo - numDos
    }
    else if(operacion == "multiplicar" || operacion == "*"){
        document.getElementById("resultado").innerHTML = numUNo * numDos
    }
    else if(operacion == "dividir" || operacion == "/"){
        document.getElementById("resultado").innerHTML = numUNo / numDos
    }
    
}

