const toggleThemeBtn = document.querySelector(".toggle-theme");
const subMenuBtn = document.getElementById("subMenuOpen-btn");
const subMenu = document.querySelector(".Submenu");
const navicon = document.querySelector(".nav-icon");
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
