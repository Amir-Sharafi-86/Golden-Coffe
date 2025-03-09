const toggleThemeBtn = document.querySelector(".toggle-theme");
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