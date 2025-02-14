const colors = ["red", "green", "blue", "yellow"];
let colorSequence = [];
let playerSequence = [];
let level = 0;
let score = 0;

const playSound = (color) => {
  const audio = new audio("sounds/${color}.mp3");
  audio.play();
};
/* Funcion que permite reproducir el sonido asignado por color*/

const flashColor = (color) => {
  const button = document.getElementById(color);
  button.style.opacity = "1";
  setTimeout(() => {
    button.style.opacity = "0.7";
  }, 500);
};
/*Funcion que permite que el boton tenga el efecto de que esta 
flasheando cuando lo clickean*/

const checkPlayerSequence = () => {
  for (let i = 0; i < playerSequence.length; i++) {
    if (playerSequence[i] !== colorSequence[i]) {
      alert(
        "Game Over. Te equivocaste, el juego ha terminado, intena nuevamente."
      );
      return false;
    }
  }
  if (playerSequence.length === colorSequence.length) {
    updateScore(level);
    setTimeout(nextLevel, 1000);
  }
  return true;
};
/*Funcion que permite verificar que la secuencia del jugador 
sea igual a la secuencia dada por el juego*/

const nextLevel = () => {
  level++;
  document.getElementById("level").innerText = level;
  playerSequence = [];
  colorSequence.push(colors[Math.floor(Math.random() * 4)]);
  colorSequence.forEach((color, index) => {
    setTimeout(() => {
      flashColor(color);
      playSound(color);
    }, (index + 1) * 1000);
  });
};
/*Funcion que permite que se avance de nivel, agregando un nuevo color a la 
seccioncia que ya estaba y la reproduce de nuevo con el nuevo color*/

document.getElementById("startButton").addEventListener("click", () => {
  colorSequence = [];
  playerSequence = [];
  level = 0;
  score = 0;
  document.getElementById("level").innerText = level;
  document.getElementById("score").innerText = score;
  nextLevel();
});
/*Evento que se activa cuando le dan click al boton de inicio.
Permite que el juego se reinicie*/
