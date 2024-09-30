document.getElementById("buttonText").addEventListener("click", function(event) {
    event.preventDefault();  
    const username = document.getElementById("inputText").value;
    

    localStorage.setItem("inputText", username);
    
   
    window.location.href = "data.html";
});
