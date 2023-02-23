import { useEffect, useState } from "react"
import { reloadStyles } from "../helper/reload";
import "../styles/project21/project21.scss"

export default function Project21({setDirUrl}){

    const [boxs,setBoxs]=useState([])
    const [fill,setFill]=useState([])

    useEffect(() => {

        reloadStyles(setDirUrl)

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
        if(e.target.className.indexOf("fill")){
            e.target.className += ' hovered'
        }
    }

    function dragOver(e) {
        e.preventDefault()
    }
    
    function dragLeave(e) {
        if(e.target.className.indexOf("fill")){
            e.target.className = 'empty'
        }
    }
    
    function dragDrop(e) {
        if(e.target.className.indexOf("fill")){
            e.target.className = 'empty'
            e.target.append(fill)
        }
    }

    const array = [1,2,3,4,5,6]

    return(
        <div className="project21-container">
            {array.map((obj)=>{
                return(
                    <div className="empty" key={obj}>
                        {obj===1&&
                            <div className="fill" draggable="true"></div>
                        }
                    </div>
                )
            })}
        </div>
    )
}