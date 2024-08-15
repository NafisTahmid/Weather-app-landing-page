function showSidebar() {
    event.preventDefault();
    let sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    event.preventDefault();
    let sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "none";
}


$( document ).ready(function() {
    $('.slider-section').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        center:true,
        dots:false,
        navText: ['<i class="fa fa-solid fa-arrow-left"></i>','<i class="fa fa-solid fa-arrow-right"></i>']
    })
});