function save() {
    var number = document.getElementById("no");
    var value = no.value;
    if(value === "" || value === "  " || value.lenght <= 2){
        document.getElementById("para").innerText = "Correct the value";
        document.getElementById("para2").innerText = "Type Correct password";
        document.getElementById("para3").innerText = "Character Not Allow";
        document.getElementById("para4").innerText = "Type Correct Password";
    } else {
        alert("Congrates")
    }
}
// function save() {
//     var number = document.getElementById("nto");
//     var value = nto.value;
//     if(value === "" || value === "  " || value.lenght <= 2){
//         document.getElementById("para2").innerText = "Type Correct password";
//     } else {
//         alert("Congrates")
//     }
// }
// function save() {
//     var number = document.getElementById("nt");
//     var value = nt.value;
//     if(value === "" || value === "  " || value.lenght <= 2){
//         document.getElementById("para3").innerText = "Character Not Allow";
//     } else {
//         alert("Congrates")
//     }
// }
// function save() {
//     var number = document.getElementById("nf");
//     var value = nf.value;
//     if(value === "" || value === "  " || value.lenght <= 2){
//         document.getElementById("para4").innerText = "Type Correct Password";
//     } else {
//         alert("Congrates")
//     }
// }