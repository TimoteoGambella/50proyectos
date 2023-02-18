import { useEffect, useState } from "react"
import "../styles/project18/project18.scss"

export default function Project18({setDirUrl}){

    const [slide,setSlide]=useState(0)
    const [listPhotos,setListPhotos]=useState([])

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }
        
        setListPhotos(document.querySelectorAll('.slide'))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
    useEffect(() => {
        if(listPhotos.length!==0){
            setBgToBody(slide)
        }
    }, [listPhotos]);


    function setBgToBody(param) {
        document.body.style.backgroundImage = listPhotos[param].style.backgroundImage
    }

    function setActiveSlide(param) {
        listPhotos.forEach((slide) => slide.classList.remove('active'))

        listPhotos[param].classList.add('active')
    }


    return(
        <div className="project18-container">
            <div className="slider-container">
                <div
                    className="slide active"
                    style={{
                        backgroundImage:"url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage:"url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')"
                    }}
                ></div>

                <div
                    className="slide"
                    style={{
                        backgroundImage:"url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
                    }}
                ></div>

                <div
                    className="slide"
                    style={{
                        backgroundImage:"url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')"
                    }}
                ></div>

                <div
                    className="slide"
                    style={{
                        backgroundImage:"url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
                    }}
                ></div>

                <button className="arrow left-arrow" id="left" onClick={()=>{
                    if(slide!==0){
                        setSlide(slide-1)
                        
                        setBgToBody(slide-1)
                        setActiveSlide(slide-1)
                    }else{
                        setSlide(listPhotos.length-1)

                        setBgToBody(listPhotos.length-1)
                        setActiveSlide(listPhotos.length-1)
                    }

                }}>
                    <i className="fas fa-arrow-left"></i>
                </button>

                <button className="arrow right-arrow" id="right" onClick={()=>{
                    if(slide!==listPhotos.length-1){
                        setSlide(slide+1)

                        setBgToBody(slide+1)
                        setActiveSlide(slide+1)
                    }else{
                        setSlide(0)

                        setBgToBody(0)
                        setActiveSlide(0)
                    }
                }}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}