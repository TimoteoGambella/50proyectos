import { useEffect } from "react"
import { reloadStyles } from "../helper/reload";
import "../styles/project14/project14.scss"

export default function Project14({setDirUrl}){

    useEffect(() => {

        reloadStyles(setDirUrl)
        
        const toggle = document.getElementById('toggle')
        const nav = document.getElementById('nav')
    
        toggle.addEventListener('click', () => nav.classList.toggle('active'))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="project14-container">
            <nav className="active" id="nav">
                <ul>
                    <li><a href="##">Home</a></li>
                    <li><a href="##">Works</a></li>
                    <li><a href="##">About</a></li>
                    <li><a href="##">Contact</a></li>
                </ul>
                <button className="icon" id="toggle" onClick={()=>document.getElementById('nav').classList.toggle('active')}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                </button>
            </nav>
        </div>
    )
}