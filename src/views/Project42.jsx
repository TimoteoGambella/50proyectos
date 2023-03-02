import { useEffect, useState } from "react"
import "../styles/project42/project42.scss"

export default function Project42({setDirUrl}){

    const [arrayPersons,setArrayPersons]=useState([])
    const [filter,setFilter]=useState("")

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

        getData()
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
        
    async function getData() {
        const res = await fetch('https://randomuser.me/api?results=50')
        const { results } = await res.json()
        setArrayPersons(results)
    }

    return(
        <div className="project42-container">
            <div className="container">
                <header className="header">
                    <h4 className="title">Live User Filter</h4>
                    <small className="subtitle">Search by name and/or location</small>
                    <input type="text" id="filter" placeholder="Search" onChange={(e)=>setFilter((e.target.value).toLowerCase())}/>
                </header>

                <ul id="result" className="user-list">
                    {arrayPersons.length===0?<h3>Loading...</h3>:
                        arrayPersons.map((obj,i)=>{
                            return(
                                <li key={i} className={`${filter.length!==0?(obj.name.first + " " + obj.name.last).toLowerCase().indexOf(filter)!==-1?"":"hide":""}`}>
                                    <img src={obj.picture.large} alt={obj.name.first} />
                                    <div className="user-info">
                                        <h4>{obj.name.first} {obj.name.last}</h4>
                                        <p>{obj.location.city}, {obj.location.country}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}