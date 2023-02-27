import { useEffect,useState } from "react"
import "../styles/project31/project31.scss"

export default function Project31({setDirUrl}){

    const [array,setArray]=useState({
        lower:true,
        upper:true,
        number:true,
        symbol:true,
        length:20
    })

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

    function generatePassword(lower, upper, number, symbol, length) {
        let generatedPassword = ''
        const typesCount = lower + upper + number + symbol
        const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
        
        if(typesCount === 0) {
            return ''
        }

        for(let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0]
                generatedPassword += randomFunc[funcName]()
            })
        }

        const finalPassword = generatedPassword.slice(0, length)

        return finalPassword
    }

    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol
    }

    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }

    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }

    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    }

    function getRandomSymbol() {
        const symbols = '!@#$%^&*(){}[]=<>/,.'
        return symbols[Math.floor(Math.random() * symbols.length)]
    }

    useEffect(() => {
    console.log(array)
    }, [array])

    return(
        <div className="project31-container">
            <div className="container">
                <h2>Password Generator</h2>
                <div className="result-container">
                    <span id="result"></span>
                    <button className="btn" id="clipboard" onClick={()=>{
                        let password = document.getElementById('result').innerText;
                        if (!password) {
                            return;
                        }
                        navigator.clipboard.writeText(password);
                        alert('Password copied to clipboard!')
                    }}>
                        <i className="far fa-clipboard"></i>
                    </button>
                </div>
                <div className="settings">
                    <div className="setting">
                        <label>Password Length</label>
                        <input type="number" id="length" min="4" max="20" value={array.length} onChange={(e)=>setArray({...array,length:e.target.value})}/>
                    </div>
                    <div className="setting">
                        <label>Include uppercase letters</label>
                        <input type="checkbox" id="uppercase" checked={array.upper?true:false} onClick={(e)=>{setArray({...array,upper:e.target.checked})}}/>
                    </div>
                    <div className="setting">
                        <label>Include lowercase letters</label>
                        <input type="checkbox" id="lowercase" checked={array.lower?true:false} onClick={(e)=>{setArray({...array,lower:e.target.checked})}}/>
                    </div>
                    <div className="setting">
                        <label>Include numbers</label>
                        <input type="checkbox" id="numbers" checked={array.number?true:false} onClick={(e)=>{setArray({...array,number:e.target.checked})}}/>
                    </div>
                    <div className="setting">
                        <label>Include symbols</label>
                        <input type="checkbox" id="symbols" checked={array.symbol?true:false} onClick={(e)=>{setArray({...array,symbol:e.target.checked})}}/>
                    </div>
                </div>

                <button className="btn btn-large" id="generate" onClick={()=>{
                    document.getElementById('result').innerText = generatePassword(array.lower, array.upper, array.number, array.symbol, array.length)
                }}>
                    Generate Password
                </button>
            </div>
        </div>
    )
}