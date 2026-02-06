const modal = document.getElementById("artifactModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const artifactCards = document.querySelectorAll(".artifact-card");
const closeBtn = document.querySelector(".close");

artifactCards.forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.textContent = card.querySelector("h3").textContent;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "Main.html";
  }, 400);
});