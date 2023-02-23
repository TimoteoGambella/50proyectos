import { useEffect, useState } from "react"
import "../styles/project1/project1.scss"

export default function Project1({setDirUrl}){
    const [imgSelect,setImgSelect]=useState("Explore The World")

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

    const images=[
        {
            title:"Explore The World",
            url:"https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title:"Wild Forest",
            url:"https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title:"Sunny Beach",
            url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        },
        {
            title:"City on Winter",
            url:"https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        },
        {
            title:"Mountains - Clouds",
            url:"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
    ]

    return(
        <div className="project1-container">
            <div className="container">
                {images.map((img,i)=>{
                    return(
                        <div key={i} className={`panel ${img.title===imgSelect?"active":null}`} style={{backgroundImage:`url(${img.url})`}} onClick={()=>setImgSelect(img.title)}>
                            <h3>{img.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}