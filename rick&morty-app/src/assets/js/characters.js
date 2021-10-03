const urlAPi = `https://rickandmortyapi.com/api/character`

window.addEventListener(`load`, () => {
2
    const character = document.getElementById("characters")
    const ul = document.createElement(`ul`)
    const data = JSON.parse(localStorage.getItem(`characters`))

   const getData = () =>{

        return fetch(urlAPi)
        .then(response => response.json())
        //.then(characters => localStorage.setItem(`characters`, JSON.stringify(characters.results.flatMap(item => item.image))))
        .then(characters => localStorage.setItem(`characters`, JSON.stringify(characters.results.flatMap(item => ({name: item.name, image: item.image})))))
   }
    
   getData()

   if(data){
       data.map(item => {
            const li = document.createElement(`li`)
            const img = document.createElement(`img`)
            const span = document.createElement(`span`)

            img.src = item.image
            span.appendChild(document.createTextNode(item.name))
            li.appendChild(img)
            li.appendChild(span)
            ul.appendChild(li)
            character.appendChild(ul)
       })
   }
  
})