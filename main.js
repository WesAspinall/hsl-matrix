const grid = document.getElementById('grid');
const crossesPerRow = 100;
const crossesPerCol = 10;
const squares = [];

const palette = ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087']; // replace with your favorite

function getRandomColor() {
  return palette[Math.floor(Math.random() * palette.length)];
}

for (let i = 0; i < crossesPerRow * crossesPerCol; i++) {
  
  const crossContainer = document.createElement('div');
  const xContainerLeft = document.createElement('div');
  const xContainerRight = document.createElement('div');
  const yContainer = document.createElement('div');
  
  const squareLeft = document.createElement('div');
  const squareRight = document.createElement('div');
  const squareTop = document.createElement('div');
  const squareBottom = document.createElement('div');
  const squareMiddle = document.createElement('div');
  
  
  crossContainer.classList.add('cross-container');

  xContainerLeft.classList.add('x-container');
  squareLeft.classList.add('square', 'left');
  xContainerLeft.appendChild(squareLeft);

  yContainer.classList.add('y-container');
  squareTop.classList.add('square', 'top');
  squareMiddle.classList.add('square', 'middle');
  squareBottom.classList.add('square', 'bottom');
  
  yContainer.appendChild(squareTop);
  yContainer.appendChild(squareMiddle);
  yContainer.appendChild(squareBottom);

  xContainerRight.classList.add('x-container');
  squareRight.classList.add('square', 'right');
  xContainerRight.appendChild(squareRight);

  crossContainer.appendChild(xContainerLeft);
  crossContainer.appendChild(yContainer);
  crossContainer.appendChild(xContainerRight);

  grid.appendChild(crossContainer);

  squares.push(squareLeft, squareTop, squareMiddle, squareBottom, squareRight);
}

setInterval(() => {
  squares.forEach(square => {
    square.style.backgroundColor = getRandomColor();
  });
}, 100);
