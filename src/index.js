document.querySelector(".screen1").style.display = "block";
document.querySelector(".screen2").style.display = "none";

document.querySelector(".toggle-screen2").addEventListener("click", function() {
    document.querySelector(".screen1").style.display = "none";
    document.querySelector(".screen2").style.display = "block";
});