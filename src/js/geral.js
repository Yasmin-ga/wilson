const menuLines = document.querySelector(".menu-lines");
const navbar = document.querySelector("nav.navbar")
menuLines.addEventListener("click",()=>{
    navbar.classList.toggle("active")
})