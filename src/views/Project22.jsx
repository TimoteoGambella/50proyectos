import { useEffect, useState } from "react"
import "../styles/project22/project22.scss"

export default function Project22({setDirUrl}){

    const [press,setPress]=useState(false)
    const [x,setX]=useState("")
    const [y,setY]=useState("")

    const [size,setSize]=useState(10)


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

    const canvas = document.getElementById('canvas');
    const sizeEL = document.getElementById('size');
    const colorEl = document.getElementById('color');
    const clearEl = document.getElementById('clear');

    const ctx = canvas.getContext('2d');

    colorEl.value = 'black'
    let color = colorEl.value

    function drawCircle(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
    }

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = color
        ctx.lineWidth = size * 2
        ctx.stroke()
    }

    function updateSizeOnScreen() {
        sizeEL.innerText = size
    }

    colorEl.addEventListener('change', (e) => color = e.target.value)

    clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
    
    return(
        <div className="project22-container">
            <canvas id="canvas" width="800" height="500"
                onMouseDown={(e)=>{
                    setPress(true)
                    setX(e.offsetX)
                    setY(e.offsetY)
                }}
                onMouseUp={()=>{
                    setPress(false)
                    setX("")
                    setY("")
                }}
                onMouseMove={(e)=>{
                    if(press) {
                        const x2 = e.offsetX
                        const y2 = e.offsetY
            
                        drawCircle(x2, y2)
                        drawLine(x, y, x2, y2)
            
                        setX(x2)
                        setY(y2)
                    }
                }}
            ></canvas>
            <div className="toolbox">
                <button id="decrease" onClick={()=>{
                    setSize(size-5)

                    if(size < 5) {
                        setSize(5)
                    }
            
                    updateSizeOnScreen()
                }}>-</button>
                <span id="size">10</span>
                <button id="increase" onClick={()=>{
                    setSize(size+5)
                    if(size > 50) {
                        setSize(50)
                    }
                    updateSizeOnScreen()
                }}>+</button>
                <input type="color" id="color" />
                <button id="clear">X</button>
            </div>
        </div>
    )
}