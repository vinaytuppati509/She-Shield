const swipeBtn = document.getElementById("swipeBtn");
const swipeArea = document.getElementById("swipeArea");
const alertScreen = document.getElementById("alertScreen");

let isDragging = false;

swipeBtn.addEventListener("mousedown", () => {
  isDragging = true;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let rect = swipeArea.getBoundingClientRect();
  let offset = e.clientX - rect.left - 25;

  if (offset > 0 && offset < rect.width - 50) {
    swipeBtn.style.left = offset + "px";
  }

  if (offset >= rect.width - 60) {
    activateShield();
  }
});

function activateShield() {
  alertScreen.classList.remove("hidden");
  swipeArea.style.display = "none";
  document.querySelector(".status").innerText = "Status: ALERT";
  document.querySelector(".status").style.color = "red";
}

function resetShield() {
  alertScreen.classList.add("hidden");
  swipeArea.style.display = "block";
  swipeBtn.style.left = "0px";
  document.querySelector(".status").innerText = "Status: SAFE";
  document.querySelector(".status").style.color = "#00ffae";
}
