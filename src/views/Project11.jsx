import { useEffect, useState } from "react"
import { reloadStyles } from "../helper/reload";
import "../styles/project11/project11.scss"

export default function Project11({setDirUrl}){

    useEffect(() => {
        
        reloadStyles(setDirUrl)
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const [press,setPress]=useState(false)
    const [keyPress,setKeyPress]=useState("")
    
    window.addEventListener("keydown",(e)=>{
        if(!press){
            setPress(true)
        }
        setKeyPress(e)
    })

    return(
        <div className="project11-container">
            <div id="insert">
                {!press ?
                    <div className="key">
                        Press any key to get the keyCode
                    </div>
                :
                    <>
                        <div className="key">
                            {keyPress.key}
                            <small>event.key</small>
                        </div>
                        <div className="key">
                            {keyPress.keyCode}
                            <small>event.keyCode</small>
                        </div>
                        <div className="key">
                            {keyPress.code}
                            <small>event.code</small>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}