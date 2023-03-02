import { useEffect, useState } from "react"
import "../styles/project40/project40.scss"

export default function Project40({setDirUrl}){

    const [magic,setMagic]=useState(false)

    useEffect(() => {

        setDirUrl("project40")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
        
        createBoxes()

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    function createBoxes() {
        if(!document.querySelector('.box')){
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    const box = document.createElement('div')
                    box.classList.add('box')
                    box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
                    document.getElementById('boxes').appendChild(box)
                }
            }
        }
    }


    return(
        <div className="project40-container">
            <button id="btn" className="magic" onClick={()=>{setMagic(!magic);document.getElementById("boxes").classList.toggle('big')}}>Magic 🎩</button>
            <div id="boxes" className="boxes big" style={{gap:!magic?"25px":"0px"}}></div>
            <h1 onClick={()=>window.history.back()}>RETURN</h1>
        </div>
    )
}