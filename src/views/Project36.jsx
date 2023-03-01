import { useEffect } from "react"
import "../styles/project36/project36.scss"

export default function Project36({setDirUrl}){

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
        
        for(let i = 0; i < 250; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
    
            square.addEventListener('mouseover', () => setColor(square))
    
            square.addEventListener('mouseout', () => removeColor(square))
    
            document.getElementById('container').appendChild(square)
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

    function setColor(element) {
        const color = getRandomColor()
        element.style.background = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(element) {
        element.style.background = '#1d1d1d'
        element.style.boxShadow = '0 0 2px #000'
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    }
    
    return(
        <div className="project36-container">
            <div className="container" id="container"></div>
        </div>
    )
}