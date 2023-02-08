import { useEffect } from "react"
import "../styles/project16/project16.scss"

export default function Project16({setDirUrl}){

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"

    }, []);// eslint-disable-line react-hooks/exhaustive-deps



    return(
        <div className="project16-container">

        </div>
    )
}