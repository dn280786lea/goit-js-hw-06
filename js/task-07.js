const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
const fontSize = event.target.value;
span.style.fontSize = fontSize + "px";
}