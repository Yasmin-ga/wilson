$(document).ready(()=>{
    $('.slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: `
        <div class="slick-prev"></div>
        `, 
        nextArrow: `
        <div class="slick-next"></div>
        `,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 890,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 670,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 590,
              settings: {
                slidesToShow: 4,
              }
            },
        ]
    });



   const imagemMaior = document.querySelector(".imagem-maior")
   console.log(imagemMaior)
   const imageList = document.querySelectorAll(".slider li img")
   
   imageList.forEach(image => {
       image.addEventListener("click", ()=>{
           imagemMaior.src = image.src
       })
   })
})