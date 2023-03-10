import { useEffect } from "react"
import "../styles/project20/project20.scss"

export default function Project20({setDirUrl}){

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="project20-container">
            <button className="ripple" id="button" onClick={(e)=>{
                const x = e.pageX
                const y = e.pageY
        
                const buttonTop = e.target.offsetTop
                const buttonLeft = e.target.offsetLeft
        
                const xInside = x - buttonLeft
                const yInside = y - buttonTop
        
                const circle = document.createElement('span')
                circle.classList.add('circle')
                circle.style.top = yInside + 'px'
                circle.style.left = xInside + 'px'
        
                document.getElementById("button").appendChild(circle)
        
                setTimeout(() => circle.remove(), 500)
            }}>Click Me</button>
        </div>
    )
}