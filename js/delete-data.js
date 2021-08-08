const deleteBtn = document.querySelector("#delete-data");

function deleteData() {
    alert("Do you want to delete all your data?")
    localStorage.removeItem("username");
    localStorage.removeItem("todos-key");
    localStorage.removeItem("signature-key")
    window.location.reload();
    fromDeletingToLogin();
}

if (deleteBtn) {
    deleteBtn.addEventListener("click", deleteData);
}