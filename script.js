const menuButton = document.querySelector(".mobile-menu")
const navbar = document.querySelector("nav")
const closeMenu = document.querySelector(".close-icon")
const openMenu = document.querySelector(".menu-icon")

menuButton.addEventListener("click", () => {
  if (navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    menuButton.classList.remove("mobile");

  } else {
    navbar.classList.add("open")
    menuButton.classList.add("mobile")
    
  }
})







let images = document.querySelectorAll(".svg")

let back = document.querySelector(".back")
let mid = document.querySelector(".mid")
let up = document.querySelector(".top")
let tippy = document.querySelector(".tippy")


 let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if(entry.isIntersecting){
            entry.target.classList.add("transition-card")
            mid.classList.add("transition-mid")
             up.classList.add("transition-top")
            tippy.classList.add("transition-tippy")
        }
        else{
            entry.target.classList.remove("transition-card")
            mid.classList.remove("transition-mid")
             up.classList.remove("transition-top")
            tippy.classList.remove("transition-tippy")


        }
    } )


 })

 let layers =document.querySelector(".layers")

//  observer.observe(layers)

 images.forEach((el) => {
    observer.observe(el)
 })




/*
const techContainer = document.querySelectorAll(".tech-container")
const techText = document.querySelectorAll(".tech-name")


techContainer.forEach((container)=>{
  container.addEventListener("mouseover", ()=>{

    techText.forEach((el) => {

      el.classList.add("show-tech-name")
  
  
    })

  })
})

techContainer.forEach((container)=>{
  container.addEventListener("mouseout", ()=>{

    techText.forEach((el) => {

      el.classList.remove("show-tech-name")
  
  
    })

  })
})

/*

techContainer.addEventListener("mouseover", (e) => {

  techText.forEach((el) => {

    el.classList.add("show-tech-name")


  })
 
 //techText.classList.add("show-tech-name")


})

techContainer.addEventListener("mouseout", (e) => {


 
  techText.forEach((el) => {

    el.classList.remove("show-tech-name")


  })


})
  */

  
  // When the user clicks on the button, scroll to the top of the document
