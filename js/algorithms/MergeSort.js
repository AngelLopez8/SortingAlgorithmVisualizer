class MergeSort extends SortingAlgorithm {
  constructor() {
    super("Merge Sort");

    this.index = 0;
    this.points = [];
    this.merge_sort(0, this.data.length - 1);

    /*********************/
    this.n1;
    this.n2;
    this.L;
    this.R;
    this.i;
    this.j;
    this.k;

    this.step = 0;
  }

  update() {
    if (this.index !== this.points.length) {
      this.merge(
        this.points[this.index].left,
        this.points[this.index].mid,
        this.points[this.index].right
      );
      // this.index++;

      this.draw();
    }
  }

  reset() {
    this.index = 0;
    this.data = generateData();
  }

  /*********************/
  merge_sort(l, r) {
    if (l >= r) return;
    let m = l + parseInt((r - l) / 2);
    this.merge_sort(l, m);
    this.merge_sort(m + 1, r);
    this.points.push({ left: l, mid: m, right: r });
  }

  merge(l, m, r) {
    /********* INITIAL STEP************/
    if (this.step === 0) {
      this.n1 = m - l + 1;
      this.n2 = r - m;

      this.L = new Array(this.n1).fill();
      this.R = new Array(this.n2).fill();

      /*********************/
      this.reads += this.n1 - 1 + this.n2 - 1;
      /*********************/
      for (let i = 0; i < this.n1; i++) this.L[i] = this.data[l + i].height;
      for (let j = 0; j < this.n2; j++) this.R[j] = this.data[m + 1 + j].height;

      this.i = 0;
      this.j = 0;
      this.k = l;

      this.step++;
    } else if (this.step === 1) {
      // while
      if (this.i < this.n1 && this.j < this.n2) {
        /*********************/
        this.compares += 1;
        /*********************/
        if (this.L[this.i] <= this.R[this.j]) {
          /*********************/
          this.exchanges += 1;
          /*********************/
          this.data[this.k].height = this.L[this.i];
          this.i++;
        } else {
          /*********************/
          this.exchanges += 1;
          /*********************/
          this.data[this.k].height = this.R[this.j];
          this.j++;
        }
        this.k++;
      } else {
        this.step++;
      }

      // this.step++;
    } else if (this.step === 2) {
      /********* SECOND STEP************/
      // while
      if (this.i < this.n1) {
        /*********************/
        this.exchanges += 1;
        /*********************/
        this.data[this.k].height = this.L[this.i];
        this.i++;
        this.k++;
      } else {
        this.step++;
      }
    } else if (this.step === 3) {
      /********* LAST STEP************/

      // while
      if (this.j < this.n2) {
        /*********************/
        this.exchanges += 1;
        /*********************/
        this.data[this.k].height = this.R[this.j];
        this.j++;
        this.k++;
      } else {
        this.index++;
        this.step = 0;
      }
    }
  }
}

const mergeSort = new MergeSort();
