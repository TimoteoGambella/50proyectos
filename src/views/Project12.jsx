import { useEffect, useState } from "react"
import "../styles/project12/project12.scss"

export default function Project12({setDirUrl}){

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

    const arrayFaqs=[
        {
            ask:"Why shouldn't we trust atoms?",
            answer:"They make up everything"
        },
        {
            ask:"What do you call someone with no body and no nose?",
            answer:"Nobody knows."
        },
        {
            ask:"What's the object-oriented way to become wealthy?",
            answer:"Inheritance."
        },
        {
            ask:"How many tickles does it take to tickle an octopus?",
            answer:"Ten-tickles!"
        },
        {
            ask:"What is: 1 + 1?",
            answer:"Depends on who are you asking."
        },
    ]

    const [faqActive,setFaqActive]=useState(0)

    return(
        <div className="project12-container">
            <h1>Frequently Asked Questions</h1>
            {arrayFaqs.map((obj,i)=>{
                return(
                    <div key={i} className={`faq ${faqActive===i&&"active"}`}>
                        <h3 className="faq-title">
                            {obj.ask}
                        </h3>
                        <p className="faq-text">
                            {obj.answer}
                        </p>
                        <button className="faq-toggle">
                            <i className="fas fa-chevron-down" onClick={()=>setFaqActive(i)}></i>
                            <i className="fas fa-times" onClick={()=>setFaqActive(null)}></i>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}