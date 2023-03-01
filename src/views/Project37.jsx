import { useEffect, useState } from "react"
import "../styles/project37/project37.scss"

export default function Project37({setDirUrl}){

    const [pokes,setPokes]=useState([])

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
        
        getPokemon()
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    }
    
    const getPokemon = async (id) => {
        let pokeNumber = 250
        let newArray=[]
        for (let i = 1; i < pokeNumber; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`
            const res = await fetch(url)
            const data = await res.json()
            newArray.push(data)
        }
        setPokes(newArray)
    }

    return(
        <div className="project37-container">
            <h1>Pokedex</h1>
            <div className="poke-container" id="poke-container">
                {pokes.length===0 && <h1>Cargando...</h1>}
                {pokes.map((poke,i)=>{
                    return(
                        <div className="pokemon" style={{backgroundColor:colors[poke.types[0].type.name]}}>
                            <div className="img-container">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt={poke.name}/>
                            </div>
                            <div className="info">
                                <span className="number">#{poke.id}</span>
                                <h3 className="name">{(poke.name)[0].toUpperCase() + (poke.name).slice(1)}</h3>
                                <small className="type">Type: <span>{(poke.types[0].type.name)[0].toUpperCase() + (poke.types[0].type.name).slice(1)}</span> </small>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}