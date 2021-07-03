const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")

const navLinks = document.querySelectorAll(".nav-links li")
const navhref = document.querySelectorAll(".nav-links li a")
const navSlide = () => {
   

    burger.addEventListener('click', (e)=>{    
        
        nav.classList.toggle('nav-active')
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                  link.style.animation=''}
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/4+0.8}s`
            }
    })
   
    burger.classList.toggle('toggle')
 
    })
  
    navhref.forEach(a=>{a.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
        burger.classList.toggle('toggle')
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                  link.style.animation=''}
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/4+0.8}s`
            }
    })
    })})
}
navSlide();




const swup = new Swup()