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
});
