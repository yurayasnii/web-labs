function updateCountdown() {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = newYear - now;

  const countdownDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const countdownHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const countdownMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const countdownSeconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = countdownDays < 10 ? '0' + countdownDays : countdownDays;
  document.getElementById('hours').textContent = countdownHours < 10 ? '0' + countdownHours : countdownHours;
  document.getElementById('minutes').textContent = countdownMinutes < 10 ? '0' + countdownMinutes : countdownMinutes;
  document.getElementById('seconds').textContent = countdownSeconds < 10 ? '0' + countdownSeconds : countdownSeconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
