import { useEffect, useState } from "react"
import "../styles/project4/project4b.scss"

export default function Project4b({setDirUrl}){
    const [active,setActive]=useState(false)

    useEffect(() => {
        setDirUrl("home")
        document.getElementById("body").style.background="linear-gradient(90deg, #b4add1, #7d5fff, #7158e2)"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
        <div className="project4b-container">
            <div class={`search ${active?"active":null}`}>
                <input type="text" class="input" placeholder="Search..."/>
                <button class="btn" onClick={()=>setActive(!active)}>
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        </>
        
    )
}