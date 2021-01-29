
function generateColour() {
 return '#' + Math.floor( Math.random()*1000000);
} 

let block = document.getElementById("block_style");

function randomcolour(){
  return document.getElementById("block_style").style.background = generateColour() ;
}

block.addEventListener('mousemove', randomcolour);


let secondblock = document.getElementById("second_block_style");

function newColour(min,max) {
  let newColorOnInterval = Math.floor(Math.random()*(max-min)) + min;
  return newColorOnInterval;
}

function secondrandomColor() {
  return 'rgb(' + newColour(0,255) + ', ' + newColour(0,255) + ', ' + newColour(0,255) +  ')';
}

function randomRGBcolour(){
  return document.getElementById("second_block_style").style.background = secondrandomColor() ;
}

secondblock.addEventListener('mousemove', randomRGBcolour);