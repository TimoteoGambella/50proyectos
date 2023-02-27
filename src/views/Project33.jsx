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

        setNotes(JSON.parse(localStorage.getItem('notes')))

    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
    function addNewNote(text = '') {
        setNotes([...notes,text])
    
        // editBtn.addEventListener('click', () => {
            // main.classList.toggle('hidden')
            // textArea.classList.toggle('hidden')
        // })
    
        // textArea.addEventListener('input', (e) => {
        //     const { value } = e.target
    
        //     main.innerHTML = value
    
        //     updateLS()
        // })
    
        // document.getElementById("project33").appendChild(note)
    }
    
    function updateLS(newArray) {
        localStorage.setItem('notes', JSON.stringify(newArray))
    }

    return(
        <div className="project33-container" id="project33">
            <button className="add" id="add" onClick={()=>addNewNote()}>
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
                            <button className="delete" onClick={()=>{
                                let newArray=[]
                                for (let key in notes) {
                                    if (Number(key)!==Number(i)) {
                                        newArray.push(notes[key])
                                    }
                                }
                                setNotes(newArray)
                                updateLS(newArray)
                            }}><i className="fas fa-trash-alt"></i></button>
                        </div>
                        <div className={`main ${obj && hidden===i ? "hidden" : ""}`}>{obj}</div>
                        <textarea className={`${obj && hidden===i ? "" : "hidden"}`} >{obj}</textarea>
                    </div>
                )
            })}
        </div>
    )
}