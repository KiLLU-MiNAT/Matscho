/* ===============================
   CURSOR GLOW
================================ */

const isTouch = window.matchMedia("(hover: none)").matches;

if (!isTouch) {
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    glow.style.opacity = 1;
  });

  window.addEventListener("mouseleave", () => {
    glow.style.opacity = 0;
  });
}

/* ===============================
   PARTICLES
================================ */

const canvas = document.createElement("canvas");
canvas.id = "particlesCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let particles = [];
let W, H;

function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

for (let i = 0; i < 70; i++) {
    particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.6 + 0.3
    });
}

function draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = "rgba(90,170,255,0.35)";
    for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
    }

    requestAnimationFrame(draw);
}

draw();
