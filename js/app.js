window.addEventListener("DOMContentLoaded", (event) => {
    var menu = document.querySelector(".menu-languages-copy");
    var list = document.querySelector(".languages-list");

    var mobileMenu = document.querySelector(".mobile-menu-button");
    var mobileList = document.querySelector(".mobile-list-menu");
    var clinicalTrials = document.querySelector(".clinical-trials");
    var aboutUs = document.querySelector(".about-us");
    var location = document.querySelector(".our-locations");
    var mobileContact = document.querySelector(".mobile-contact-section");
    var footer = document.querySelector(".footer");
    var header = document.querySelector(".header");
    var background = document.querySelector(".background-graphic");
    var iBar = document.querySelector("#menu-bar");
    var iTimes = document.querySelector("#menu-times");

    var touchmove = document.querySelector("tu wpisać to co będzie do obsługiwania zdarzenia");
    const imageList = document.querySelectorAll(".site-example-img");
// var forPatient = document.querySelector(".options-li");
// var forPatientList = document.querySelector(".for-patient");

    // LANGUAGEs MENU
    menu.addEventListener("click", function () {
        if (list.style.display === "block") {
            list.style.display = "none";
        } else {
            list.style.display = "block";
        }
    })


    // MOBILE USER MENU
    mobileMenu.addEventListener("touchstart", function () {
        if (mobileList.style.display === "block") {
            mobileList.style.display = "none";
            clinicalTrials.style.display = "block";
            aboutUs.style.display = "block";
            location.style.display = "block";
            footer.style.display = "block";
            header.style.display = "block";
            mobileContact.style.display = "block";
            background.style.display = "block";
            iTimes.style.display = "none";
            iBar.style.display = "flex";

        } else {
            mobileList.style.display = "block";
            clinicalTrials.style.display = "none";
            aboutUs.style.display = "none";
            footer.style.display = "none";
            header.style.display = "none";
            mobileContact.style.display = "none";
            location.style.display = "none";
            background.style.display = "none";
            iTimes.style.display = "flex";
            iBar.style.display = "none";


        }
    })

    /*
   HEADER
    */

// H1 REVEAL ANIMATION

    window.sr = ScrollReveal();
    sr.reveal('.master-header', {
        reset: true,
        delay: 300,
        duration: 3000,
        distance: 0
    });

// MOBILE HEADER BUTTON REVEAL ANIMATION

    window.sr = ScrollReveal();
    sr.reveal('.header-btn', {
        reset: true,
        delay: 1500,
        duration: 1500,
        distance: 0
    });


    /*
    CLINICAL TRIALS - MOBILE
     */


// ROTATOR

    var clinicalTrialsPaginationLeftColumnElements = document.querySelectorAll(".left-column");
    var clinicalTrialsPaginationRightColumnElements = document.querySelectorAll(".right-column");
    var clinicalTrialsPaginationFirstPage = document.querySelector(".first-page");
    var clinicalTrialsPaginationSecondPage = document.querySelector(".second-page");

    clinicalTrialsPaginationFirstPage.addEventListener("click", function () {
        for (var i = 0, max = clinicalTrialsPaginationRightColumnElements.length; i < max; i++) {
            clinicalTrialsPaginationRightColumnElements[i].style.display = 'none';
            clinicalTrialsPaginationLeftColumnElements[i].style.display = "flex";
        }
        clinicalTrialsPaginationFirstPage.classList.add("active")
        clinicalTrialsPaginationSecondPage.classList.remove("active");
    })

    clinicalTrialsPaginationSecondPage.addEventListener("click", function () {
        for (var i = 0, max = clinicalTrialsPaginationLeftColumnElements.length; i < max; i++) {

            clinicalTrialsPaginationLeftColumnElements[i].style.display = "none";
            clinicalTrialsPaginationRightColumnElements[i].style.display = "flex";
            if (!clinicalTrialsPaginationSecondPage.classList.contains("active")) {
                clinicalTrialsPaginationSecondPage.classList.add("active")
            }
            clinicalTrialsPaginationFirstPage.classList.remove("active");
        }
    })


    /*
    OUR LOCATIONS - MOBILE
     */


// ROTATOR
    var paginationCity = document.querySelectorAll(".pagination-city");
    var rotationCity = document.querySelectorAll(".rotation-city");

    // zamiana psudotablicy na tablicę w celu otrzymania indeksu
    var paginationTab = Array.from(paginationCity);
    var rotationTab = Array.from(rotationCity);

    paginationCity.forEach(pagCity => {
        pagCity.addEventListener("click", function () {
            var index = paginationTab.indexOf(pagCity);
            paginationCity.forEach(rotate => {
                if (pagCity === rotate) {
                    paginationCity[index].classList.add("active");
                } else {
                    rotate.classList.remove("active");
                }
            })
            rotationCity.forEach(city => {
                if (rotationTab.indexOf(city) === index) {
                    rotationCity[index].style.display = "grid";
                } else {
                    city.style.display = "none";
                }
            })
        })
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


