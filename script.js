const active=document.querySelector(".navigation")
const bars=document.getElementsByClassName
("toggle-button")[0]
// const body=document.querySelector("body")

bars.addEventListener('click',()=>{
    active.classList.toggle('active')
})