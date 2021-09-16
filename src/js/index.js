const seletores = document.querySelectorAll(".select-menu .seletor");
seletores.forEach(seletor =>{
    seletor.addEventListener('click', () =>{
        seletor.parentElement.classList.toggle("active")
    })
})

const pessoaOpts = document.querySelectorAll(".select-menu.pessoa .opcoes p");
pessoaOpts.forEach(opt => {
    let text = opt.innerText
    opt.addEventListener("click", () =>{
        opt.parentElement.parentElement.querySelector(".seletor p").innerText = text;
        opt.parentElement.parentElement.classList.remove("active");
    })

})