import { useEffect } from "react"
import "../styles/project9/project9.scss"
import aud1 from "../assets/sound-board_sounds_applause.mp3"
import aud2 from "../assets/sound-board_sounds_boo.mp3"
import aud3 from "../assets/sound-board_sounds_gasp.mp3"
import aud4 from "../assets/sound-board_sounds_tada.mp3"
import aud5 from "../assets/sound-board_sounds_victory.mp3"
import aud6 from "../assets/sound-board_sounds_wrong.mp3"

export default function Project9({setDirUrl}){

    const sounds = [
        {
            id:"applause",
            sound:aud1
        },
        {
            id:"boo",
            sound:aud2
        },
        {
            id:"gasp",
            sound:aud3
        },
        {
            id:"tada",
            sound:aud4
        },
        {
            id:"victory",
            sound:aud5
        },
        {
            id:"wrong",
            sound:aud6
        },
    ]

    useEffect(() => {
        
        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    function stopSongs() {
        sounds.forEach(sound => {
            const song = document.getElementById(sound.id)
    
            song.pause()
            song.currentTime = 0;
        })
    }
    
    return(
        <div className="project9-container">
                {sounds.map((obj,i)=>{
                    return(
                        <audio id={obj.id} src={obj.sound} key={i}></audio>
                    )
                })}
                <div id="buttons">
                    {sounds.map((obj,i)=>{
                        return(
                            <button className="btn" onClick={async()=>{
                                await stopSongs()
                                document.getElementById(obj.id).play()}}
                            >{obj.id}</button>
                        )
                    })}
                </div>
        </div>
    )
}