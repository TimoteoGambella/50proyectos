import { useEffect } from "react"
import "../styles/project14/project14.scss"

export default function Project14({setDirUrl}){

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