import { useEffect, useState } from "react"
import "../styles/project34/project34.scss"

export default function Project34({setDirUrl}){

    const [counter,setCounter]=useState(false)
    const [finalMsj,setFinalMsj]=useState(false)
    const [number,setNumber]=useState(0)

    let arrayNumbers = [3,2,1,0]

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

        runAnimation(number)

    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
    async function resetDOM() {
        await setNumber(0)
        await setCounter(false)
        await setFinalMsj(false)
        runAnimation(0)
    }
    
    function runAnimation(num) {
        setTimeout(async() => {
            setNumber(num+1)
            setTimeout(() => {
                setNumber(num+2)
                setTimeout(() => {
                    setNumber(num+3)
                    setTimeout(() => {
                            setCounter(true)
                            setFinalMsj(true)
                    }, 1500);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    return(
        <div className="project34-container">
            <div className={`counter ${counter?"hide":""}`}>
                <div className="nums">
                    {arrayNumbers.map((obj,i)=>{
                        return(
                            <span className={`${number===i?"in":""}`} key={i} id={i}>{obj}</span>
                        )
                    })}
                </div>
                <h4>Get Ready</h4>
            </div>

            <div className={`final ${finalMsj?"show":""}`}>
                <h1>GO</h1>
                <button id="replay">
                    <span onClick={()=>{
                        resetDOM()
                    }}>Replay</span>
                </button>
            </div>
        </div>
    )
}