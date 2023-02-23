import { useEffect, useState } from "react"
import "../styles/project26/project26.scss"

export default function Project26({setDirUrl}){

    const [slide,setSlide]=useState(0)
    const [sliderHeight,setSliderHeight]=useState(1)

    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

        setSliderHeight(document.querySelector('.slider-container'))
        document.querySelector('.left-slide').style.top = `-${(document.querySelector('.right-slide').querySelectorAll('div').length- 1) * 100}vh`
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="project26-container">
            <div className="slider-container">
                <div className="left-slide">
                    <div style={{backgroundColor: "#FD3555"}}>
                        <h1>Nature flower</h1>
                        <p>all in pink</p>
                    </div>
                    <div style={{backgroundColor: "#2A86BA"}}>
                        <h1>Bluuue Sky</h1>
                        <p>with it's mountains</p>
                    </div>
                    <div style={{backgroundColor: "#252E33"}}>
                        <h1>Lonely castle</h1>
                        <p>in the wilderness</p>
                    </div>
                    <div style={{backgroundColor: "#FFB866"}}>
                        <h1>Flying eagle</h1>
                        <p>in the sunset</p>
                    </div>
                </div>
                <div className="right-slide">
                    <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')"}}></div>
                    <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')"}}></div>
                    <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')"}}></div>
                    <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')"}}></div>
                </div>
                <div className="action-buttons">
                    <button className="down-button" onClick={()=>{
                        let sl=0
                        if(slide===0){
                            setSlide(3)
                            sl=3
                        }else{
                            setSlide(slide-1)
                            sl=slide-1
                        }

                        document.querySelector('.right-slide').style.transform = `translateY(-${sl * sliderHeight.clientHeight}px)`
                        document.querySelector('.left-slide').style.transform = `translateY(${sl * sliderHeight.clientHeight}px)`
                    }}>
                        <i className="fas fa-arrow-down"></i>
                    </button>
                    <button className="up-button" onClick={()=>{
                            let sl=0
                            if(slide===3){
                                setSlide(0)
                                sl=0
                            }else{
                                setSlide(slide+1)
                                sl=slide+1
                            }

                            document.querySelector('.right-slide').style.transform = `translateY(-${sl * sliderHeight.clientHeight}px)`
                            document.querySelector('.left-slide').style.transform = `translateY(${sl * sliderHeight.clientHeight}px)`
                        }}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}