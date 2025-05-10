function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
  heart.style.animationDuration = (Math.random() * 5 + 5) + "s"; // Vary animation time
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000); // Remove after animation
}
setInterval(createHeart, 300); // Make a new heart every 300ms