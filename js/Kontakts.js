document.getElementById("Kontakts"). addEventListener("click", function() {
    document.getElementById("ourKontakts").style.display = "block";
});
document.querySelector("#ourKontakts .close").addEventListener("click", function() {
    document.getElementById("ourKontakts").style.display = "none";
});