import { useEffect } from "react"
import "../styles/project27/project27.scss"

export default function Project27({setDirUrl}){


    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const messages = [
        'Message One',
        'Message Two',
        'Message Three',
        'Message Four',
    ]

    const types = ['info', 'success', 'error']

    function createNotification(message = null, type = null) {
        const notif = document.createElement('div')
        notif.classList.add('toast')
        notif.classList.add(type ? type : getRandomType())

        notif.innerText = message ? message : getRandomMessage()

        document.getElementById('toasts').appendChild(notif)

        setTimeout(() => {
            notif.remove()
        }, 3000)
    }

    function getRandomMessage() {
        return messages[Math.floor(Math.random() * messages.length)]
    }

    function getRandomType() {
        return types[Math.floor(Math.random() * types.length)]
    }

    return(
        <div className="project27-container">
            <div id="toasts"></div>
            <button className="btn" id="button" onClick={()=>createNotification()}>Show Notification</button>
        </div>
    )
}