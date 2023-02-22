import { useEffect, useState } from "react"
import "../styles/project24/project24.scss"

export default function Project24({setDirUrl}){
    const [charge,setCharge]=useState(false)

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

        setTimeout(() => {
            getData()
        }, 2500)
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    
    
    function getData() {
        const animated_bgs = document.querySelectorAll('.animated-bg')
        const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
        setCharge(true)

        animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
        animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
    }

    return(
        <div className="project24-container">
            <div className="card">
                <div className="card-header animated-bg" id="header">
                    {charge?
                        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="FOTO" />
                        :<></>
                    }
                </div>
                <div className="card-content">
                    <h3 className="card-title animated-bg animated-bg-text" id="title">
                        {charge?"Lorem ipsum dolor sit amet":""}
                    </h3>
                    <p className="card-excerpt" id="excerpt">
                        {charge?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis":""}
                        <span className="animated-bg animated-bg-text">&nbsp;</span>
                        <span className="animated-bg animated-bg-text">&nbsp;</span>
                        <span className="animated-bg animated-bg-text">&nbsp;</span>
                    </p>
                    <div className="author">
                        <div className="profile-img animated-bg" id="profile_img">
                            {charge?<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="FOTO"/>:<></>}
                        </div>
                        <div className="author-info">
                            <strong className="animated-bg animated-bg-text" id="name">{charge?"John Doe":""}</strong>
                            <small className="animated-bg animated-bg-text" id="date">{charge?"Oct 08, 2020":""}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}