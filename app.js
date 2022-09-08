const navSlide= function(){
    const burger = document.querySelector(".burger-nav")
    const nav = document.querySelector(".nav-slides")

    burger.addEventListener("click", function() {
        nav.classList.toggle("nav-active");
    })
}

navSlide();