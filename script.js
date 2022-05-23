window.addEventListener("scroll",reveal)
function reveal()
{
    let reveals = document.querySelectorAll(".reveal")
    for(let i = 0; i < reveals.length; i++)
    {
        let windowHeight = window.innerHeight
        let revealTop = reveals[i].getBoundingClientRect().top
        let revealpoint = 150
        if(revealTop < windowHeight - revealpoint)
        {
            reveals[i].classList.add("active")
        }
        else {
            reveals[i].classList.remove("active")
        }
    }
}
let messageArray = ["Hi 👋 I am Jeevika"]
let textPosition = 0
const speed = 100
function typeWriter()
{
    document.querySelector("#message").innerHTML = messageArray[0].substring(0,textPosition) + "<span>\u25ae</span>"

    if(textPosition++ != messageArray[0].length)
    {
        setTimeout(typeWriter,speed)
    }
}
window.addEventListener("load",typeWriter)
const audio = new Audio()
audio.src = "./music/click.mp3"