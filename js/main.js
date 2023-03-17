console.log('Welcome to the musical world of Pokemon')

//Target
let pokemonSprites = document.querySelectorAll ('#pokemon div svg');
let ballSprites = document.querySelectorAll ('#row1 svg');
let ballSprites2 = document.querySelectorAll ('#row2 svg');
let allBalls = document.querySelectorAll('.ball');
let allPokemon = document.querySelectorAll ('.pokemon');
let dragBall = document.querySelectorAll ('.draggable');
let playButton = document.querySelector("#play-button");
let pauseButton = document.querySelector("#pause-button");
// let resetButton = document.querySelector("#reset-button");
let draggedBall;

//Action
function LogID (){
    console.log('Pokemon:', this.id);
}

function LogID2 (){
    console.log('Pokeball:', this.id);
}

function findMatchingAudio(event) {
    let audioClip = document.querySelector(`audio[data-key="${draggedBall.dataset.key}"]`), 
    targetDiv = document.querySelector(`div[data-key="${draggedBall.dataset.key}"]`);
    if (!audioClip) {return;}
    audioClip.currentTime = 0;
    audioClip.play();
    targetDiv.classList.add('playing');
}

// function movePokemon() {
//     targetDiv = document.querySelector(`svg[data-key="${event.keyCode}"]`);
//     targetDiv.classList.add('active');
// }

// function resetDivs() {
//     this.classList.remove('active');
// }

function resetSvgs() {
    this.classList.remove('playing');
}

function DragID(){
    console.log('Drag');
    draggedBall = this;
}

function handleDragOver(e){
    e.preventDefault();
    console.log('Dragging over me');
}

function handleDrop(e){
    e.preventDefault();
    console.log ('Dropped on me');
    findMatchingAudio();
}

function playTrack() {
    let audioClip = document.querySelector(`audio[data-key="${draggedBall.dataset.key}"]`), 
    targetDiv = document.querySelector(`div[data-key="${draggedBall.dataset.key}"]`);
    audioClip.play();
}

function pauseTrack() {
    let audioClip = document.querySelector(`audio[data-key="${draggedBall.dataset.key}"]`), 
    targetDiv = document.querySelector(`div[data-key="${draggedBall.dataset.key}"]`);
    audioClip.pause();
}

// function rewindTrack() {
//     let audioClip = document.querySelectorAll('audio[data-key]')[0], 
//     targetDiv = document.querySelectorAll('div[data-key]')[0];
//     audioClip.currentTime = 0;
// }

//Reaction
pokemonSprites.forEach(sprite => sprite.addEventListener('click', LogID));
ballSprites.forEach(ball => ball.addEventListener('click', LogID2));
ballSprites2.forEach(ball => ball.addEventListener('click', LogID2));
dragBall.forEach(ball => ball.addEventListener('dragstart', DragID));
window.addEventListener('drop', findMatchingAudio);
allBalls.forEach(svg => svg.addEventListener('transitionend', resetSvgs));
// allPokemon.forEach (div => div.addEventListener ('drop', movePokemon));
// allPokemon.forEach (div => div.addEventListener ('transitionend', resetDivs));
allPokemon.forEach (div => div.addEventListener ('dragover', handleDragOver));
allPokemon.forEach (div => div.addEventListener ('drop', handleDrop));
playButton.addEventListener('click', playTrack);
pauseButton.addEventListener('click', pauseTrack);
// resetButton.addEventListener('click', rewindTrack);

//From my understanding, I'm targeting the ball class that I added to each svg, and when a drop happens, it will play the music that's attached to each datakey. I also included the playing and active classes.

//The playing class will have the music stored in the ball and activate upon a drop event 

//The active class will be applied to the Pokemon. It will add the class of active when a ball is dropped on them and then CSS will make them shake their groove thang.

//console.log('Welcome to the musical world of Pokemon')

//Target
//let pokemonSprites = document.querySelectorAll('#pokemon div');
//let ballSprites = document.querySelectorAll('#row1 svg');
//let ballSprites2 = document.querySelectorAll('#row2 svg');
//let allBalls = document.querySelectorAll('.ball');
//let allPokemon = document.querySelectorAll('.pokemon')
//let draggedBall = null;
//let mudkipPlay = document.querySelector('#mudkip-div');
//let raltsPlay = document.querySelector('#ralts-div');
//let jirachiPlay = document.querySelector('#jirachi-div');
//let skittyPlay = document.querySelector('#skitty-div');

//Action
//function LogID() {
//  console.log('Pokemon:', this.id);
//}

// function LogID2() {
//   console.log('Pokeball:', this.id);
// }

// function findMatchingAudio(event) {
//   let audioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`),
//     targetSvg = document.querySelector(`svg[data-key="${event.keyCode}"]`);

//   if (!audioClip) {
//     return;
//   }
//   audioClip.currentTime = 0;
//   targetSvg.classList.add('playing');
// }

// function resetSvgs() {
//   this.classList.remove('playing');
// }

// function movePokemon(event) {
//   let targetDiv = event.target;
//   targetDiv.classList.add('active');
// }

