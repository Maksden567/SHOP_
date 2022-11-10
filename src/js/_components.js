let subtitle = document.querySelector(".main__subtitle>p")
let title = document.querySelector(".swiper-slide>img")
if(screen.width<550){
    title.setAttribute('src',"../img/title-bg380.png")
    subtitle.textContent="We are an online plant shop offering a wide range"
}
