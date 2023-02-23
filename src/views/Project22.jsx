import { useEffect, useState } from "react"
import { reloadStyles } from "../helper/reload"
import "../styles/project22/project22.scss"

export default function Project22({setDirUrl}){

    const [ctx,setCtx]=useState({})

    const [press,setPress]=useState(false)
    const [x,setX]=useState("")
    const [y,setY]=useState("")

    const [size,setSize]=useState(10)
    const [color,setColor]=useState("black")

    useEffect(() => {

        reloadStyles(setDirUrl)


    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(ctx.canvas===undefined){
            setCtx(document.getElementById('canvas').getContext('2d'))
        }
    }, [ctx]);

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

    function updateSizeOnScreen(sz) {
        document.getElementById('size').innerText = sz
    }

    return(
        <div className="project22-container">
            <canvas id="canvas" width="800" height="500"
                onMouseDown={(e)=>{
                    setPress(true)
                    setX(e.clientX-e.target.offsetLeft)
                    setY(e.clientY-e.target.offsetTop)
                }}
                onMouseUp={()=>{
                    setPress(false)
                    setX("")
                    setY("")
                }}
                onMouseMove={(e)=>{
                    console.log(e)
                    if(press) {
                        let x2 = e.clientX-e.target.offsetLeft
                        let y2 = e.clientY-e.target.offsetTop
            
                        drawCircle(x2, y2)
                        drawLine(x, y, x2, y2)
            
                        setX(x2)
                        setY(y2)
                    }
                }}
            ></canvas>
            <div className="toolbox">
                <button id="decrease" onClick={async()=>{
                    let sz = size-5
                    setSize(sz)

                    if(size === 5) {
                        setSize(5)
                        sz=5
                    }
            
                    updateSizeOnScreen(sz)
                }}>-</button>
                <span id="size">10</span>
                <button id="increase" onClick={async()=>{
                    let sz = size+5

                    setSize(sz)
                    if(size === 50) {
                        setSize(50)
                        sz=50
                    }
                    updateSizeOnScreen(sz)
                }}>+</button>
                <input type="color" id="color" onChangeCapture={(e)=>setColor(e.target.value)}/>
                <button id="clear" onClick={()=>document.getElementById('canvas').getContext('2d').clearRect(0,0, 800, 500)}>X</button>
            </div>
        </div>
    )
}