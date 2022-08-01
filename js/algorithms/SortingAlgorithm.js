class SortingAlgorithm {
  constructor(name) {
    this.name = name;
    this.data = generateData();

    this.compares = 0;
    this.exchanges = 0;
    this.reads = 0;
  }

  draw() {
    ctx.clearRect(0, 0, innerWidth * 0.8, innerHeight * 0.6);

    const speedText = `Speed x${(40 - speed) / 10 + 1}`;
    ctx.font = "24px serif";
    ctx.fillStyle = "red";
    ctx.fillText(speedText, 24, 24);

    for (let i = 0; i < this.data.length; i++) {
      this.data[i].draw();
    }
  }
}

const generateData = () => {
  let data = [];
  for (let i = 0; i < canvas.width; i++) {
    let dataWidth = canvas.width / canvas.width;
    let rec = new Rectangle(
      i * dataWidth,
      0,
      dataWidth,
      Math.random() * canvas.height
    );
    data.push(rec);
  }
  return data;
};
