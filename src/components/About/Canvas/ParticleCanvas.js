export default class ParticleCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.mouse = {
      x: null,
      y: null,
      radius: (this.canvas.height / 80) * (this.canvas.width / 80),
    };

    this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.canvas.addEventListener("mouseout", this.onMouseOut.bind(this));
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height =
      20 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    this.mouse.radius = 100;
    this.init();
  }

  init() {
    this.particlesArray = [];
    let numberOfParticles = (this.canvas.height * this.canvas.width) / 5000;
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 3 + 0.5;
      let x =
        Math.random() * (this.canvas.width - size * 2 - size * 2) + size * 2;
      let y =
        Math.random() * (this.canvas.height - size * 2 - size * 2) + size * 2;
      let directionX = Math.random() * 2 - 1;
      let directionY = Math.random() * 2 - 1;
      let color = "#fff";

      this.particlesArray.push(
        new Particle(
          this.ctx,
          this.canvas.width,
          this.canvas.height,
          this.mouse,
          x,
          y,
          directionX,
          directionY,
          size,
          color
        )
      );
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < this.particlesArray.length; i++) {
      this.particlesArray[i].update();
    }
    this.connect();
  }

  connect() {
    let opacity = 1;
    for (let a = 0; a < this.particlesArray.length; a++) {
      for (let b = a; b < this.particlesArray.length; b++) {
        let distance =
          (this.particlesArray[a].x - this.particlesArray[b].x) *
            (this.particlesArray[a].x - this.particlesArray[b].x) +
          (this.particlesArray[a].y - this.particlesArray[b].y) *
            (this.particlesArray[a].y - this.particlesArray[b].y);
        if (distance < (this.canvas.width / 7) * (this.canvas.height / 7)) {
          opacity =
            1 - distance / ((this.canvas.width / 7) * (this.canvas.height / 7));
          this.ctx.strokeStyle = "rgba(250, 250, 250, " + opacity + ")";
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particlesArray[a].x, this.particlesArray[a].y);
          this.ctx.lineTo(this.particlesArray[b].x, this.particlesArray[b].y);
          this.ctx.stroke();
        }
      }
    }
  }

  onMouseMove(e) {
    this.mouse.x = e.x;
    this.mouse.y = e.y;
  }

  onMouseOut() {
    this.mouse.x = undefined;
    this.mouse.y = undefined;
  }
}

class Particle {
  constructor(
    ctx,
    canvasWidth,
    canvasHeight,
    mouse,
    x,
    y,
    directionX,
    directionY,
    size,
    color
  ) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.mouse = mouse;
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fillStyle = "#fff";
    this.ctx.fill();
  }

  update() {
    if (this.x > this.canvasWidth || this.x < 0) {
      this.directionX *= -1;
    }
    if (this.y > this.canvasHeight || this.y < 0) {
      this.directionY *= -1;
    }

    // let dx = this.mouse.x - this.x;
    // let dy = this.mouse.y - this.y;
    // let distance = Math.sqrt(dx * dx + dy * dy);
    // if (distance < this.mouse.radius + this.size) {
    //   if (this.mouse.x < this.x && this.x < this.canvasWidth - this.size * 10) {
    //     this.x += 10;
    //   }
    //   if (this.mouse.x > this.x && this.x > this.size * 10) {
    //     this.x -= 10;
    //   }
    //   if (
    //     this.mouse.y < this.y &&
    //     this.y < this.canvasHeight - this.size * 10
    //   ) {
    //     this.y += 10;
    //   }
    //   if (this.mouse.y < this.y && this.y > this.size * 10) {
    //     this.y -= 10;
    //   }
    // }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}
