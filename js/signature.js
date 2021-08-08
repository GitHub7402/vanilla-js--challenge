const signatureCanvas = document.querySelector("#jsSignatureCanvas");
const signCtx = signatureCanvas.getContext("2d");
const saveSignatureBtn = document.querySelector("#saveSignature");
const resetSignatureBtn = document.querySelector("#resetSignature");
const loadSignature = document.querySelector("#load-signature");

signatureCanvas.width = 350;
signatureCanvas.height = 200;

signCtx.lineWidth = 2;
signCtx.strokeStyle = "black";

let writeSignature = false;

function startWritingSignature() {
    writeSignature = true;
}

function stopWritingSignature() {
    writeSignature = false;
}

function signatureCanvasMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    
    if (writeSignature === false) {
        signCtx.beginPath();
        signCtx.moveTo(x, y);
    } else {
        signCtx.lineTo(x, y);
        signCtx.stroke();
    }
}

function signatureCanvasMouseRightClick(event) {
    event.preventDefault();
}

if (signatureCanvas) {
    signatureCanvas.addEventListener("mousemove", signatureCanvasMouseMove);
    signatureCanvas.addEventListener("mousedown", startWritingSignature);
    signatureCanvas.addEventListener("mouseup", stopWritingSignature);
    signatureCanvas.addEventListener("mouseleave", stopWritingSignature);
    signatureCanvas.addEventListener("contextmenu", signatureCanvasMouseRightClick);
}

function saveSignature() {
    const signURL = signatureCanvas.toDataURL();
    localStorage.setItem("signature-key", signURL);
    const writedSign = document.createElement("img");
    writedSign.src = signURL;
    loadSignature.appendChild(writedSign);
    alert("Saved.");
    fromSignatureToMain();
}

if (saveSignatureBtn) {
    saveSignatureBtn.addEventListener("click", saveSignature);
}

function resetSignature() {
    signCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    signCtx.restore();
}

if (resetSignatureBtn) {
    resetSignatureBtn.addEventListener("click", resetSignature);
}

function preventClickingSavedSignature(event) {
    event.preventDefault();
}

if (loadSignature) {
    loadSignature.addEventListener("contextmenu", preventClickingSavedSignature);
    loadSignature.addEventListener("mousedown", preventClickingSavedSignature);
}