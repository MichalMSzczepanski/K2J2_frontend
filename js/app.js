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

clinicalTrialsPaginationFirstPage.addEventListener("click", function(){
    for (var i = 0, max = clinicalTrialsPaginationRightColumnElements.length; i < max; i++) {
        clinicalTrialsPaginationRightColumnElements[i].style.display = 'none';
        clinicalTrialsPaginationLeftColumnElements[i].style.display = "flex";         
    } 
    clinicalTrialsPaginationFirstPage.classList.add("active")
    clinicalTrialsPaginationSecondPage.classList.remove("active");
})

clinicalTrialsPaginationSecondPage.addEventListener("click", function(){
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
var czestochowa = document.querySelector(".czestochowa");
var czestochowaSection = document.querySelector(".czestochowa-section");
var wlodawa = document.querySelector(".wlodawa");
var wlodawaSection = document.querySelector(".wlodawa-section");
var krakow = document.querySelector(".krakow");
var krakowSection = document.querySelector(".krakow-section");
var wolomin = document.querySelector(".wolomin");
var wolominSection = document.querySelector(".wolomin-section");

czestochowa.addEventListener("click", function(){
    czestochowa.classList.add("active");
    czestochowaSection.style.display = "grid";
    wlodawa.classList.remove("active");
    wlodawaSection.style.display = "none";
    krakow.classList.remove("active");
    krakowSection.style.display = "none";
    wolomin.classList.remove("active");
    wolominSection.style.display = "none";
})

wlodawa.addEventListener("click", function(){
    czestochowa.classList.remove("active");
    czestochowaSection.style.display = "none";
    wlodawa.classList.add("active");
    wlodawaSection.style.display = "grid";
    krakow.classList.remove("active");
    krakowSection.style.display = "none";
    wolomin.classList.remove("active");
    wolominSection.style.display = "none";
})

krakow.addEventListener("click", function(){
    czestochowa.classList.remove("active");
    czestochowaSection.style.display = "none";
    wlodawa.classList.remove("active");
    wlodawaSection.style.display = "none";
    krakow.classList.add("active");
    krakowSection.style.display = "grid";
    wolomin.classList.remove("active");
    wolominSection.style.display = "none";
})

wolomin.addEventListener("click", function(){
    czestochowa.classList.remove("active");
    czestochowaSection.style.display = "none";
    wlodawa.classList.remove("active");
    wlodawaSection.style.display = "none";
    krakow.classList.remove("active");
    krakowSection.style.display = "none";
    wolomin.classList.add("active");
    wolominSection.style.display = "grid";
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


