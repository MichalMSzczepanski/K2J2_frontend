window.addEventListener("DOMContentLoaded", (event) => {
    var menu = document.querySelector(".menu-languages-copy");
    var list = document.querySelector(".languages-list");

    var mobileMenu = document.querySelector(".mobile-menu");
    var mobileList = document.querySelector(".mobile-list-menu");
    var clinicalTrials = document.querySelector(".clinical-trials");
    var aboutUs = document.querySelector(".about-us");
    var location = document.querySelector(".our-locations");
    var mobileContact = document.querySelector(".mobile-contact-section");
    var footer = document.querySelector(".footer");
    var iBar = document.querySelector("#menu-bar");
    var iTimes = document.querySelector("#menu-times");

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

    mobileList.style.display = "none";

    mobileMenu.addEventListener("touchstart", function(){
        if(mobileList.style.display === "block") {
            mobileList.style.display = "none";
            clinicalTrials.style.display = "block";
            aboutUs.style.display = "block";
            location.style.display = "block";
            footer.style.display = "block";
            mobileContact.style.display = "block";
            // iTimes.style.display = "none";
            // iBar.style.display = "block";

        } else {
            mobileList.style.display = "block";
            clinicalTrials.style.display = "none";
            aboutUs.style.display = "none";
            footer.style.display = "none";
            mobileContact.style.display = "none";
            location.style.display = "none";
            // iTimes.style.display = "block";
            // iBar.style.display = "none";


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
});



