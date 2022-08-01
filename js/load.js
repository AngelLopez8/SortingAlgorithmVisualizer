let algorithm = bubbleSort;
algorithm.draw();
let play = false;

document.querySelector("select").addEventListener("change", (event) => {
  switch (event.target.value) {
    case "bubble":
      algorithm = bubbleSort;
      break;
    case "selection":
      algorithm = selectionSort;
      break;
    case "insertion":
      algorithm = insertionSort;
      break;
    case "merge":
      algorithm = mergeSort;
      break;
    default:
      break;
  }
  update_info();
  algorithm.draw();
});

document.querySelector("#play").addEventListener("click", (event) => {
  play = true;
});

document.querySelector("#pause").addEventListener("click", (event) => {
  play = false;
});

document.querySelector("#reset").addEventListener("click", (event) => {
  algorithm.reset();
  algorithm.draw();
});

document.querySelector("#speed").addEventListener("click", (event) => {
  if (speed >= 10) speed -= 10;
});

document.querySelector("#slow").addEventListener("click", (event) => {
  if (speed <= 30) speed += 10;
});

document.querySelector("#bar-color").addEventListener("input", (event) => {
  barColor = event.target.value;
  algorithm.draw();
});

const animate = () => {
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, speed);

  update_info();

  if (play) {
    algorithm.update();
  }
};

animate();
