function myForm(event){
    event.preventDefault(); // para que el formulario no renderice
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ //expresion regular para email
    const formState = []

    //asignar el valor por id del input name a la variable
    let name = document.getElementById("name") 
    let surname = document.getElementById("surname")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    //Validacion de los input mediante ternarios
    !name.value ? name.classList.add("error") : 
    formState.push({element: "name", value: name.value}) && name.classList.remove("error")

    !surname.value ? surname.classList.add("error") : 
    formState.push({element: "surname", value: surname.value}) && surname.classList.remove("error")

    !email.value || !email.value.match (mailFormat) ? email.classList.add("error") : 
    formState.push({element: "email", value: email.value}) && email.classList.remove("error")

    !password.value ? password.classList.add("error") : 
    formState.push({element: "password", value: password.value}) && password.classList.remove("error")


    //tomar solo los valores del input y mostralo en pantalla
    const dato = document.getElementById("formValues")
    const html = formState.map(item => item.value) //recorer los valores del array

    html.forEach(item => {
        let p = document.createElement("p")
        p.innerHTML = item
        return dato.appendChild(p)
    })
}   
