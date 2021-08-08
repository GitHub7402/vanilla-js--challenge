const savedUsername = localStorage.getItem("username");
const getSignatureURL = localStorage.getItem("signature-key");

if (savedUsername && getSignatureURL) {
    greeting.innerText = `Hello, ${savedUsername}.`;
    const getSignature = document.createElement("img");
    getSignature.src = getSignatureURL;
    loadSignature.appendChild(getSignature);
    whenUserRefresh();
} else if (savedUsername) {
    greeting.innerText = `Hello, ${savedUsername}.`;
    fromLoginToSignature()
}