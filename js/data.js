window.addEventListener("DOMContentLoaded", function() {

    const username = localStorage.getItem("inputText");

    if (username) {
        document.getElementById("data").textContent = username;
    } else {
        document.getElementById("data").textContent = "Usuario desconocido";
    }
});
