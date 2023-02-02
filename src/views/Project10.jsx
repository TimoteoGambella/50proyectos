import { useEffect, useState } from "react"
import "../styles/project10/project10.scss"

export default function Project10({setDirUrl}){

    const [search,setSearch]=useState(false)

    useEffect(() => {
        
        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    async function generateJoke() {
        setSearch(true)
        const config = {
          headers: {
            Accept: 'application/json',
          },
        }
      
        const res = await fetch('https://icanhazdadjoke.com', config)
      
        const data = await res.json()
      
        document.getElementById('joke').innerHTML = data.joke
        setSearch(false)

      }
    
    return(
        <div className="project10-container">
            <div className="container">
                <h3>Don't Laugh Challenge</h3>
                <div id="joke" className="joke">/ Joke goes here</div>
                <button id="jokeBtn" className="btn" disabled={search} onClick={()=>generateJoke()}>Get Another Joke</button>
            </div>
        </div>
    )
}