// function resetDivs() {
//   this.classList.remove('active');
// }

// function handleStartDrag() {
//     draggedBall = this.parentElement;
//     console.log ('Dragging')
//   }
  

// function handleDrop(event) {
//   event.preventDefault();
//   let ballId = draggedBall.id;
//   let audioClip = document.querySelector(`audio[data-key="${ballId}"]`);
//   audioClip.currentTime = 0;
//   audioClip.play();
//   draggedBall.classList.remove('active');
//   this.appendChild(draggedBall);
//   draggedBall = null;
// }

// function handleDragEnter(event) {
//   event.preventDefault();
//   this.classList.add('active');
// }

// function handleDragLeave() {
//   this.classList.remove('active');
// }

// function handleDragOver(event) {
//   event.preventDefault();
// }
  
  

// function handleDrag() {
//   console.log('Drag!')
// }

// function handleDragEnd() {
//   console.log('Drag End')
// }

// //Reaction
// pokemonSprites.forEach(sprite => sprite.addEventListener('click', LogID));
// ballSprites.forEach(ball => ball.addEventListener('click', LogID2));
// ballSprites2.forEach(ball => ball.addEventListener('click', LogID2));
// allPokemon.forEach(div => div.addEventListener('dragenter', handleDragEnter));
// allBalls.forEach(svg => svg.addEventListener('transitionend', resetSvgs));
// allBalls.forEach(svg => svg.addEventListener('dragstart', handleStartDrag));
// allBalls.forEach(svg => svg.addEventListener('drag', handleDrag));
// allBalls.forEach(svg => svg.addEventListener('dragend', handleDragEnd));
// allBalls.forEach(svg => svg.addEventListener('dragover', handleDragOver));
// window.addEventListener('drop', handleDrop);
// allPokemon.forEach(div => div.addEventListener('transitionend', resetDivs));
// mudkipPlay.addEventListener('dragover', handleDragOver);
// raltsPlay.addEventListener('dragover', handleDragOver);
// jirachiPlay.addEventListener('dragover', handleDragOver);
// skittyPlay.addEventListener('dragover', handleDragOver);
// mudkipPlay.addEventListener('drop', handleDrop);
// raltsPlay.addEventListener('drop', handleDrop);
// jirachiPlay.addEventListener('drop', handleDrop);
// skittyPlay.addEventListener('drop', handleDrop);
// mudkipDiv.addEventListener('dragenter', handleDragEnter);
// raltsDiv.addEventListener('dragenter', handleDragEnter);
// jirachiDiv.addEventListener('dragenter', handleDragEnter);
// skittyDiv.addEventListener('dragenter', handleDragEnter);
// allPokemon.forEach(div => div.addEventListener('drag', findMatchingAudio));

// let audioClip = document.querySelectorAll('audio[data-key]')[this.class], 
//     targetDiv = document.querySelectorAll('div[data-key]')[this.class];

// let audioClip = document.querySelectorAll('audio[data-key + this.class]'), 
//     targetDiv = document.querySelectorAll('div[data-key + this.class]');

// let audioClip = document.querySelectorAll('audio[data-key${this.class}]'), 
//     targetDiv = document.querySelectorAll('div[data-key${this.class}]');

// let audioClip = document.querySelectorAll(`audio[data-key="${event.data-key}"]`); 
//     targetDiv = document.querySelectorAll(`div[data-key="${event.data-key}"]`);

// let audioClip = document.querySelectorAll(`audio[data-key="${event.dataKey}"]`); 
//     targetDiv = document.querySelectorAll(`div[data-key="${event.dataKey}"]`);

// let audioClip = document.querySelectorAll(`audio[data-key="${dataKey}"]`), 
//     targetDiv = document.querySelectorAll(`div[data-key="${dataKey}"]`),

// let audioClip = document.querySelector(`audio[data-key="${event.target.dataset.key}"]`);
// let targetDiv = document.querySelector(`div[data-key="${event.target.dataset.key}"]`);

// let audioClip = document.querySelector(`audio[data-key="${event.target.dataset.key}"]`);
// let targetDiv = document.querySelector(`div.${event.target.className}[data-key="${event.target.dataset.key}"]`);

// const audioClip = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
// const targetDiv = document.querySelector(`div[data-key="${this.dataset.key}"]`);

// let audioClip = document.querySelector('audio[data-key="' + image.dataset.key + '"]'), 
//     targetDiv = document.querySelector('div[data-key="' + image.dataset.key + '"]');
    
// let audioClip = document.querySelector('audio[data-key="' + svg.dataset.key + '"]'); 
// let targetDiv = document.querySelector('div[data-key="' + svg.dataset.key + '"]');

// let audioClip = document.querySelectorAll('audio[data-key]')[${this.dataset.data-key}], 
//targetDiv = document.querySelectorAll('div[data-key]')[${this.dataset.data-key}];

// let audioClip = document.querySelectorAll('audio[data-key${this.dataset.data-key}]'), 
//     targetDiv = document.querySelectorAll('div[data-key${this.dataset.data-key}]');