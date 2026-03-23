const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseModal = document.getElementById("surpriseModal");
const closeModal = document.getElementById("closeModal");
const heartsContainer = document.getElementById("heartsContainer");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "❤️" : "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  heart.style.fontSize = (Math.random() * 18 + 18) + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5500);
}

function launchHearts(count = 30) {
  for (let i = 0; i < count; i++) {
    setTimeout(createHeart, i * 120);
  }
}

surpriseBtn.addEventListener("click", () => {
  surpriseModal.classList.add("show");
  launchHearts(36);
});

closeModal.addEventListener("click", () => {
  surpriseModal.classList.remove("show");
});

surpriseModal.addEventListener("click", (e) => {
  if (e.target === surpriseModal) {
    surpriseModal.classList.remove("show");
  }
});