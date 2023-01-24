import { useNavigate } from "react-router-dom";
import "../styles/navbar.scss"

export default function Navbar (){
    const navigate = useNavigate();

    const navegaciones = [
        {
            title:"Project 1",
            url:"/project1"
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