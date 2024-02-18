function toggleMenu() {
    let menuList = document.getElementById("menuList");
    if (menuList.style.display === "none") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";
    }
}
function scrollToContainer() {
    var container = document.getElementById('container2');
    container.scrollIntoView({ behavior: 'smooth' });

}