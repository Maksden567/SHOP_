let subtitle = document.querySelector(".main__subtitle>p")
let title = document.querySelector(".swiper-slide>img")
let filterbtn = document.querySelector(".products__filter-btn")
let overlap = document.querySelector(".overlap")
let body = document.querySelector(".page__body")
let filter = document.querySelector(".filter")
let filterBtn2=document.querySelector(".header-filter")
let filterClose=document.querySelector(".filter__close")
let itemWrapper=document.querySelector(".item__text__wrapper")
let itemBtn=document.querySelector(".item__text-btn")
const addInfo=document.querySelector(".information__shipping-adress")
const info=document.querySelector(".information__lc")
const closeInfo=document.querySelector(".information__close")
const checkout=document.querySelector(".page__checkout")
const checkoutOverlap=document.querySelector(".checkout__overlap")
const paymentBtn=document.querySelector(".information__payment-btn")
const closeModalBtn=document.querySelector(".modal__close")
const informationBlock=document.querySelector(".information__modal-block")
let n=1;
let radios=document.querySelectorAll(".information__payment-input")
if(location.pathname=="/checkout.html"){
    radios.forEach(item=>{
      
        if(item.addEventListener('change',function(){
              radios.forEach(item=>{
            item.parentNode.style.border="1px solid #EAEAEA";
        })
        if(item.checked==true){
            
            item.parentNode.style.border="1px solid green";
           
        }
        }
        
        
        ))
    0})

    paymentBtn.addEventListener("click",function(){
        informationBlock.classList.add("active")
    })
    closeModalBtn.addEventListener("click",function(){
        informationBlock.classList.remove("active")

    })
    addInfo.addEventListener("click",function(){
        info.classList.add('active')
        checkout.classList.add('active')
        checkoutOverlap.classList.add('active')
    })
    closeInfo.addEventListener("click",function(){
        info.classList.remove('active')
        checkout.classList.remove('active')
        checkoutOverlap.classList.remove('active')
    })
    paymentBtn.addEventListener("click",function(){
        scrollTop()
    })
    function scrollTop(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  }
if(location.pathname=="/item.html"){
    let itemWrapper=document.querySelector(".item__text__wrapper")
    let itemBtn=document.querySelector(".item__text-btn")
    console.log(89789)
    
    itemBtn.addEventListener("click",function(){
        itemWrapper.classList.toggle("active")
       if(itemBtn.textContent=="Читать дальше …"){
        itemBtn.textContent="Приховати"
       }
       else{
        itemBtn.textContent="Читать дальше …"
       }
    })

    
    
}
else{
    filterbtn.addEventListener("click",function(){
        console.log(798)
        filter.classList.toggle("active")
    })
    filterBtn2.addEventListener("click",function(){
        filter.classList.add("active")
        overlap.classList.add("active")
        body.style.height="500px"
        body.style.overflow="hidden"
       
    })
    filterClose.addEventListener("click",function(){
        filter.style.transition="all ease 1s"
        filter.classList.remove("active")
        overlap.classList.remove("active")
        body.style.height="100%"
        body.style.overflow="auto"
        
    })
    if(screen.width<550){
        console.log(174891278)
        title.setAttribute('src',"../img/title-bg380px.png")
        subtitle.textContent="We are an online plant shop offering a wide range"
    }
    console.log("vasya")
}

