function keyupFunction(){
    document.getElementById("erase").classList.add("move");
}
function erasetext(){
    document.getElementById("output").value = "";
    document.getElementById("erase").classList.remove("move");
}