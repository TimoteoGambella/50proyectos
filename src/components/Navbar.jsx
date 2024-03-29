import { useNavigate } from "react-router-dom";
import "../styles/navbar.scss"
import { useEffect } from "react";

export default function Navbar (){
    const navigate = useNavigate();

    useEffect(() => {
        if(window.location.pathname!=="/"){
            scroll()
        }
    }, [])
    
    const scroll=()=>{        
        document.getElementById(window.location.pathname.slice(1)).scrollIntoView({
            inline:"start",
            behavior:"smooth"
        })
    }

    const navegaciones = [
        {
            title:"Project 1",
            url:"/project1"
        },
        {
            title:"Project 2",
            url:"/project2"
        },
        {
            title:"Project 3a",
            url:"/project3a"
        },
        {
            title:"Project 3b",
            url:"/project3b"
        },
        {
            title:"Project 4",
            url:"/project4"
        },
        {
            title:"Project 4b",
            url:"/project4b"
        },
        {
            title:"Project 5",
            url:"/project5"
        },
        {
            title:"Project 6",
            url:"/project6"
        },
        {
            title:"Project 7",
            url:"/project7"
        },
        {
            title:"Project 8",
            url:"/project8"
        },
        {
            title:"Project 9",
            url:"/project9"
        },
        {
            title:"Project 10",
            url:"/project10"
        },
        {
            title:"Project 11",
            url:"/project11"
        },
        {
            title:"Project 12",
            url:"/project12"
        },
        {
            title:"Project 13",
            url:"/project13"
        },
        {
            title:"Project 14",
            url:"/project14"
        },
        {
            title:"Project 15",
            url:"/project15"
        },
        {
            title:"Project 16",
            url:"/project16"
        },
        {
            title:"Project 17",
            url:"/project17"
        },
        {
            title:"Project 18",
            url:"/project18"
        },
        {
            title:"Project 19",
            url:"/project19"
        },
        {
            title:"Project 20",
            url:"/project20"
        },
        {
            title:"Project 21",
            url:"/project21"
        },
        {
            title:"Project 22",
            url:"/project22"
        },
        {
            title:"Project 23",
            url:"/project23"
        },
        {
            title:"Project 24",
            url:"/project24"
        },
        {
            title:"Project 25",
            url:"/project25"
        },
        {
            title:"Project 26",
            url:"/project26"
        },
        {
            title:"Project 27",
            url:"/project27"
        },
        {
            title:"Project 28",
            url:"/project28"
        },
        {
            title:"Project 29",
            url:"/project29"
        },
        {
            title:"Project 30",
            url:"/project30"
        },
        {
            title:"Project 31",
            url:"/project31"
        },
        {
            title:"Project 32",
            url:"/project32"
        },
        {
            title:"Project 33",
            url:"/project33"
        },
        {
            title:"Project 34",
            url:"/project34"
        },
        {
            title:"Project 35",
            url:"/project35"
        },
        {
            title:"Project 36",
            url:"/project36"
        },
        {
            title:"Project 37",
            url:"/project37"
        },
        {
            title:"Project 38",
            url:"/project38"
        },
        {
            title:"Project 39",
            url:"/project39"
        },
        {
            title:"Project 40",
            url:"/project40"
        },
        {
            title:"Project 41",
            url:"/project41"
        },
        {
            title:"Project 42",
            url:"/project42"
        },
        {
            title:"Project 43",
            url:"/project43"
        },
        {
            title:"Project 44",
            url:"/project44"
        },
        {
            title:"Project 45",
            url:"/project45"
        },
        {
            title:"Project 46",
            url:"/project46"
        },
        {
            title:"Project 47",
            url:"/project47"
        },
        {
            title:"Project 48",
            url:"/project48"
        },
        {
            title:"Project 49",
            url:"/project49"
        },
        {
            title:"Project 50",
            url:"/project50"
        },
    ]

    return(
        <div className="navbar-container" id="nav">
            {navegaciones.map((nav,i)=>{
                return(
                    <h1 key={i} id={"project"+(i+1)} onClick={()=>{
                        navigate(`${nav.url}`)
                        scroll()
                    }} className={`${window.location.pathname===nav.url?"active":""}`}>{nav.title}</h1>
                )
            })}
        </div>
    )
}