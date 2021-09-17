var menu = document.querySelector(".menu-languages-copy");
var list = document.querySelector(".languages-list");

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