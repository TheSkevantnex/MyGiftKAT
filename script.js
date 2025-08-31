// Mostrar la carta al hacer clic
function mostrarRegalo() {
  const carta = document.getElementById("carta");
  carta.classList.toggle("oculto");
}

// corazones flotando
const canvas = document.getElementById("corazones");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function drawHeart(x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  ctx.beginPath();
  ctx.moveTo(0, -2);
  ctx.bezierCurveTo(2, -4, 4, -2, 0, 2);
  ctx.bezierCurveTo(-4, -2, -2, -4, 0, -2);
  ctx.fillStyle = "rgba(255, 0, 100, 0.7)";
  ctx.fill();
  ctx.restore();
}

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 1.2 + 0.6, // corazones más grandes
    speed: Math.random() * 2 + 1
  };
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, i) => {
    drawHeart(heart.x, heart.y, heart.size);
    heart.y -= heart.speed;
    if (heart.y < -10) hearts[i] = createHeart();
  });
  requestAnimationFrame(animate);
}

for (let i = 0; i < 40; i++) {
  hearts.push(createHeart());
}
animate();
