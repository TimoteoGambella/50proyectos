import { useEffect } from "react"
import "../styles/project7/project7.scss"

export default function Project7({setDirUrl}){

    useEffect(() => {
        
        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const mouseEnter=(position)=>{
        document.querySelector('.project7-container').classList.add(`hover-${position}`)
        document.querySelector(`.project7-container .${position==="right"?"left":"right"} h1`).classList.add(`secondTitle`)
    }
    const mouseLeave=(position)=>{
        document.querySelector('.project7-container').classList.remove(`hover-${position}`)
        document.querySelector(`.project7-container .${position==="right"?"left":"right"} h1`).classList.remove(`secondTitle`)
    }

    return(
        <div className="project7-container">
            <div className="split left" 
                onMouseEnter={() => mouseEnter("left")} 
                onMouseLeave={() => mouseLeave("left")}
            >
                <h1>Playstation 5</h1>
                <a href="##" className="btn">Buy Now</a>
            </div>
            <div className="split right"
                onMouseEnter={() => mouseEnter("right")} 
                onMouseLeave={() => mouseLeave("right")}
            >
                <h1>XBox Series X</h1>
                <a href="##" className="btn">Buy Now</a>
            </div>
        </div>
    )
}