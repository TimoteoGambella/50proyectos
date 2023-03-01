import { useEffect, useState } from "react"
import "../styles/project38/project38.scss"

export default function Project38({setDirUrl}){


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

    const [pageActive,setPageActive]=useState(0)

    let array = [
        {
            photo:"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
            title:"Home"
        },
        {
            photo:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            title:"Work"
        },
        {
            photo:"https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
            title:"Blog"
        },
        {
            photo:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
            title:"About"
        },
    ]

    return(
        <div className="project38-container">
            <div className="phone">
                {array.map((obj,i)=>{
                    return(
                        <img key={i} src={obj.photo} alt={obj.title} className={`content ${pageActive===i?"show":"hide"}`}/>
                    )
                })}
                <div>
                    <ul>
                        {array.map((obj,i)=>{
                            return(
                                <li key={i} className={`${pageActive===i?"active":""}`} onClick={()=>{setPageActive(i)}}>
                                    <i className={`fas ${obj.title==="Home"?"fa-home":obj.title==="Work"?"fa-box":obj.title==="Blog"?"fa-book-open":obj.title==="About"?"fa-users":""}`}></i>
                                    <p>{obj.title}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}