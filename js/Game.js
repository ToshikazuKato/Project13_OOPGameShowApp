/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
  class Game {
    constructor(){
      this.missed = 0 ;
      this.phrases = [
        'Bohemian Rhapsody',
        'Champagne Supernova',
        'Killer Queen',
        'Wonderwall',
        'Live Forever',
      ];
      this.activePhrase = null ;
    }// constructor

    //methods
    startGame() {
      //hides the start screen overlay
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
      //get a random phrase
      const chosenPhrase = this.getRandomPhrase();
      //create Phrase object based on a random phrase
      this.activePhrase = new Phrase(chosenPhrase);
      this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
      const random = this.phrases[Math.floor(Math.random()*this.phrases.length)];
      return random;
    }

    handleInteraction(selectedLetter) {

      function findKey (className){
        const keys = Array.from(document.getElementsByClassName('key'));
        keys.forEach( (keysVal, keysIndex) => {
          if (keysVal.innerHTML === selectedLetter) {
            keysVal.setAttribute('disabled', 'disabled');
            keysVal.classList.add(className);
          }

        }); //keys.forEach
      }

      //Disable the selected letter’s onscreen keyboard button.
      this.activePhrase.wordArray.forEach((activePhraseVal, activePhraseIndex) => {
        if (activePhraseVal === selectedLetter) {
          //correct
          findKey('chosen');
          this.activePhrase.showMatchedLetter();
          let gameResult;
          gameResult = this.checkForWin();
          console.log(gameResult);
          if(gameResult === true){
            //win
            gameOver(true);
          }
        }else{
          //wrong
          findKey('wrong');
          //this.removeLife();
        }
      }); //this.activePhrase.wordArray

    }

    removeLife() {
      this.missed += 1;
      const heart = document.querySelector('.tries img');
      this.missed < 5 ? heart.src = 'images/lostHeart.png' : this.gameOver(false);
    }

    // check if there's any element having hide class.
    //yes(some letters are stilll hidden) => false, continue game
    //no(all letters are revealed) => true, win
    checkForWin() {
      const letters = document.querySelectorAll('.hide');
      let result;
      letters.length === 0 ? result = true : result = false;
      return result;
    }

    gameOver(result) {
      const overlay = document.getElementById('overlay');
      let resultClass;
      let message

      if (result === true) {
        resultClass = 'win'
        message = 'You win!';
      }else{
        resultClass = 'lose' ;
        message = 'You lose!';
      }

      overlay.classList.replace('start', `${resultClass}`);
      overlay.style.display = 'flex';

      const gameOverMessage = document.getElementById('game-over-message');
      gameOverMessage.innerHTML = message;

    }

 }// Game class

 //debug
 const test = new Game();
  console.log(test.startGame());
 // console.log(test.getRandomPhrase());
 // console.log(test.removeLife());
 // console.log(test.checkForWin());
 //console.log(test.gameOver(true));
 console.log(test.handleInteraction('b'));
