class InsertionSort extends SortingAlgorithm {
  constructor() {
    super("Insertion Sort");
    this.index = 1;
    this.jndex;
  }

  update() {
    if (this.index < this.data.length) {
      this.reads++;

      this.key = this.data[this.index].height;
      this.jndex = this.index - 1;

      while (this.jndex >= 0 && this.data[this.jndex].height > this.key) {
        this.reads += 2;
        this.compares++;
        this.exchanges++;

        this.data[this.jndex + 1].height = this.data[this.jndex].height;
        this.jndex--;
      }
      this.data[this.jndex + 1].height = this.key;
      this.index++;
    }

    this.draw();
  }

  reset() {
    this.index = 1;
    this.data = generateData();
  }
}

const insertionSort = new InsertionSort();
