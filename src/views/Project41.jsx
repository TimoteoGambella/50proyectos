import { useEffect, useState } from "react"
import "../styles/project41/project41.scss"

export default function Project41({setDirUrl}){

    const [codes,setCodes]=useState([])

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

    useEffect(() => {
        if(codes.length===0){
            setCodes(document.querySelectorAll('.code'))
            document.querySelectorAll('.code')[0].focus()
        }
    }, [codes]);

    let arrayCodes = [1,2,3,4,5,6]

    return(
        <div className="project41-container">
            <div className="container">
                <h2>Verify Your Account</h2>
                <p>We emailed you the six digit code to cool_guy@email.com <br/> Enter the code below to confirm your email address.</p>
                <div className="code-container">
                    {arrayCodes.map((obj,i)=>{
                        return(
                            <input key={i} type="number" className="code" placeholder="0" min="0" max="9" required onKeyDown={(e)=>{
                                if(e.key >= 0 && e.key <=9) {
                                    codes[i].value = ''
                                    if(i!==5){
                                        setTimeout(() => codes[i + 1].focus(), 10)
                                    }
                                } else if(e.key === 'Backspace') {
                                    setTimeout(() => codes[i - 1].focus(), 10)
                                }
                            }} />
                        )
                    })}
                </div>
                <small className="info">
                    This is design only. We didn't actually send you an email as we don't have your email, right?
                </small>
            </div>
        </div>
    )
}