import { useEffect, useState } from "react"
import "../styles/project50/project50.scss"

export default function Project50({setDirUrl}){

    const arrayInsects=[
        {
            name:"Mosca",
            photo:"http://pngimg.com/uploads/fly/fly_PNG3946.png"
        },
        {
            name:"Mosquito",
            photo:"http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
        },
        {
            name:"Araña",
            photo:"http://pngimg.com/uploads/spider/spider_PNG12.png"
        },
        {
            name:"Cucaracha",
            photo:"http://pngimg.com/uploads/roach/roach_PNG12163.png"
        },
    ]
    const [insect,setInsect]=useState({})
    const [start,setStart]=useState(false)
    
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

    useEffect(() => {
        if(insect.name!==undefined){
            createInsect()
        }
    }, [insect]);// eslint-disable-line react-hooks/exhaustive-deps
    let time = 0
    let score = 0

    function startGame() {
        setInterval(increaseTime, 1000)
    }

    function increaseTime() {
        let m = Math.floor(time / 60)
        let s = time % 60
        m = m < 10 ? `0${m}` : m
        s = s < 10 ? `0${s}` : s
        document.getElementById('time').innerHTML = `Time: ${m}:${s}`
        time++
    }

    function createInsect() {
        const insectDiv = document.createElement('div')
        insectDiv.classList.add('insect')
        const { x, y } = getRandomLocation()
        insectDiv.style.top = `${y}px`
        insectDiv.style.left = `${x}px`
        insectDiv.innerHTML = `<img src=${insect.photo} alt="${insect.name}" style="transform: rotate(${Math.random() * 360}deg)" />`

        insectDiv.addEventListener('click', catchInsect)

        document.getElementById('game-container').appendChild(insectDiv)
    }

    function getRandomLocation() {
        const width = window.innerWidth
        const height = window.innerHeight
        const x = Math.random() * (width - 200) + 100
        const y = Math.random() * (height - 200) + 100
        return { x, y }
    }

    function catchInsect() {
        score++
        document.getElementById("score").innerHTML=`Score: ${score}`
        this.classList.add('caught')
        setTimeout(() => this.remove(), 2000)
        addInsects()
    }

    function addInsects() {
        setTimeout(createInsect, 1000)
        setTimeout(createInsect, 1500)
    }

    return(
        <div className="project50-container">
            <div className={`screen ${start?"up":""}`}>
                <h1>Catch The Insect</h1>
                <button className="btn" id="start-btn" onClick={()=>setStart(true)}>Play Game</button>
            </div>

            <div className={`screen ${start && insect.name!==undefined?"up":""}`}>
                <h1>What is your "favorite" insect?</h1>
                <ul className="insects-list">
                    {arrayInsects.map((obj,i)=>{
                        return(
                            <li key={i} onClick={async()=>{
                                    setInsect(obj)
                                    startGame()
                                }}>
                                <button className="choose-insect-btn">
                                    <p>{obj.name}</p>
                                    <img src={obj.photo} alt={obj.name}/>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="screen game-container" id="game-container">
                <h3 id="time" className="time">Time: 00:00</h3>
                <h3 id="score" className="score">Score: {score}</h3>
            </div>
        </div>
    )
}