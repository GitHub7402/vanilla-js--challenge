const openCanvas = document.querySelector("#canvasBtn");
const modal = document.querySelector("#openCanvas");
const overlay = document.querySelector(".modal__overlay");

function openModal() {
    modal.classList.remove("hidden");
}
function closeModal() {
    modal.classList.add("hidden");
}

openCanvas.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);