const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function hidePlaceholder() {
    loginInput.placeholder = "";
}

function showPlaceholder() {
    loginInput.placeholder = "What is your name?";
}

if (loginInput) {
    loginInput.addEventListener("focus", hidePlaceholder);
    loginInput.addEventListener("blur", showPlaceholder);
}

function login(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem("username", username);
    greeting.innerText = `Welcome, ${username}.`;
    fromLoginToSignature();
}

if (loginForm) {
    loginForm.addEventListener("submit", login);
}