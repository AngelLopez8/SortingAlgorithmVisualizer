let canvas = document.querySelector(".board");

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

let ctx = canvas.getContext("2d");

class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fillColor = color;
  }

  draw() {
    ctx.setTransform(1, 0, 0, -1, 0, canvas.height); // reverses the coordinate system's y-axis
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transforms
  }
}

let data = [];

for (let i = 0; i < canvas.width; i++) {
  let dataWidth = canvas.width / canvas.width;
  let rec = new Rectangle(
    i * dataWidth,
    0,
    dataWidth,
    Math.random() * canvas.height,
    "black"
  );
  data.push(rec);
}

const bubbleSort = (i, j) => {
  let swapped = false;
  while (i < data.length && !swapped) {
    while (j < data.length - i - 1 && !swapped) {
      if (data[j].height > data[j + 1].height) {
        // swap
        let temp = data[j].height;
        data[j].height = data[j + 1].height;
        data[j + 1].height = temp;
        swapped = true;
      }
      j++;
    }
    if (!swapped) i++;
  }
};

const selectionSort = (k) => {
  let minIndex = k;
  let j = k + 1;
  while (j < data.length) {
    // console.log(j);
    if (data[j].height < data[minIndex].height) {
      minIndex = j;
    }
    j++;
  }
  if (k < data.length - 1) {
    let temp = data[minIndex].height;
    data[minIndex].height = data[i].height;
    data[i].height = temp;
    i++;
  }
};

let i = 0;
let j = 0;

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth * 0.8, innerHeight * 0.6);

  data.forEach((rec) => {
    rec.draw();
  });

  //   bubbleSort(i, j);
  selectionSort(i);
};

animate();
