const container = document.querySelector('.squareContainer');
const inputRange = document.querySelector('#range');
const span = document.querySelectorAll('span');
const resetBtn = document.querySelector('.resetBtn');
const randomColorBtn = document.querySelector('.randomColorBtn');
const inputColor = document.querySelector('#color');

// ##Default square grid
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
resetToDefaultLoop()

// ##Input that changes default behaviour of square grid in range from 1 to 60 times equal amount.
inputRange.addEventListener('input', (e) => {
  for(let spans of span) {
    spans.textContent = inputRange.value
}   
// ##Container with gridTemplateCols & gridTemplateRows that changes size with input value above.
    container.style.gridTemplateColumns = `repeat(${inputRange.value}, 1fr)`
    container.style.gridTemplateRows = `repeat(${inputRange.value}, 1fr)`
// ##For loop that starts to increment the 'i' with whatever value of input value(multiplied) is, then-
// it gets into while loop and while input value is less than 'i' it goes into loop where it creates divs-
// appends the div and sets bg-color. Then when 'i' is equal to input value it deletes container divs that-
// are appended above and goes into another for loop that creates divs and appends them and adds bg-color.
// And after second for loop finishes, it stops, as is stated in last function 'break'.
    let inputSum = inputRange.value * inputRange.value;
    for(i = 0; i <= inputSum; i++) {
        while(i <= inputSum) {
          const square = document.createElement('div');
          container.appendChild(square)
          square.style.backgroundColor = inputColor.value;
          if(i === inputSum) {
            container.innerHTML = ''
            for(let j = 0; j <= inputSum; j++) {
              const square = document.createElement('div');
              container.appendChild(square)
              square.style.backgroundColor = inputColor.value;
            }
          } break;
        } 
    }
});
// ##Random color button, that when you click it, it iterates over each childnode of container and adds-
// mouseover listener to each child that updates background with random colors for each child.
randomColorBtn.addEventListener('click', function() {
    container.childNodes.forEach((child) => child.addEventListener('mouseover', (e) => {
      child.style.backgroundColor = randomColors();
    }))
});
// ##Input color, when you choose color it iterates over each childnode of container and adds-
// mouseover listener to each child that updates each child with backgroundcolor you chose in input.
inputColor.addEventListener('input', function() {
  container.childNodes.forEach((child) => child.addEventListener('mouseover', () => {
    child.style.backgroundColor = inputColor.value;
  }))
});
// ##Reset button, when you click it, it activates the reset function which resets container.innerHtml-
// inputColor.value, inputRange.value and text of spans for input range numbers. Also it resets container-
// to default grid style 16 x 16 with for loop function and style.
resetBtn.addEventListener('click', function() {
  resetFunc()
  container.style.gridTemplateColumns = 'repeat(16, 1fr)';
  container.style.gridTemplateRows = 'repeat(16, 1fr)';
  resetToDefaultLoop()
});
// ##Function for resetting the grid back to default size, 16 x 16.
function resetToDefaultLoop(){
  for(let i = 0; i < 16 ** 2; i++) {
    const defaultGrid = document.createElement('div');
    container.appendChild(defaultGrid);
    defaultGrid.style.backgroundColor = inputColor.value;
  }
}
// ##Function for resetting the grid to default and input color, input range and input range text.
function resetFunc(){
  container.innerHTML = '';
  inputColor.value = '#e5e5e5';
  inputRange.value = '16'
  for(let spans of span) {
    spans.textContent = inputRange.value;
  }
};
// ##Function for random colors, that is used in random color button.
function randomColors() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

