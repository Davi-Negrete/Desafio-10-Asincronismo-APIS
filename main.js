import './style.css'

// ! Primer Ejercicio: Chiste al azar

const url_chistes = "https://icanhazdadjoke.com/"

const btnChiste = document.querySelector('#chiste')
const contenedorChiste = document.querySelector('#contenedor_chiste')


async function getChiste(url) {
    try {
        const headers = {
            accept: 'application/json'
        }
        const chiste = await fetch(url_chistes, {headers})
        if ( !chiste.ok ) {
            throw new Error('Lo sentimos, no se pudo hacer la petición')
        }
        const respuestaChiste = await chiste.json()
        console.log(respuestaChiste)

        const p = document.createElement('p')
        p.innerHTML = respuestaChiste.joke
        contenedorChiste.appendChild(p)

    } catch (error) {
        console.error(error)
    }
}

btnChiste.addEventListener('click', function() {
    getChiste(url_chistes)
})


// ! Segundo Ejercicio: Listar Publicaciones de un blog

const url_listaPublicaciones = "https://jsonplaceholder.typicode.com/posts/"

const btnlistaPublicaciones = document.querySelector('#listaPublicaciones')
const contenedor_listaPublicaciones = document.querySelector('#contenedor_listaPublicaciones')


async function getPublicaciones(url) {
    try {
        const publicaciones = await fetch(url_listaPublicaciones)
        if ( !publicaciones.ok ) {
            throw new Error('Lo sentimos, no se pudo hacer la petición')
        }
        const respuestaPublicaciones = await publicaciones.json()
        console.log(respuestaPublicaciones)

        const ol = document.createElement('ol')
        contenedor_listaPublicaciones.appendChild(ol)

        respuestaPublicaciones.forEach(publicacion => {
            
            const li = document.createElement('li')
            const h2 = document.createElement('h2')
            const p = document.createElement('p')

            li.style.marginBottom = '5rem'
            h2.innerHTML = publicacion.title.toUpperCase()
            h2.style.textAlign = "center"
            h2.style.marginBottom = "2.5rem"
            p.innerHTML = publicacion.body.toUpperCase()
            p.style.textAlign = "justify"

            ol.appendChild(li)
            li.appendChild(h2)
            li.appendChild(p)

        })


    } catch (error) {
        console.error(error)
    }
}

btnlistaPublicaciones.addEventListener('click', function() {
    getPublicaciones(url_listaPublicaciones)
})


// ! Tercer Ejercicio: Buscador de Peliculas

const formularioPeliculas = document.querySelector('#formularioPeliculas')
const contenedor_busquedaPelicula = document.querySelector('#contenedor_busquedaPelicula')

async function getPelicula(tituloBuscado) {
  try {
    const url_pelicula = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY_1}&s=${tituloBuscado}`
    const pelicula = await fetch(url_pelicula);
    if (!pelicula.ok) {
      throw new Error('Lo sentimos, no se pudo hacer la petición')
    }
    const respuestaPelicula = await pelicula.json()
    console.log(respuestaPelicula)

    const ol = document.createElement('ol')
    contenedor_busquedaPelicula.appendChild(ol)

    respuestaPelicula.Search.forEach(pelicula => {
            
        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')

        h2.innerHTML = pelicula.Title
        img.src = pelicula.Poster
        img.alt = "imágen poster de la película"
        h3.innerHTML = pelicula.Year
     

        ol.appendChild(li)
        li.appendChild(h2)
        li.appendChild(img)
        li.appendChild(h3)

    })

  } catch (error) {
    console.error(error)
  }
}

formularioPeliculas.addEventListener('submit', function(evento) {
  evento.preventDefault()
  const tituloBuscado = document.querySelector('#tituloBuscado').value
  getPelicula(tituloBuscado)
})




// ! Cuarto Ejercicio: Buscador de fotos

const formularioFotos = document.querySelector('#formularioFotos')
const contenedor_busquedaFotos = document.querySelector('#contenedor_busquedaFotos')

async function getFotos(temaBuscado) {
  try {
    const url_fotos = `https://api.unsplash.com/search/photos?query=${temaBuscado}&client_id=${import.meta.env.VITE_API_KEY_2}`
    const fotos = await fetch(url_fotos)
    if ( !fotos.ok ) {
      throw new Error('Lo sentimos, no se pudo hacer la petición')
    }
    const respuestaFotos = await fotos.json()
    console.log(respuestaFotos)

    respuestaFotos.results.forEach(fotos => {
      
      const img = document.createElement('img')
  
      img.src  = fotos.urls.thumb
      img.classList.add('foto-galeria')

      contenedor_busquedaFotos.appendChild(img)
     
    })

  } catch (error) {
    console.error(error)
  }
}

formularioFotos.addEventListener('submit', function(evento) {
  evento.preventDefault()
  const temaBuscado = document.querySelector('#temaBuscado').value
  getFotos(temaBuscado)
})


