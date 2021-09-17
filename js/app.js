var menu = document.querySelector(".menu-languages-copy");
var list = document.querySelector(".languages-list");

var mobileMenu = document.querySelector(".mobile-menu");
var mobileList = document.querySelector(".mobile-list-menu");
var clinicalTrials = document.querySelector(".clinical-trials");
var aboutUs = document.querySelector(".about-us container");
var location = document.querySelector(".our-locations container");
var footer = document.querySelector(".footer");

var touchmove = document.querySelector("tu wpisać to co będzie do obsługiwania zdarzenia");
const imageList = document.querySelectorAll(".site-example-img");
// var forPatient = document.querySelector(".options-li");
// var forPatientList = document.querySelector(".for-patient");

menu.addEventListener("click", function(){
    if(list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
})

// mobileMenu.addEventListener("touchstart", function(){
//     if(mobileList.style.display === "block") {
//         mobileList.style.display = "none";
//         clinicalTrials.style.display = "block";
//         aboutUs.style.display = "block";
//         location.style.display = "block";
//         footer.style.display = "block";
        
//         // var i = document.querySelector(".mobile-menu-button").firstChild;
//         // i.classList.remve(fa fa-bars fa-2x);
//         // i.classList.add(fas fa-times fa2x);
//     } else {
//         mobileList.style.display = "block";
//         clinicalTrials.style.display = "none";
//         aboutUs.style.display = "none";
//         footer.style.display = "none";
//         // i.classList.remve(fas fa-times fa-2x);
//         // i.classList.add(fa fa-bars fa-2x);
//     }
// }) 

// DLA PACJENTA LISTA ROZWIJANA EVENT
// forPatient.addEventListener("click", function(){
//     if(forPatientList.style.display === "block") {
//         forPatientList.style.display = "none";
//     } else {
//         forPatientList.style.display = "block";
//     }
// })


// EVENT -> przesunięcie obrazka
// let imageIndex = 0;

// imageList[imageIndex].className = "visible";

// touchmove.addEventListener("touchmove", function (event) {
//     console.log("przesuwanko");
//     if (imageIndex < imageList.length - 1) {
//         imageList[imageIndex].classList.remove("visible");
//         imageList[imageIndex+1].className = "visible";
//         imageIndex = imageIndex + 1;
//     } else {
//         imageList[imageIndex].classList.remove("visible");
//         imageList[0].className = "visible";
//         imageIndex = 0;
//     }
// });