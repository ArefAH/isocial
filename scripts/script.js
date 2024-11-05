let currentIndex = 0;

function nextSlide() {
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });

  cards[currentIndex].scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  nextSlide();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  nextSlide();
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
