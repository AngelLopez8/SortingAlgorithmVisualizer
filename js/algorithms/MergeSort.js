class MergeSort extends SortingAlgorithm {
  constructor() {
    super("Merge Sort");

    this.index = 0;
    this.points = [];
    this.merge_sort(0, this.data.length - 1);
  }

  update() {
    if (this.index !== this.points.length) {
      this.merge(
        this.points[this.index].left,
        this.points[this.index].mid,
        this.points[this.index].right
      );
      this.index++;

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
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1).fill();
    let R = new Array(n2).fill();

    for (let i = 0; i < n1; i++) L[i] = this.data[l + i].height;
    for (let j = 0; j < n2; j++) R[j] = this.data[m + 1 + j].height;

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        this.data[k].height = L[i];
        i++;
      } else {
        this.data[k].height = R[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      this.data[k].height = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      this.data[k].height = R[j];
      j++;
      k++;
    }
  }
}

const mergeSort = new MergeSort();
