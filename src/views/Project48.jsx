import { useEffect, useState } from "react"
import "../styles/project48/project48.scss"

export default function Project48({setDirUrl}){

    
    useEffect(() => {
        
        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
        
        putPhotos()

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const [imgs,setImgs]=useState([])
      
    const unsplashURL = 'https://source.unsplash.com/random/'
    const rows = 5
    
    function putPhotos(){
        let array=[]
        for(let i = 0; i < rows * 3; i++) {
            array.push(`${unsplashURL}${getRandomSize()}`)
        }
        setImgs(array)
    }
    
    function getRandomSize() {
        return `${getRandomNr()}x${getRandomNr()}`
    }
    
    function getRandomNr() {
        return Math.floor(Math.random() * 10) + 300
    }

    return(
        <div className="project48-container">
            <h1 className="title">Random Image Feed</h1>
            <div className="container">
                {imgs.map((obj,i)=>{
                    return(
                        <img key={i} src={obj} alt={`FotoFeed${i}`}/>
                    )
                })}
            </div>
        </div>
    )
}