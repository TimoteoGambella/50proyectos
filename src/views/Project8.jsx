import { useEffect } from "react"
import "../styles/project8/project8.scss"

export default function Project8({setDirUrl}){

    useEffect(() => {
        
        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        
        const labels = document.querySelectorAll('.form-control label')
        
        labels.forEach(label => {
            label.innerHTML = label.innerText
                .split('')
                .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
                .join('')
        })
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
    return(
        <div className="project8-container">
            <div className="container">
                <h1>Please Login</h1>
                <form>
                    <div className="form-control">
                        <input type="text" required/>
                        <label>Email</label>
                    </div>

                    <div className="form-control">
                        <input type="password" required/>
                        <label>Password</label>
                    </div>

                    <button className="btn">Login</button>

                    <p className="text">Don't have an account? <a href="##">Register</a> </p>
                </form>
            </div>
        </div>
    )
}