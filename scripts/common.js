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