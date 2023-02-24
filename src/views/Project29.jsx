import { useEffect, useState } from "react"
import "../styles/project29/project29.scss"

export default function Project29({setDirUrl}){

    const [clickTime,setClickTime]=useState(0)
    const [mgs,setMgs]=useState(0)

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

    
    
    const createHeart = (e) => {
        const loveMe = document.querySelector('.loveMe')

        const heart = document.createElement('i')
        heart.classList.add('fas')
        heart.classList.add('fa-heart')

        const x = e.clientX
        const y = e.clientY

        const leftOffset = e.target.offsetLeft
        const topOffset = e.target.offsetTop

        const xInside = x - leftOffset
        const yInside = y - topOffset

        heart.style.top = `${yInside}px`
        heart.style.left = `${xInside}px`

        loveMe.appendChild(heart)

        setMgs(mgs+1)

        setTimeout(() => heart.remove(), 1000)
    }

    return(
        <div className="project29-container">
            <h3>Double click on the image to <i className="fas fa-heart"></i> it</h3>
            <small>You liked it <span id="times">{mgs}</span> times</small>

            <div className="loveMe" onClick={(e)=>{
                if(clickTime === 0) {
                    setClickTime(new Date().getTime())
                } else {
                    if((new Date().getTime() - clickTime) < 600) {
                        createHeart(e)
                        setClickTime(0)
                    } else {
                        setClickTime(new Date().getTime())
                    }
                }
            }}></div>
        </div>
    )
}