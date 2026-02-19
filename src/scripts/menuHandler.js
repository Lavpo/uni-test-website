
function menuToggler(){
    var mobile = document.getElementById("jsmobileMenu");
    if (mobile.style.display === "flex"){
        mobile.style.display = "none";
    }
    else
    {
        mobile.style.display = "flex";
    }
}