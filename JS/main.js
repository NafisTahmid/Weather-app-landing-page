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