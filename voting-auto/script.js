const screens = [
  document.getElementById("screen1"),
  document.getElementById("screen2"),
  document.getElementById("screen3"),
  document.getElementById("screen4"),
  document.getElementById("screen5"),
];

function showScreen(index, delay) {
  setTimeout(() => {
    screens.forEach(screen => screen.classList.add("hidden"));
    screens[index].classList.remove("hidden");
  }, delay);
}

// Timed transitions
showScreen(0, 0);         // Intro
showScreen(1, 7000);      // Loading
showScreen(2, 8000);      // Connected
showScreen(3, 10000);     // Voting Screen
showScreen(4, 18000);     // Thank you
