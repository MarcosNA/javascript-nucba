/*function addBg(){
    const changeColor = document.getElementById("cuadrado")
    changeColor.classList.add("extra")
}
function resBg(){
    const resetColor = document.getElementById("cuadrado")
    resetColor.classList.remove("extra")
}
*/

function updateBg(reset){
    const changeColor = document.getElementById("cuadrado")

    /*if(reset == true){
        changeColor.classList.add("extra")
    }
    else{
        changeColor.classList.remove("extra")
    }*/

    reset ? changeColor.classList.add("extra"):
    changeColor.classList.remove("extra") 
}