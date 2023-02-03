import { useEffect } from "react"
import "../styles/project13/project13.scss"

export default function Project13({setDirUrl}){

    useEffect(() => {
        document.getElementById("textarea").focus()

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"


        document.getElementById('textarea').addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                setTimeout(() => {
                    e.target.value = ''
                }, 10)
    
                randomSelect()
            }else if(e.key==="Escape"){
                window.location.reload()
            }else{
                createTags(e.target.value)
            }
        })

    }, []);// eslint-disable-line react-hooks/exhaustive-deps



    function createTags(input) {
        const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
        
        document.getElementById('tags').innerHTML = ''

        tags.forEach(tag => {
            const tagEl = document.createElement('span')
            tagEl.classList.add('tag')
            tagEl.innerText = tag
            document.getElementById('tags').appendChild(tagEl)
        })
    }

    function randomSelect() {
        const times = 30
    
        const interval = setInterval(() => {
            const randomTag = pickRandomTag()
        
            if (randomTag !== undefined) {
                highlightTag(randomTag)
        
                setTimeout(() => {
                    unHighlightTag(randomTag)
                }, 100)
            }
        }, 100);
    
        setTimeout(() => {
            clearInterval(interval)
    
            setTimeout(() => {
                const randomTag = pickRandomTag()
    
                highlightTag(randomTag)
            }, 100)
    
        }, times * 100)
    }

    function pickRandomTag() {
        const tags = document.querySelectorAll('.tag')
        return tags[Math.floor(Math.random() * tags.length)]
    }
    
    function highlightTag(tag) {
        tag.classList.add('highlight')
    }
    
    function unHighlightTag(tag) {
        tag.classList.remove('highlight')
    }

    return(
        <div className="project13-container">
            <div className="container">
                <h3>Enter all of the choices divided by a comma (',').</h3>
                <h3>Press enter when you're done</h3>
                <h3>Press escape to reload the page</h3>
                <textarea placeholder="Enter choices here..." id="textarea"></textarea>

                <div id="tags"></div>
            </div>
        </div>
    )
}