const rand = (min, max) => Math.random() * (max - min) + min;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  createBackground();
});

const backgroundColors = ['#000', '#000'];
const colors = [
  ['#000000', '#6b6b6b'],
  ['#2d2e2e', '#53785d'],
  ['#6b6b6b', '#ffffff']
];

const count = 70;
const blurRange = [12, 70];
const radiusRange = [1, 120];

ctx.globalCompositeOperation = 'lighter';

let backgroundGradient;
function createBackground() {
  backgroundGradient = ctx.createLinearGradient(0, height, width, 0);
  backgroundGradient.addColorStop(0, backgroundColors[0]);
  backgroundGradient.addColorStop(1, backgroundColors[1]);
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, width, height);
}

createBackground();

const items = [];
const preRenderedCircles = [];

function createCircleCanvas(radius, blur, colorOne, colorTwo) {
  const offCanvas = document.createElement('canvas');
  const size = (radius + blur) * 2;
  offCanvas.width = size;
  offCanvas.height = size;
  const offCtx = offCanvas.getContext('2d');

  const grd = offCtx.createLinearGradient(0, 0, size, size);
  grd.addColorStop(0, colorOne);
  grd.addColorStop(1, colorTwo);
  offCtx.fillStyle = grd;
  offCtx.filter = `blur(${blur}px)`;
  offCtx.beginPath();
  offCtx.arc(size / 2, size / 2, radius, 0, Math.PI * 2);
  offCtx.fill();
  return offCanvas;
}

for (let i = 0; i < count; i++) {
  const radius = rand(...radiusRange);
  const blur = rand(...blurRange);
  const x = rand(-100, width + 100);
  const y = rand(-100, height + 100);

  const colorIndex = Math.floor(rand(0, colors.length));
  const colorOne = colors[colorIndex][0];
  const colorTwo = colors[colorIndex][1];

  const dx = rand(-0.5, 0.5);
  const dy = rand(-0.5, 0.5);
  const dBlur = rand(-0.1, 0.1);

  const preCanvas = createCircleCanvas(radius, blur, colorOne, colorTwo);
  preRenderedCircles.push(preCanvas);

  items.push({ x, y, radius, blur, dx, dy, dBlur });
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, width, height);

  items.forEach((item, i) => {
    item.dx += rand(-0.05, 0.05);
    item.dy += rand(-0.05, 0.05);

    item.dx = Math.max(Math.min(item.dx, 1), -1);
    item.dy = Math.max(Math.min(item.dy, 1), -1);

    if (item.x + item.dx > width || item.x + item.dx < 0) item.dx *= -1;
    if (item.y + item.dy > height || item.y + item.dy < 0) item.dy *= -1;

    item.x += item.dx;
    item.y += item.dy;

    item.blur += item.dBlur;
    if (item.blur < blurRange[0] || item.blur > blurRange[1]) item.dBlur *= -1;

    const preCanvas = preRenderedCircles[i];
    ctx.drawImage(preCanvas, item.x - preCanvas.width / 2, item.y - preCanvas.height / 2);
  });

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
