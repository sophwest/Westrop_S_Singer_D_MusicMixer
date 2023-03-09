console.log('Welcome to the musical world of Pokemon')

//Target
let pokemonSprites = document.querySelectorAll ('#pokemon div svg');
let ballSprites = document.querySelectorAll ('#row1 svg');
let ballSprites2 = document.querySelectorAll ('#row2 svg');
let allBalls = document.querySelectorAll('.ball');
let allPokemon = document.querySelectorAll ('.pokemon')

//Action
function LogID (){
    console.log('Pokemon:', this.id);
}

function LogID2 (){
    console.log('Pokeball:', this.id);
}

function findMatchingAudio(event) {
    let audioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`), 
    targetSvg = document.querySelector(`svg[data-key="${event.keyCode}"]`);

    if (!audioClip) {return;}
    audioClip.currentTime = 0;
    targetSvg.classList.add('playing');
}

function resetSvgs() {
    this.classList.remove('playing');
}

function movePokemon () {
    targetDiv.classList.add('active');
}

function resetDivs () {
    this.classList.remove('active');
}

//Reaction
pokemonSprites.forEach(sprite => sprite.addEventListener('click', LogID));
ballSprites.forEach(ball => ball.addEventListener('click', LogID2));
ballSprites2.forEach(ball => ball.addEventListener('click', LogID2));
window.addEventListener('drop', findMatchingAudio);
allBalls.forEach(svg => svg.addEventListener('transitionend', resetSvgs));
allPokemon.forEach (div => div.addEventListener ('drop', movePokemon));
allPokemon.forEach (div => div.addEventListener ('transitionend', resetDivs))

//From my understanding, I'm targeting the ball class that I added to each svg, and when a drop happens, it will play the music that's attached to each datakey. I also included the playing and active classes.

//The playing class will have the music stored in the ball and activate upon a drop event 

//The active class will be applied to the Pokemon. It will add the class of active when a ball is dropped on them and then CSS will make them shake their groove thang.