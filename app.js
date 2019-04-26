//global variables

const colorPicker = document.querySelector('#color-picker');
const colorPickerWrapper = document.querySelector('#color-picker-wrapper');
const countButton = document.querySelector('#count-button');
const countField = document.querySelector('#count-field');
const sketchContainer = document.querySelector('#sketch-container');
const countBtn = document.querySelector('#count-btn');
const drawBtn = document.querySelector('#draw-btn');
const eraseBtn = document.querySelector('#erase-btn');
let colorValue = colorPicker.value;

//Styling color picker
colorPicker.onchange = function() {
  colorPickerWrapper.style.backgroundColor = colorPicker.value;
  colorValue = colorPicker.value;
}
colorPickerWrapper.style.backgroundColor = colorPicker.value;



//draw-erase style toggle

drawBtn.addEventListener('click', function(){
  drawBtn.classList.add('highlighted');
  eraseBtn.classList.remove('highlighted');
})

eraseBtn.addEventListener('click', function(){
  eraseBtn.classList.add('highlighted');
  drawBtn.classList.remove('highlighted');
})

//Create canvas

countBtn.addEventListener('click', function() {
  console.log('hello');
  createCanvas();
});

function createCanvas() {
  //Block creation
  let sketchBoardArr = [];
  let countValue = countField.value;
  
  if (countValue > 60) {
    countValue = 60;
    countField.value = 60;
  } else if (countValue < 3) {
    countValue = 3;
    countField.value = 3;
  }
  
  let calcWidth = `${100 / countField.value}%`; 
  let countValueSqr = countValue * countValue;  
  
  sketchContainer.classList.add('reset');
  
  while(sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }
  
  for(i = 0; i < countValueSqr; i++) {
    sketchBoardArr[i] = document.createElement('div');
  };

  //Set block attributes

  sketchBoardArr.map(square => {
    square.classList.add('pxl-block')
    square.setAttribute('style', 'width:' + calcWidth)
 });

  //Append blocks to DOM

  sketchBoardArr.map(sqr => {
    sketchContainer.appendChild(sqr);
  });
  
  const pxlBlocks = document.querySelectorAll('.pxl-block');
  const pxlBlocksArr = Array.from(pxlBlocks);
  
  
  setTimeout(function() {
    sketchContainer.classList.remove('reset')
  }, 200);
  
  //Block painting
  
  pxlBlocksArr.map(block => {
  block.addEventListener('mousedown', function(e) {
    if (document.querySelector('#draw-radio').checked) {
      e.target.style.background = colorValue;
    } else {
      e.target.style.background = 'white';
    }
  })
});

  pxlBlocksArr.map(block => {
  block.addEventListener('mouseover', function(e) {
    if (e.buttons == 1) {
      if (document.querySelector('#draw-radio').checked) {
        e.target.style.background = colorValue;
    } else {
        e.target.style.background = 'white';
    }
    }
  })
});
}




createCanvas();