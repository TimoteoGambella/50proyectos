import { useEffect, useState } from "react"
import { reloadStyles } from "../helper/reload"
import "../styles/project17/project17.scss"

export default function Project17({setDirUrl}){

    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

    const [main,setMain]=useState([])
    const [search,setSearch]=useState([])

    useEffect(() => {

        reloadStyles(setDirUrl)
        
        setMain(document.getElementById('main'))
        setSearch(document.getElementById('search'))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    getMovies(API_URL)

    async function getMovies(url) {
        const res = await fetch(url)
        const data = await res.json()

        showMovies(data.results)
    }

    function showMovies(movies) {
        main.innerHTML = ''

        movies.forEach((movie) => {
            const { title, poster_path, vote_average, overview } = movie

            const movieEl = document.createElement('div')
            movieEl.classList.add('movie')

            movieEl.innerHTML = `
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
            <h3>Overview</h3>
            ${overview}
            </div>
            `
            main.appendChild(movieEl)
        })
    }

    function getClassByRate(vote) {
        if(vote >= 8) {
            return 'green'
        } else if(vote >= 5) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    const submitForm=(e) => {
        e.preventDefault()

        const searchTerm = search.value

        if(searchTerm && searchTerm !== '') {
            getMovies(SEARCH_API + searchTerm)

            search.value = ''
        } else {
            window.location.reload()
        }
    }

    return(
        <div className="project17-container">
            <header>
                <form id="form" onSubmit={(e)=>submitForm(e)}>
                    <input type="text" id="search" className="search" placeholder="Search"/>
                </form>
            </header>

            <main id="main"></main>
        </div>
    )
}