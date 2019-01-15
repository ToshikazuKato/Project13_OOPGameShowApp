/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 const gameObj = new Game();
 //start button trigger
 const startBtn = document.getElementById('btn__reset');
 startBtn.addEventListener('click', event => {
   gameObj.resetGame();
   gameObj.startGame();
 });

 const keys = Array.from(document.getElementsByClassName('key'));

 //keyboard button trigger
 keys.forEach( (keysVal, keysIndex) => {
   keysVal.addEventListener('click', event => {
     gameObj.handleInteraction(event.target.innerHTML);
   });
 });

 //keyboard button trigger
 const regex = /[a-z]/;
 const overlay = document.getElementById('overlay');

 document.addEventListener('keydown', e => {

   //start game with Enter key
   if(overlay.style.display != 'none' && e.key === 'Enter'){
       gameObj.resetGame();
       gameObj.startGame();
   }

   //only letter
   if(regex.test(e.key) && e.key.length === 1){
     gameObj.handleInteraction(e.key);
   }


 });
