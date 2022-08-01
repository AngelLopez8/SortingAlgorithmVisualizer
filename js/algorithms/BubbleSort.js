class BubbleSort extends SortingAlgorithm {
  constructor() {
    super("Bubble Sort");
    this.index = 0;
    this.jndex;
  }

  update() {
    if (this.index < this.data.length) {
      this.jndex = 0;
      while (this.jndex < this.data.length - this.index - 1) {
        this.reads += 2;
        this.compares++;
        if (this.data[this.jndex].height > this.data[this.jndex + 1].height) {
          let temp = this.data[this.jndex].height;
          this.data[this.jndex].height = this.data[this.jndex + 1].height;
          this.data[this.jndex + 1].height = temp;

          this.exchanges++;
        }
        this.jndex++;
      }
      this.index++;
    }
    this.draw();
  }

  reset() {
    this.index = 0;
    this.reads = 0;
    this.compares = 0;
    this.exchanges = 0;
    this.data = generateData();
  }
}

const bubbleSort = new BubbleSort();
