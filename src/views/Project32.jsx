import { useEffect } from "react"
import "../styles/project32/project32.scss"

export default function Project32({setDirUrl}){

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
    
    function doTheTrick(theClickedOne) {
        const good = document.querySelector('#good')
        const cheap = document.querySelector('#cheap')
        const fast = document.querySelector('#fast')
        
        if(good.checked && cheap.checked && fast.checked) {
            if(good === theClickedOne) {
                fast.checked = false
            }
    
            if(cheap === theClickedOne) {
                good.checked = false
            }
    
            if(fast === theClickedOne) {
                cheap.checked = false
            }
        }
    }

    return(
        <div className="project32-container">
            <h2>How do you want your project to be?</h2>
            <div className="toggle-container">
                <input type="checkbox" id="good" className="toggle" onChange={(e)=>doTheTrick(e.target)}/>
                <label for="good" className="label">
                    <div className="ball"></div>
                </label>
                <span>Good</span>
            </div>

            <div className="toggle-container">
                <input type="checkbox" id="cheap" className="toggle" onChange={(e)=>doTheTrick(e.target)}/>
                <label for="cheap" className="label">
                    <div className="ball"></div>
                </label>
                <span>Cheap</span>
            </div>

            <div className="toggle-container">
                <input type="checkbox" id="fast" className="toggle" onChange={(e)=>doTheTrick(e.target)}/>
                <label for="fast" className="label">
                    <div className="ball"></div>
                </label>
                <span>Fast</span>
            </div>
        </div>
    )
}