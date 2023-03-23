const slider = document.getElementById("slider");
let currentGridSize = 0;
const eraseBtn = document.querySelector('#eraser');



slider.addEventListener("input", (e) => {
  const num = parseInt(e.target.value);
  if (num) {
    if (num > currentGridSize) {
      createGrid(num);
    } else {
      destroyGrid(num);
    }
    currentGridSize = num;
    isEraseMode = false;
    eraseBtn.style.backgroundColor = "#98989c";
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
  const eraseBtn = document.querySelector('#eraser');
  const clearBtn = document.querySelector('#clear');
  let isEraseMode = false;

    // Add event listeners to the grid boxes and erase button
    gridBoxes.forEach(gridBox => {
      gridBox.addEventListener('click', function(e) {
        if(isEraseMode) {
          e.target.style.backgroundColor = 'white';
        } else {
          e.target.style.backgroundColor = 'black';
        }
      });
      gridBox.addEventListener("mouseover", function(e) {
        if (e.buttons === 1) {
          if(isEraseMode) {
            e.target.style.backgroundColor = 'white';
          } else {
            e.target.style.backgroundColor = 'black';
          }
        }
      });
    });
    
    eraseBtn.addEventListener("click", () => {
      isEraseMode = !isEraseMode;
      if(isEraseMode) {
        eraseBtn.style.backgroundColor = "#5A5A5A";
      } else {
        eraseBtn.style.backgroundColor = "#98989c";
      }
    });


    clearBtn.addEventListener("click", () => {
      gridBoxes.forEach(gridBox => {
        gridBox.style.transition = 'background-color 0.7s ease';
        gridBox.style.backgroundColor = "white";
      });
      setTimeout(() => {
        gridBoxes.forEach(gridBox => {
          gridBox.style.transition = '';
        });
      }, 5);
    });
};

function destroyGrid(num) {
  const container = document.getElementById("container");
  container.innerText = '';
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  for (let i = 0; i < num*num; i++) {
    let gridBox = document.createElement("div");
    gridBox.setAttribute("class", "grid-box");
    container.appendChild(gridBox);
  }
}

createGrid(16);

const title = document.getElementById("title");
title.innerText = 'Etch-a-Sketch!';