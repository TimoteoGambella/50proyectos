import { useEffect, useState } from "react"
import "../styles/project16/project16.scss"

export default function Project16({setDirUrl}){

    const [smallCups,setSmallCups]=useState([])
    const [liters,setLiters]=useState([])
    const [percentage,setPercentage]=useState([])
    const [remained,setRemained]=useState([])

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
        
        setSmallCups(document.querySelectorAll('.cup-small'))
        setLiters(document.getElementById('liters'))
        setPercentage(document.getElementById('percentage'))
        setRemained(document.getElementById('remained'))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const array8 = [1,2,3,4,5,6,7,8]

    const highlightCups = (idx) => {
        console.log(smallCups[idx])
        console.log(idx)
        if (idx===7 && smallCups[idx].classList.contains("full")) idx--
        else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
            idx--
        }

        smallCups.forEach((cup, idx2) => {
            if(idx2 <= idx) {
                cup.classList.add('full')
            } else {
                cup.classList.remove('full')
            }
        })

        updateBigCup()
    }

    const updateBigCup = () => {
        const fullCups = document.querySelectorAll('.cup-small.full').length
        const totalCups = smallCups.length

        if(fullCups === 0) {
            percentage.style.visibility = 'hidden'
            percentage.style.height = 0
        } else {
            percentage.style.visibility = 'visible'
            percentage.style.height = `${fullCups / totalCups * 330}px`
            percentage.innerText = `${fullCups / totalCups * 100}%`
        }

        if(fullCups === totalCups) {
            remained.style.visibility = 'hidden'
            remained.style.height = 0
        } else {
            remained.style.visibility = 'visible'
            liters.innerText = `${2 - (250 * fullCups / 1000)}L`
        }
    }

    return(
        <div className="project16-container">
            <h1>Drink Water</h1>
            <h3>Goal: 2 Liters</h3>

            <div className="cup">
                <div className="remained" id="remained">
                    <span id="liters"></span>
                    <small>Remained</small>
                </div>

                <div className="percentage" id="percentage"></div>
            </div>

            <p className="text">Select how many glasses of water that you have drank</p>

            <div className="cups">
                {array8.map((obj,i)=>{
                    return(
                        <div key={i} id={i} className="cup cup-small" onClick={() => highlightCups(i)}>250 ml</div>
                    )
                })}
            </div>
        </div>
    )
}