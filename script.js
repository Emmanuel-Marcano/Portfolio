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




let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show')
    } else{
      entry.target.classList.remove('show')
    }

  })
})


let hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => {
  observer.observe(el)
})



// let fixedbtn = document.querySelector(".grab")
  
// fixedbtn.addEventListener("click", function(){
//   fixedbtn.classList.add("contact-fixed")



// })


//   if (document.body.scrollTop > 20) {
//     fixedbtn.classList.add("contact-fixed")
//   } 



