import { useEffect } from "react";

export default function Home({setDirUrl}){
    
    useEffect(() => {
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.overflowY="scroll"
        setDirUrl("home")
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="home">
            <h1>TIMOTEO GAMBELLA</h1>
            <h2 onClick={()=>window.open("https://www.timoteogambella.com.ar/")}>https://www.timoteogambella.com.ar/</h2>
        </div>
    )
}