/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 const gameObj = new Game();
 const startBtn = document.getElementById('btn__reset');
 startBtn.addEventListener('click', event => {
   gameObj.resetGame();
   gameObj.startGame();

 });

 const keys = Array.from(document.getElementsByClassName('key'));
 keys.forEach( (keysVal, keysIndex) => {

   keysVal.addEventListener('click', event => {
     //console.log(event.target.innerHTML);
     gameObj.handleInteraction(event.target.innerHTML);
   });

 }); //keys.forEach
