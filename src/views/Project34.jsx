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

        runAnimation()

    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
    function resetDOM() {
        const nums = document.querySelectorAll('.nums span')

        setCounter(false)
        setFinalMsj(false)

        nums.forEach((num) => {
            num.classList.value = ''
        })

        nums[0].classList.add('in')
    }
    
    function runAnimation() {
        setTimeout(async() => {
            setNumber(number+1)
            setTimeout(() => {
                setNumber(number+2)
                setTimeout(() => {
                    setNumber(number+3)
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
                        runAnimation()
                    }}>Replay</span>
                </button>
            </div>
        </div>
    )
}