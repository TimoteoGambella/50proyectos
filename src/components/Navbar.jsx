import { useNavigate } from "react-router-dom";
import "../styles/navbar.scss"

export default function Navbar (){
    const navigate = useNavigate();

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
    ]

    return(
        <div className="navbar-container">
            {navegaciones.map((nav,i)=>{
                return(
                    <h1 key={i} onClick={()=>navigate(`${nav.url}`)}>{nav.title}</h1>
                )
            })}
        </div>
    )
}