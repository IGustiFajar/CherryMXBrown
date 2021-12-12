function keyupFunction(){
    document.getElementById("erase").classList.add("move");
}
function erasetext(){
    document.getElementById("output").value = "";
    document.getElementById("erase").classList.remove("move");
}

var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');

function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}
function submit() {
    var username = document.forms['masuk']['name'].value;
    username = username.toLowerCase();
    var password = document.forms['masuk']['sandi'].value;
    password = password.toLowerCase();
    if (username == "admin" && password == "admin") {
        window.location.href = "index.html";
    } 
    else {
        alert("Periksa kembali Username/Password Anda! ");
    }
}