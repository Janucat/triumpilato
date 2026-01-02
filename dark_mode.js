const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
    button.textContent = "light mode";
    } else {
    button.textContent = "dark mode";
    }
});