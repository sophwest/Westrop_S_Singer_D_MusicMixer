console.log('Welcome to the musical world of Pokemon')

//Target
let pokemonSprites = document.querySelectorAll ('#pokemon div img');
let ballSprites = document.querySelectorAll ('#row1 svg');
let ballSprites2 = document.querySelectorAll ('#row2 svg');
let allBalls = document.querySelectorAll('.ball');
let allPokemon = document.querySelectorAll ('.pokemon');
let dragBall = document.querySelectorAll ('.draggable');
let playButton = document.querySelector("#play-button");
let pauseButton = document.querySelector("#pause-button");
let draggedBall="";
let allAudio = [];

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
    allAudio.push(audioClip)
    audioClip.currentTime = 0;
    audioClip.play();
    targetDiv.classList.add('playing');
}

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
    debugger;
    if (this.classList.contains('active')) {
        return; // do nothing if already active
    }
    this.classList.add('active');
    console.log ('Dropped on me');
    findMatchingAudio();
    // movePokemon();
    changeBGI(e.currentTarget);
    moveBall();
    changePokemon(e.target);
}

function playTrack() {
    allAudio.forEach(audio => {audio.play();});
}

function pauseTrack() {
    let audioClips = document.querySelectorAll(`audio`);
    audioClips.forEach(audioClip => {
      targetDiv = document.querySelector(`div[data-key="${audioClip.dataset.key}"]`);
      audioClip.pause();
    });
  }

  function changeBGI(el) {
    el.style.backgroundImage = `url(images/${draggedBall.id}-full.svg)`;
    el.style.backgroundColor = 'transparent';
    el.style.backgroundPosition = 'center';
  }

  function moveBall() {
    const dropZone = document.querySelector('.dropzone');
    dropZone.appendChild(draggedBall);
  }

  function changePokemon(el) {
    debugger;
    el.src = `images/drawing-${el.id}.svg`;
  }

//Reaction
pokemonSprites.forEach(sprite => sprite.addEventListener('click', LogID));
ballSprites.forEach(ball => ball.addEventListener('click', LogID2));
ballSprites2.forEach(ball => ball.addEventListener('click', LogID2));
dragBall.forEach(ball => ball.addEventListener('dragstart', DragID));
window.addEventListener('drop', findMatchingAudio);
allBalls.forEach(svg => svg.addEventListener('transitionend', resetSvgs));
allPokemon.forEach (div => div.addEventListener ('dragover', handleDragOver));
allPokemon.forEach (div => div.addEventListener ('drop', handleDrop));
playButton.addEventListener('click', playTrack);
pauseButton.addEventListener('click', pauseTrack);