class SelectionSort extends SortingAlgorithm {
  constructor() {
    super("Selection Sort");
    this.index = 0;
  }

  update() {
    let minIndex = this.index;
    let j = this.index + 1;
    while (j < this.data.length) {
      this.reads += 2;
      this.compares++;
      if (this.data[j].height < this.data[minIndex].height) {
        minIndex = j;
      }
      j++;
    }
    if (this.index < this.data.length - 1) {
      let temp = this.data[minIndex].height;
      this.data[minIndex].height = this.data[this.index].height;
      this.data[this.index].height = temp;
      this.index++;

      this.exchanges++;
    }
    this.draw();
  }

  reset() {
    this.index = 0;
    this.data = generateData();
  }
}

const selectionSort = new SelectionSort();
