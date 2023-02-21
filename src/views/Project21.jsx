import { useEffect, useState } from "react"
import "../styles/project21/project21.scss"

export default function Project21({setDirUrl}){

    const [boxs,setBoxs]=useState([])
    const [fill,setFill]=useState([])

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

        setBoxs(document.querySelectorAll('.empty'))
        setFill(document.querySelector('.fill'))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(boxs.length!==0){
            for(const empty of boxs) {
                empty.addEventListener('dragover', dragOver)
                empty.addEventListener('dragenter', dragEnter)
                empty.addEventListener('dragleave', dragLeave)
                empty.addEventListener('drop', dragDrop)
            }
        }
    }, [boxs])
    
    function dragEnter(e) {
        e.preventDefault()
        this.className += ' hovered'
    }
    function dragOver(e) {
        e.preventDefault()
    }
    
    
    function dragLeave(e) {
        this.className = 'empty'
    }
    
    function dragDrop(e) {
        this.className = 'empty'
        this.append(fill)
    }

    return(
        <div className="project21-container">
            <div className="empty">
                <div className="fill" draggable="true"></div>
            </div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="empty"></div>
        </div>
    )
}