import { useEffect,useState } from "react"
import { reloadStyles } from "../helper/reload";
import "../styles/project19/project19.scss"

export default function Project19({setDirUrl}){

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [hourEl,setHourEl]=useState("")
    const [minuteEl,setMinuteEl]=useState("")
    const [secondEl,setSecondEl]=useState("")
    const [timeEl,setTimeEl]=useState("")
    const [dateEl,setDateEl]=useState("")

    useEffect(() => {

        reloadStyles(setDirUrl)

        setHourEl(document.querySelector('.hour'))
        setMinuteEl(document.querySelector('.minute'))
        setSecondEl(document.querySelector('.second'))
        setTimeEl(document.querySelector('.time'))
        setDateEl(document.querySelector('.date'))

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(dateEl!==""){
            setTime()
            setInterval(setTime, 1000)
        }
    }, [dateEl])

    function setTime() {
        const time = new Date();
        const month = time.getMonth()
        const day = time.getDay()
        const date = time.getDate()
        const hours = time.getHours()
        const hoursForClock = hours >= 13 ? hours % 12 : hours;
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const ampm = hours >= 12 ? 'PM' : 'AM'
    
        hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
        minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
        secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
    
        timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
        dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    }
    
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    return(
        <div className="project19-container">
            <button className="toggle" onClick={(e)=>{
                    const html = document.querySelector('html')
                    if (html.classList.contains('dark')) {
                        html.classList.remove('dark')
                        e.target.innerHTML = 'Dark mode'
                    } else {
                        html.classList.add('dark')
                        e.target.innerHTML = 'Light mode'
                    }
            }}>Dark mode</button>

            <div className="clock-container">
                <div className="clock">
                    <div className="needle hour"></div>
                    <div className="needle minute"></div>
                    <div className="needle second"></div>
                    <div className="center-point"></div>
                </div>

                <div className="time"></div>
                <div className="date"></div>
            </div>
        </div>
    )
}