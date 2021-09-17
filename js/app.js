var menu = document.querySelector(".menu-languages-copy");
var list = document.querySelector(".languages-list");
// var forPatient = document.querySelector(".options-li");
// var forPatientList = document.querySelector(".for-patient");

menu.addEventListener("click", function(){
    if(list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
})

// forPatient.addEventListener("click", function(){
//     if(forPatientList.style.display === "block") {
//         forPatientList.style.display = "none";
//     } else {
//         forPatientList.style.display = "block";
//     }
// })