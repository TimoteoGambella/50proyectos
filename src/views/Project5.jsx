import { useEffect, useState } from "react"
import "../styles/project5/project5.scss"

export default function Project5({setDirUrl}){

    const [blurNumber,setBlurNumber]=useState(0)

    useEffect(() => {
        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
        let load=0
        const blurring = ()=>{

            load++
    
            if (load > 99) {
                clearInterval(int)
            }

            setBlurNumber(load)

            document.getElementById("loading").style.opacity = scale(load, 0, 100, 1, 0)
            document.getElementById("bg").style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
        }

        let int = setInterval(blurring,50)
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }

    return(
        <div className="project5-container">
            <div className="bg-project5" id="bg"></div>
            <div className="loading-text" id="loading">{blurNumber}%</div>
        </div>
    )
}