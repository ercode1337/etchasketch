const currentGridSize = '';

const slider = document.getElementById("slider");
slider.addEventListener("input", (e) => {
	const num = parseInt(e.target.value);
	if (num) {
		if (num > currentGridSize) {
			createGrid(num);
		} else {
			destroyGrid(num);
		}
		currentGridSize = num;
	}
});

function createGrid(num) {
  const container = document.getElementById("container");		
  container.innerText = '';
  for (let i = 0; i < num*num; i++) {
    let gridBox = document.createElement("div");
    gridBox.setAttribute("class", "grid-box");
    container.appendChild(gridBox);
  }
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  const gridBoxes = document.querySelectorAll('.grid-box');


  gridBoxes.forEach(gridBox => {
    gridBox.addEventListener('click', function(e) {
      e.target.style.backgroundColor = 'black';
    });
    gridBox.addEventListener('mouseover', function(e) {
      if (e.buttons === 1) {
        e.target.style.backgroundColor = 'black';
      }
    });
  });

  const eraserBtn = document.getElementById("eraser");

  eraserBtn.addEventListener('click', () => {
    gridBoxes.forEach(gridBox => {
      gridBox.addEventListener('click', function(e) {
        e.target.style.backgroundColor = 'white';
      });
      gridBox.addEventListener('mouseover', function(e) {
        if (e.buttons === 1) {
        e.target.style.backgroundColor = 'white';
      }
    });
    gridBox.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'white';
      });
  });
});

const blackBtn = document.getElementById("black")
blackBtn.addEventListener('click', () => {
  gridBoxes.forEach(gridBox => {
    gridBox.addEventListener('click', function(e) {
      e.target.style.backgroundColor = 'black';
    });
    gridBox.addEventListener('mouseover', function(e) {
      if (e.buttons === 1) {
      e.target.style.backgroundColor = 'black';
    }
  });
});
});
}

createGrid(16);

const title = document.getElementById("title");
title.innerText = 'Etch-a-Sketch!';