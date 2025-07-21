const button = document.getElementById("callme");
function handleClick() {
    alert("Пожалуйста подтвердите что вы хотите что бы мы вам перезвонили в течении дня");
    result = confirm("Вы согласны?");

}
button.addEventListener("click", handleClick);

document.getElementById("aboutBtn").onclick = function() {
    document.getElementById("aboutModal").style.display = "block";
};
document.querySelector(".close").onclick = function() {
    document.getElementById("aboutModal").style.display = "none";
}



