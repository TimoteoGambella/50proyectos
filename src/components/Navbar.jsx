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