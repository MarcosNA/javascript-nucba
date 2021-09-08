function mySelect(){
    let selectValue = document.getElementById("mySelect").value
    document.getElementById("auto").innerHTML = selectValue
}

function input(){
    let inputValue = document.getElementById("input")
    inputValue.value = inputValue.value.toUpperCase()
    //alert(inputValue.value)
}

const selectElement = document.querySelector(".helado")

selectElement.addEventListener("change", (event)=>{
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = event.target.value
})