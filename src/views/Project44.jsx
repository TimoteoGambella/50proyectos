import { useEffect, useState } from "react"
import "../styles/project44/project44.scss"

export default function Project44({setDirUrl}){

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

    const [value,setValue]=useState(50)

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    return(
        <div className="project44-container">
            <h2>Custom Range Slider</h2>
            <div className="range-container">
                <input type="range" id="range" min="0" max="100" onChange={(e)=>{
                    setValue(e.target.value)

                    const value = +e.target.value
                    const label = e.target.nextElementSibling
            
                    const range_width = getComputedStyle(e.target).getPropertyValue('width')
                    const label_width = getComputedStyle(label).getPropertyValue('width')
            
                    const num_width = +range_width.substring(0, range_width.length - 2)
                    const num_label_width = +label_width.substring(0, label_width.length - 2)
            
                    const max = +e.target.max
                    const min = +e.target.min
            
                    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
            
                    label.style.left = `${left}px`
                }}/>
                <label htmlFor="range">{value}</label>
            </div>
        </div>
    )
}