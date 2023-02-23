import { useEffect } from "react"
import { reloadStyles } from "../helper/reload";
import "../styles/project23/project23.scss"

export default function Project23({setDirUrl}){
    useEffect(() => {

        reloadStyles(setDirUrl)


    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="project23-container">
            <div class="kinetic"></div>
        </div>
    )
}