import { useEffect, useState } from "react"
import { reloadStyles } from "../helper/reload";
import "../styles/project4/project4.scss"

export default function Project4({setDirUrl}){
    const [active,setActive]=useState(false)

    useEffect(() => {
        reloadStyles(setDirUrl)
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="project4-container">
            <div class={`search ${active?"active":null}`}>
                <input type="text" class="input" placeholder="Search..."/>
                <button class="btn" onClick={()=>setActive(!active)}>
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}