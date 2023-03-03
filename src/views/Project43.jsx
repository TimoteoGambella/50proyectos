import { useEffect, useState } from "react"
import "../styles/project43/project43.scss"

export default function Project43({setDirUrl}){

    const [reaction,setReaction]=useState("")
    const [send,setSend]=useState(false)

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
        <div className="project43-container">
            {!send ? 
                <>
                    <div id="panel" className="panel-container">
                        <strong>How satisfied are you with our <br /> customer support performance?</strong>
                        <div className="ratings-container">
                            <div className={`rating ${reaction==="uhhappy"?"active":""}`} onClick={()=>setReaction("unhappy")}>
                                <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png" alt="Reaction"/>
                                <small>Unhappy</small>
                            </div>

                            <div className={`rating ${reaction==="neutral"?"active":""}`} onClick={()=>setReaction("neutral")}>
                                <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png" alt="Reaction"/>
                                <small>Neutral</small>
                            </div>

                            <div className={`rating ${reaction==="satisfied"?"active":""}`} onClick={()=>setReaction("satisfied")}>
                                <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png" alt="Reaction"/>
                                <small>Satisfied</small>
                            </div>
                        </div>
                        <button className="btn" id="send" disabled={reaction.length===0?true:false} onClick={()=>reaction.length!==0&&setSend(true)}>Send Review</button>
                    </div>
                </>
                :
                <div>
                    <i class="fas fa-heart"></i>
                    <strong>Thank You!</strong>
                    <strong>Feedback: {reaction}</strong>
                    <p>We'll use your feedback to improve our customer support</p>
                    <br/>
                    <p onClick={()=>{setReaction("");setSend(false)}}>RETURN</p>
                </div>
            }
        </div>
    )
}