import { useEffect, useState } from "react"
import "../styles/project35/project35.scss"

export default function Project35({setDirUrl}){

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

    const imgs = document.getElementById('imgs')
    const leftBtn = document.getElementById('left')
    const rightBtn = document.getElementById('right')
    
    const img = document.querySelectorAll('#imgs img')
    
    let idx = 0
    
    let interval = setInterval(run, 2000)
    
    function run() {
        idx++
        changeImage()
    }
    
    function changeImage() {
        if(idx > img.length - 1) {
            idx = 0
        } else if(idx < 0) {
            idx = img.length - 1
        }
    
        imgs.style.transform = `translateX(${-idx * 500}px)`
    }
    
    function resetInterval() {
        clearInterval(interval)
        interval = setInterval(run, 2000)
    }
    
    rightBtn.addEventListener('click', () => {
        idx++
        changeImage()
        resetInterval()
    })
    
    leftBtn.addEventListener('click', () => {
        idx--
        changeImage()
        resetInterval()
    })
    
    return(
        <div className="project35-container">
            <div className="carousel">
                <div className="image-container" id="imgs">
                    <img src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80" alt="first-image"/>
                    <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="second-image"/>
                    <img src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="third-image"/>
                    <img src="https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80" alt="fourth-image"/>
                </div>

                <div className="buttons-container">
                    <button id="left" className="btn">Prev</button>
                    <button id="right" className="btn">Next</button>
                </div>
            </div>
        </div>
    )
}