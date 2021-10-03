const urlAPi = "https://rickandmortyapi.com/api/episode"

window.addEventListener(`load`, () => {
2
    const nameEpisodio = document.getElementById("name-episodios")
    const episodios = document.getElementById("episodios")
    const ul = document.createElement(`ul`)
    const ul2 = document.createElement(`ul`)
    const data = JSON.parse(localStorage.getItem(`episodios`))

   const getData = () =>{

        return fetch(urlAPi)
        .then(response => response.json())
        //.then(characters => localStorage.setItem(`characters`, JSON.stringify(characters.results.flatMap(item => item.image))))
        .then(episodios => localStorage.setItem(`episodios`, JSON.stringify(episodios.results.flatMap(item => ({name: item.name, episode: item.episode})))))
   }
    
   getData()

   if(data){
       data.map(item => {
            const li = document.createElement(`li`)
            const li2 = document.createElement(`li`)
            const span = document.createElement(`span`)
            const span2 = document.createElement(`span`)

            span.appendChild(document.createTextNode(item.name))
            span2.appendChild(document.createTextNode(item.episode))

            li.appendChild(span)
            li2.appendChild(span2)

            ul.appendChild(li)
            ul2.appendChild(li2)

            nameEpisodio.appendChild(ul)
            episodios.appendChild(ul2)
       })
   }
  
})