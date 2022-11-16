let itemWrapper=document.querySelector(".item__text__wrapper")
let itemBtn=document.querySelector(".item__text-btn")


itemBtn.addEventListener("click",function(){
    itemWrapper.classList.toggle("active")
})