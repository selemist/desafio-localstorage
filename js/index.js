document.getElementById("buttonText").addEventListener("click", function(event) {
    event.preventDefault();  // Evita que se recargue la página
    const username = document.getElementById("inputText").value;
    
    // Guardamos el nombre en localStorage
    localStorage.setItem("inputText", username);
    
    // Redirigimos a la página data.html
    window.location.href = "data.html";
});
