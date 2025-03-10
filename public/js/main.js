const toggleThemeBtn = document.querySelector("#toggle-theme");
const subMenuBtn = document.getElementById("subMenuOpen-btn");
const subMenu = document.querySelector(".Submenu");
const navicon = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const closeBtn = document.querySelector(".x-mark");
const overlay = document.querySelector(".overlay");
toggleThemeBtn.addEventListener("click" , function() {
    if(localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark")
        localStorage.theme = 'light'
    }
    else{
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme" , "dark")
    }
})



subMenuBtn.addEventListener('click' , (e)=> {
    e.currentTarget.parentElement.classList.toggle("text-orange-300")
    e.preventDefault()
    subMenu.classList.toggle("Submenu-open")
} )

navicon.addEventListener("click" , function() {
    nav.classList.remove("-right-64")
    nav.classList.add("right-0")
    overlay.classList.add("overlay-show")
})

closeBtn.addEventListener("click" , function() {
    nav.classList.remove("right-0")
    nav.classList.add("-right-64")
    overlay.classList.remove("overlay-show")
})
overlay.addEventListener("click" , function() {
    nav.classList.remove("right-0")
    nav.classList.add("-right-64")
    overlay.classList.remove("overlay-show")
})

