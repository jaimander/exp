const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Circle properties
const circle = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  speed: 5,
};

// Keyboard state tracking
const keys = {};

// Draw the circle on the canvas
function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// Handle the keyboard events
function handleKeyEvents() {
  document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    // Prevents page from scrolling with arrow keys
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
    }
  });

  document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });
}

// Update the circle's position based on key presses
function updatePosition() {
  if (keys.ArrowUp) {
    circle.y -= circle.speed;
  }
  if (keys.ArrowDown) {
    circle.y += circle.speed;
  }
  if (keys.ArrowLeft) {
    circle.x -= circle.speed;
  }
  if (keys.ArrowRight) {
    circle.x += circle.speed;
  }
}

// Main animation loop
function gameLoop() {
  // Clear the canvas to avoid "trails"
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updatePosition();
  drawCircle();

  // Request the next animation frame
  requestAnimationFrame(gameLoop);
}

// Start the application
handleKeyEvents();
gameLoop();
