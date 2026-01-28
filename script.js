const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("gif");
const question = document.getElementById("question");

yesBtn.addEventListener("click", () => {
  question.textContent = "💖 Yay! Happy Valentine’s Day! 💖";
  gif.src = "happy.gif";
  document.querySelector(".buttons").style.display = "none";

  launchHearts();
});

function launchHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    const x = (Math.random() - 0.5) * 300 + "px";
    const y = (Math.random() - 0.5) * 300 + "px";

    heart.style.setProperty("--x", x);
    heart.style.setProperty("--y", y);

    heart.style.left = "50%";
    heart.style.top = "50%";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
  }
}
