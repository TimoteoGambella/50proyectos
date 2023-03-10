import { useEffect, useState } from "react"
import "../styles/project33/project33.scss"

export default function Project33({setDirUrl}){

    const [notes,setNotes]=useState([])
    const [hidden,setHidden]=useState(null)

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

        if(JSON.parse(localStorage.getItem('notes'))!==null){
            setNotes(JSON.parse(localStorage.getItem('notes')))
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
    async function addNewNote(text = '') {
        await setNotes([...notes,text])
        document.getElementById(`textarea${notes.length}`).focus()
    }
    
    async function updateLS(newArray,param) {
        if(param){
            await setNotes([])
        }
        setNotes(newArray)
        localStorage.setItem('notes', JSON.stringify(newArray))
    }

    return(
        <div className="project33-container" id="project33">
            <button className="add" id="add" onClick={()=>{
                addNewNote()
            }}>
                <i className="fas fa-plus"></i> Add note
            </button>
            {notes.length!==0 && notes.map((obj,i)=>{
                return(
                    <div key={i} className="note" id={i}>
                        <div className="tools ">
                            <button className="edit" onClick={()=>{
                                if(hidden===i){
                                    setHidden(null)
                                }else{
                                    setHidden(i)
                                }
                            }}><i className="fas fa-edit"></i></button>
                            <button className="delete" onClick={async()=>{
                                let newArray=[]
                                for (let key in notes) {
                                    if (Number(key)!==Number(i)) {
                                        newArray.push(notes[key])
                                    }
                                }
                                updateLS(newArray,true)
                            }}><i className="fas fa-trash-alt"></i></button>
                        </div>
                        <div className={`main ${obj && hidden===i ? "" : "hidden"}`}>{obj}</div>
                        <textarea className={`${obj && hidden===i ? "hidden" : ""}`} id={`textarea${i}`} defaultValue={obj} onChange={(e)=>{
                            let newArray=notes
                            newArray[i]=e.target.value
                            updateLS(newArray,false)
                        }}/>
                    </div>
                )
            })}
        </div>
    )
}