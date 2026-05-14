function enterApp() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

function updateTime() {
  const now = new Date();
  document.getElementById("timeDisplay").innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

function showTab(tab) {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}

// Timer
let timerInterval;

function startTimer() {
  let time = parseInt(document.getElementById("timerInput").value);
  const display = document.getElementById("timerDisplay");

  timerInterval = setInterval(() => {
    display.innerText = time;
    time--;
    if (time < 0) clearInterval(timerInterval);
  }, 1000);
}

// Stopwatch
let stopwatch = 0;
let swInterval;

function startStopwatch() {
  swInterval = setInterval(() => {
    stopwatch++;
    document.getElementById("stopwatchDisplay").innerText = stopwatch;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(swInterval);
}

// Fake country search (simple version)
function searchTime() {
  const input = document.getElementById("countryInput").value;
  const time = new Date().toLocaleTimeString();
  document.getElementById("result").innerText =
    "Time in " + input + ": " + time;
}
