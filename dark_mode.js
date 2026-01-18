const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
    button.textContent = "light mode";
    } else {
    button.textContent = "dark mode";
    }
});


const backToTopBtn = document.getElementById("backToTop");

// Mostra/nasconde il bottone
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Torna in cima
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});