const menuLines = document.querySelector(".menu-lines");
const header = document.querySelector(".main-header")
menuLines.addEventListener("click", () => {
    header.classList.toggle("menu-active")
})