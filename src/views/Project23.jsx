import { useEffect } from "react"
import "../styles/project23/project23.scss"

export default function Project23({setDirUrl}){
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
        <div className="project23-container">
            <div class="kinetic"></div>
        </div>
    )
}