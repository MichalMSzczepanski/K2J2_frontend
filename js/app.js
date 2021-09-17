var menu = document.querySelector(".menu-languages-copy");
var list = document.querySelector(".languages-list");

menu.addEventListener("click", function(){
    if(list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
})