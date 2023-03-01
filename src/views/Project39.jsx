import { useEffect, useState } from "react"
import "../styles/project39/project39.scss"

export default function Project39({setDirUrl}){


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

    const [passLong,setPassLong]=useState(0)

    return(
        <div className="project39-container">
            <div className="background" id="background" style={{filter:`blur(${20-passLong*2}px)`}}></div>
            <div className="bg-white rounded p-10 text-center shadow-md">
                <h1 className="text-3xl">Image Password Strength</h1>
                <p className="text-sm text-gray-700">Change the password to see the effect</p>
                <div className="my-4 text-left">
                    <label htmlFor="email" className="text-gray-900">Email:</label>
                    <input
                        type="text"
                        className="border block w-full p-2 mt-2 rounded"
                        id="email"
                        placeholder="Enter Email"
                    />
                </div>

                <div className="my-4 text-left">
                    <label htmlFor="email" className="text-gray-900">Password:</label>
                    <input
                        type="password"
                        className="border block w-full p-2 mt-2 rounded"
                        id="password"
                        placeholder="Enter Password"
                        onChange={(e)=>setPassLong(e.target.value.length)}
                    />
                </div>

                <button
                    className={`${passLong<10?"bg-grey":"bg-black"} text-white py-2 mt-4 inline-block w-full rounded`}
                    type="submit"
                    disabled={passLong<10}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}