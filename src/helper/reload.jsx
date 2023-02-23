export const reloadStyles=(setDirUrl)=>{
    setDirUrl("home")
    document.getElementById("body").style.backgroundColor="white"
    document.getElementById("body").style.background="none"
    document.getElementById("body").style.overflowY="scroll"
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
    }
}