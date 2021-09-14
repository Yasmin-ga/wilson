$(document).ready(()=>{
   const imagemMaior = document.querySelector(".imagem-maior img")
   const imageList = document.querySelectorAll(".slider li img")
   
   imageList.forEach(image => {
       image.addEventListener("click", ()=>{
           imagemMaior.src = image.src
       })
   })

   
    $('.slider').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: true,
        //prevArrow: 
        //nextArrow: 
    });



})