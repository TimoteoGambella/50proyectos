import { useState, useEffect } from "react"
import "../styles/project2/project2.scss"
import Swal from 'sweetalert2'

export default function Project2({setDirUrl}){
    const [circle,setCircle]=useState(1)

    const clickCircle=(param)=>{
        setCircle(param)
        document.getElementById("progress").style.width = (param-1) / 3 * 100 + '%'
    }

    useEffect(() => {
        setDirUrl("home")
            document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(circle===4){
            let timerInterval
                Swal.fire({
                title: '¡ COMPLET !',
                html: 'I will close in <b></b> milliseconds.',
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    setCircle(1)
                    document.getElementById("progress").style.width = "0%"
                }
            })
        }
    }, [circle]);


    return(
        <div className="project2-container">
            <div className="progress-container">
                <div className="progress" id="progress"></div>
                <div className={`circle ${circle>=1?"active":null}`}>1</div>
                <div className={`circle ${circle>=2?"active":null}`}>2</div>
                <div className={`circle ${circle>=3?"active":null}`}>3</div>
                <div className={`circle ${circle>=4?"active":null}`}>4</div>
            </div>
            <div>
                <button className="btn" id="prev" disabled={circle===1?true:false} onClick={()=>clickCircle(circle-1)}>Prev</button>
                <button className="btn" id="next" disabled={circle===4?true:false} onClick={()=>clickCircle(circle+1)}>Next</button>
            </div>
        </div>
    )
}