import { useEffect } from "react"
import "../styles/project6/project6.scss"

export default function Project6({setDirUrl}){

    
    window.addEventListener('scroll', checkBoxes)
    
    useEffect(() => {
        checkBoxes()
        
        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
    function checkBoxes() {
        const boxes = document.querySelectorAll('.box')
        const triggerBottom = window.innerHeight / 5 * 4
        
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top
            if(boxTop < triggerBottom) {
                box.classList.add('show')
            } else {
                box.classList.remove('show')
            }
        })
    }

    const arrayBoxes=["Content","Content","Content","Content","Content","Content","Content","Content","Content","Content","Content","Content","Content","Content"]

    return(
        <div className="project6-container">
            <h1>Scroll to see the animation</h1>
            {arrayBoxes.map((obj,i)=>{
                return(
                    <div className="box" key={i}>
                        <h2>
                            {obj}
                        </h2>
                    </div>
                )
            })}
        </div>
    )
}