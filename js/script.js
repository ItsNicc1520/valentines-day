// Login Logic
function checkPassword() {
    const input = document.getElementById('passwordInput').value.toLowerCase();
    const errorMsg = document.getElementById('error-msg');
    
    // Accepts "leandre" or "leandre odayar"
    if(input.includes("leandre")) {
        sessionStorage.setItem('access', 'granted'); // Save login state
        window.location.href = "main.html"; // Go to main page
    } else {
        errorMsg.classList.remove('hidden');
    }
}

// "No" Button Prank
function moveNoButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    // Make sure it doesn't go off screen
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

// Confetti Celebration
function celebrate() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Confetti from left and right
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    alert("I love you, Leandre! ❤️");

}
// Existing Login Logic
function checkPassword() {
    const input = document.getElementById('passwordInput').value.toLowerCase();
    const errorMsg = document.getElementById('error-msg');
    if(input.includes("leandre")) {
        sessionStorage.setItem('access', 'granted');
        window.location.href = "main.html";
    } else {
        errorMsg.classList.remove('hidden');
    }
}

// Existing "No" Button Logic
function moveNoButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

// Existing Celebrate Logic
function celebrate() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    function random(min, max) { return Math.random() * (max - min) + min; }
    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) { return clearInterval(interval); }
      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
    alert("I love you, Leandre! ❤️");
}

// --- NEW: Days Counter Logic ---
const startDate = new Date('2020-12-15'); // <--- CHANGE THIS DATE TO YOUR ANNIVERSARY (YYYY-MM-DD)
const today = new Date();
const difference = today - startDate;
const days = Math.floor(difference / (1000 * 60 * 60 * 24));
if(document.getElementById('days-counter')) {
    document.getElementById('days-counter').innerText = days + " Days";
}

