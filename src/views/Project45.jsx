import { useEffect, useState } from "react"
import "../styles/project45/project45.scss"

export default function Project45({setDirUrl}){

    const [nav,setNav]=useState(false)

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

    return(
        <div className="project45-container">
            <button className="nav-btn open-btn" onClick={()=>setNav(!nav)}>
                <i className="fas fa-bars"></i>
            </button>

            <img
                src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                alt="Logo" className="logo"
            />

            <p className="text">Mobile Navigation</p>

            <div className={`${nav?"visible":""} nav nav-black`}>
                <div className={`${nav?"visible":""} nav nav-red`}>
                    <div className={`${nav?"visible":""} nav nav-white`}>
                        <button className="nav-btn close-btn" onClick={()=>setNav(!nav)}>
                            <i class="fas fa-times"></i>
                        </button>

                        <img
                            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                            alt="Logo" class="logo"
                        />

                        <ul className="list">
                            <li><a href="##">Teams</a></li>
                            <li><a href="##">Locations</a></li>
                            <li><a href="##">Life at Netflix</a></li>
                            <li>
                                <ul>
                                    <li><a href="##">Netflix culture memo</a></li>
                                    <li><a href="##">Work life balance</a></li>
                                    <li><a href="##">Inclusion & diversity</a></li>
                                    <li><a href="##">Blog</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}