let canvas = document.querySelector(".board");

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

let ctx = canvas.getContext("2d");

let speed = 40;

class Rectangle {
  constructor(x, y, width, height, color = "black") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    ctx.setTransform(1, 0, 0, -1, 0, canvas.height); // reverses the coordinate system's y-axis
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transforms
  }
}

console.log(canvas.width, canvas.height);

const update_info = () => {
  document.getElementById("name").innerHTML = "Name: " + algorithm.name;
  document.getElementById("reads").innerHTML = "Reads: " + algorithm.reads;
  document.getElementById("compares").innerHTML =
    "Compares: " + algorithm.compares;
  document.getElementById("exchanges").innerHTML =
    "Exchanges: " + algorithm.exchanges;
};
