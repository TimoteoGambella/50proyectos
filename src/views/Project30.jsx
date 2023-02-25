import { useEffect, useState } from "react"
import "../styles/project30/project30.scss"

export default function Project30({setDirUrl}){

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

        setTimeout(() => {
            writeText()
        }, 1500);
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    
    const [speed,setSpeed]=useState(1)
    let idx = 0
    
    function writeText() {
        const text = 'We Love Programming!'

        document.getElementById('text').innerText = text.slice(0, idx)
    
        idx++
        if(idx > text.length) {
            idx=0
        }

        setTimeout(writeText, 300/document.getElementById("speed").value)
    }
    
    return(
        <div className="project30-container">
            <h1 id="text">Starting...</h1>
            <div>
                <label htmlFor="speed">Speed:</label>
                <input type="number" name="speed" id="speed" value={speed} min="1" max="10" step="1"
                onInput={async(e)=>{
                    setSpeed(e.target.value)
                }}/>
            </div>
        </div>
    )
}