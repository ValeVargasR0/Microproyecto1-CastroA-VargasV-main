const colors = ["red", "green", "blue", "yellow"];
let colorSequence = [];
let playerSequence = [];
let level = 0;
let score = 0; 

const checkPlayerSequence = () => { 
    for (let i=0; i < playerSequence.length; i++) {
        if(playerSequence[i] !== colorSequence[i]) {
            alert("Game Over. Te equivocaste, el juego ha terminado, intena nuevamente.");
            return false;
        }
    }
    if (playerSequence.length === colorSequence.length) {
        updateScore(level);
        setTimeout(nextLevel, 1000);
    }
    return true;
};
