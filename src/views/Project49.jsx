import { useEffect, useState } from "react"
import "../styles/project49/project49.scss"

export default function Project49({setDirUrl}){

    const [array,setArray]=useState([
        {
            tarea: 1,
            completado: false
        }
    ])

    const [charge,setCharge]=useState(true)
    
    useEffect(() => {
        
        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
        const todos = JSON.parse(localStorage.getItem('todos'))
        if(todos){
            setArray(todos)
        }
        
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(!charge){
            setCharge(true)
        }
    }, [charge]);


    function setStorage(info){
        localStorage.setItem('todos', JSON.stringify(info))
    }

    return(
        <div className="project49-container">
            <h1>todos</h1>
            <form id="form"  onSubmit={(e)=>{
                e.preventDefault()
                if(document.getElementById("input").value!==""){
                    setArray([...array,{
                        tarea: document.getElementById("input").value,
                        completado:false
                    }])

                    setStorage([...array,{
                        tarea: document.getElementById("input").value,
                        completado:false
                    }])

                    document.getElementById("input").value=""
                    document.getElementById("input").focus()
                }
            }}>
                <input type="text" className="input" id="input" placeholder="Enter your todo" autoComplete="off"/>
                <ul className="todos" id="todos" style={{minHeight:array.length*69+"px"}}>
                    {charge && array.map((obj,i)=>{
                        return(
                           <li key={i} className={`${obj.completado?"completed":""}`} onClick={()=>{
                                    let newArray=array
                                    newArray[i].completado=!newArray[i].completado
                                    setArray(newArray)
                                    setCharge(false)

                                    setStorage(newArray)
                                }}
                                onContextMenu={(e)=>{
                                    e.preventDefault()
                                    let newArray=array.filter(obj2=>obj2.tarea!==obj.tarea)
                                    setArray(newArray)

                                    setStorage(newArray)
                                }}
                           >
                                {obj.tarea}
                           </li> 
                        )
                    })}
                </ul>
            </form>
            <small>Left click to toggle completed. <br/> Right click to delete todo</small>
        </div>
    )
}