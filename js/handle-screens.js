const loginForm = document.querySelector("#login-form");
const signatureScreen = document.querySelector("#signature-display-control");
const mainScreen = document.querySelector("#hide-main-screen");
const backgroundImg = document.querySelector("#background-img");

const CLASS_HIDDEN = "hidden";

function showContent(content) {
    content.classList.remove(CLASS_HIDDEN);
}

function hideContent(content) {
    content.classList.add(CLASS_HIDDEN);
}

function fromLoginToSignature() {
    hideContent(loginForm);
    showContent(signatureScreen);
}

function fromSignatureToMain() {
    hideContent(signatureScreen);
    showContent(mainScreen);
    showContent(backgroundImg);
}

function fromDeletingToLogin() {
    hideContent(mainScreen);
    hideContent(backgroundImg);
    showContent(loginForm);
}

function whenUserRefresh() {    
    hideContent(loginForm);
    showContent(mainScreen);
    showContent(backgroundImg);
}