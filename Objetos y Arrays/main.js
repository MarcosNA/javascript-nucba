// JSON (JavaScript Object Notation)




const person = {
    name : "Marcos Nahuel",
    age: 20,
    addres: "Florida, Valentin Alsina",
    career: "Developer FullStack",
    homebanking: {
            banco: "Provincia",
            cbu: 102034545565645346756,
            }
}
//console.log(Object.keys(person));
//console.log(Object.values(person));






// FOR EACH
const objectIteracion = () =>{
    for(let item in person){
        //console.log(item);
        console.log(person[item]);
    }
}
//objectIteracion();






//VALIDAR OBJETOS
const cars = {
    "model":"onix",
    "brand":"chevrolet",
}

const cars2 = {
    "model":"onix",
    "brand":"chevrolet",
}
//console.log(cars.model == cars2.model)

//Metodos Number

//parseInt
const transformar = parseInt("1212");
//console.log(typeof transformar);

//parseFloat
//console.log(parseFloat("5e3"));

//toFixed (REDONDEAR A MAYOR)
const n = 2.364545;
//console.log(n.toFixed(2));

//Math
//console.log()



//ARRAYS

//const myArrays = [1,2,3,4,5,6,7,8,9]
//console.log(myArrays.length); //para saber la cantidad de elementos del array
//console.log(myArrays [4]); //saber que hay en esa posicion del array (arranca en la posicion 0)

//declarar objeto en array
//const myArrays = [{nombre: "Marcos"}, {apellido: "Nahuel"}, {edad: 20}];
//console.log(myArrays[0].nombre);

//matriz
//const myArrays = [[2,4],[1,3]];
//console.log (myArrays [1][0]);

//const myArrays = [1, 2, "tres", true, {saludo:"hola"}];
//console.log(myArrays [3])


//ARRAYS METODOS
//sort, push, filter, find, reverse, map, join, slice
const myArrays = [3,1,2,6,4,5,9,7,8];
console.log(myArrays.sort); //Ordena numeros de forma ascendente segun su orden
console.log(myArrays.push (10)); //Agrega un item al array
console.log (myArrays.reverse); //cambia el orden del array al reves

