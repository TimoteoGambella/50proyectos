import { useEffect, useState } from "react"
import "../styles/project35/project35.scss"

export default function Project35({setDirUrl}){
    
    const [imgNow,setImgNow]=useState(0)
    const [arrayImgs,setArrayImgs]=useState([])

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
    
    useEffect(() => {
        if(arrayImgs.length===0){
            setArrayImgs([
                "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
                "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80"
            ])
        }else{
            changeImage(imgNow)
        }
    }, [arrayImgs])
    
    function changeImage(idx) {
        document.getElementById(idx).style.transform = `translateX(${-idx * 500}px)`
        
        setTimeout(async() => {
            console.log(idx)
            if(idx===arrayImgs.length-1){
                setImgNow(0)
                changeImage(0)
                setArrayImgs([])
            }else{
                setImgNow(idx)
                changeImage(idx+1)
            }
        }, 1500);
    }
    
    return(
        <div className="project35-container">
            <div className="carousel">
                <div className="image-container" id="imgs">
                    {arrayImgs.map((img,i)=>{
                        return(
                            <img src={img} alt={`img${i}`} key={i} id={i}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}