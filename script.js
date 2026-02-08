// Event date: 16 Feb, 9:00 AM IST
const eventDate = new Date("2026-02-16T09:00:00+05:30").getTime();
const totalDuration = eventDate - new Date().getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const progressEl = document.getElementById("progress");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    progressEl.style.width = "100%";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");

  const elapsed = totalDuration - distance;
  const progressPercent = Math.min((elapsed / totalDuration) * 100, 100);
  progressEl.style.width = progressPercent + "%";
}

setInterval(updateCountdown, 1000);
updateCountdown();
