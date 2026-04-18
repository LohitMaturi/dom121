document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementById("title");

    document.getElementById("textBtn").addEventListener("click", function() {
        if (title.innerText === "Text Changed! here the new") {
            title.innerText = "Original Text";
        } else {
            title.innerText = "Text Changed! here the new";
        }
    });

    document.getElementById("colorBtn").addEventListener("click", function() {
        if (title.style.color === "blue") {
            title.style.color = "red";
        } else {
            title.style.color = "blue";
        }
    });

    document.getElementById("toggleBtn").addEventListener("click", function() {
        if (title.style.display === "none") {
            title.style.display = "block";
        } else {
            title.style.display = "none";
        }
    });
    
   let themeBtn = document.getElementById("themeBtn")

themeBtn.addEventListener("click", function() {
    if (document.body.style.backgroundColor === "yellow") {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "yellow"
        themeBtn.innerText = "Dark Mode"
    } else {
        document.body.style.backgroundColor = "yellow"
        document.body.style.color = "white"
        themeBtn.innerText = "Light Mode"
    }
});

});
