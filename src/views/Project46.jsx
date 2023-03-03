import { useEffect, useState } from "react"
import "../styles/project46/project46.scss"

export default function Project46({setDirUrl}){

    let asks=[
        {
            ask:"Which language runs in a web browser?",
            answers:["Java","C#","Phyton","JavaScript"],
            correct:"JavaScript"
        },
        {
            ask:"What does CSS stand for?",
            answers:["Central Style Sheets","Cascading Style Sheets","Cascading Simple Sheets","Cars SUVs Sailboats"],
            correct:"Cascading Style Sheets"
        },
        {
            ask:"What does HTML stand for?",
            answers:["Hypertext Markup Language","Hypertext Markdown Language","Hyperloop Machine Language","Helicopters Terminals Motorboats Lamborginis"],
            correct:"Hypertext Markup Language"
        },
        {
            ask:"What year was JavaScript launched?",
            answers:["1996","1995","1994","none of the above"],
            correct:"1995"
        },
    ]

    const [numberAsk,setNumberAsk]=useState(0)
    const [preAnswer,setPreAnswer]=useState("")
    const [goodAns,setGoodAns]=useState(0)

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

    return(
        <div className="project46-container">
            <div className="quiz-container" id="quiz">
                {numberAsk===4?
                    <>
                        <h2>You answered {goodAns}/4 questions correctly</h2>
                        <button onClick={()=>window.location.reload()}>Reload</button>
                    </>
                    :
                    <>
                        <div className="quiz-header">
                            <h2 id="question">{asks[numberAsk]!==undefined && asks[numberAsk].ask}</h2>
                            <ul>
                                {asks[numberAsk]!==undefined && asks[numberAsk].answers.map((obj,i)=>{
                                    return(
                                        <li key={i}>
                                            <input type="radio" name="answer" id={i} className="answer" onClick={(e)=>setPreAnswer(obj)}/>
                                            <label htmlFor={i} id={obj+i}>{obj}</label>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <button id="submit" disabled={preAnswer===""?true:false} style={{backgroundColor:preAnswer===""?"grey":""}} onClick={()=>{
                            if(preAnswer===asks[numberAsk].correct){
                                setGoodAns(goodAns+1)
                            }
                            setPreAnswer("")
                            setNumberAsk(numberAsk+1)
                            document.querySelectorAll('[name=answer]').forEach((x) => x.checked = false)
                        }}>Submit</button>
                    </>
                }
            </div>
        </div>
    )
}