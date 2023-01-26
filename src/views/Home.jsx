import { useEffect } from "react";

export default function Home({setDirUrl}){
    
    useEffect(() => {
            document.getElementById("body").style.backgroundColor="white"
            document.getElementById("body").style.overflowY="scroll"
            setDirUrl("home")
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <></>
    )
}