console.log('Welcome to the musical world of Pokemon')

//Target
let pokemonSprites = document.querySelectorAll ('#Pokemon div');
let ballSprites = document.querySelectorAll ('#row1 img');
let ballSprites2 = document.querySelectorAll ('#row2 img');

//Action
function LogID (){
    console.log('Pokemon:', this.id);
}

function LogID2 (){
    console.log('Pokeball:', this.id);
}

//Reaction
pokemonSprites.forEach(sprite => sprite.addEventListener('click', LogID));
ballSprites.forEach(ball => ball.addEventListener('click', LogID2));
ballSprites2.forEach(ball => ball.addEventListener('click', LogID2));