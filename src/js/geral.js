const menuLines = document.querySelector("#menu-lines");
const header = document.querySelector(".main-header");
menuLines.addEventListener("click", () => {
    header.classList.toggle("menu-active")
    menuLines.classList.toggle("open")
})


const linksDownloads = document.querySelector(".links-downloads");
linksDownloads.addEventListener("click", ()=>{
    linksDownloads.classList.toggle("active");
}) 
