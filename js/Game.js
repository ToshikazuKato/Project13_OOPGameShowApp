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
      //this.activePhrase.wordArray.forEach((activePhraseVal, activePhraseIndex) => {
        //console.log('activePhraseVal is '+activePhraseVal);
        //console.log(this.activePhrase.wordArray.includes(selectedLetter));
        if (this.activePhrase.wordArray.includes(selectedLetter)) {
          //correct
          findKey('chosen');
          this.activePhrase.showMatchedLetter(selectedLetter);
          let gameResult;
          gameResult = this.checkForWin();
          if(gameResult === true){
            //win
            this.gameOver(true);
          }
        }else{
          //wrong
          findKey('wrong');
          this.removeLife();
        }
      //}); //this.activePhrase.wordArray

    }

    removeLife() {
      const heart = document.querySelectorAll('.tries img');
      this.missed < 4 ? heart[this.missed].src = 'images/lostHeart.png' : this.gameOver(false);
      this.missed += 1;
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

    resetGame() {
      //phrase section
      const ul = document.querySelector('#phrase ul');
      //console.log(ul.innerHTML);
      ul.innerHTML = '';

      //keyboard section
      const wrong = Array.from(document.getElementsByClassName('wrong'));
      wrong.forEach(val => {
        val.classList.remove('wrong');
      });
      const chosen = Array.from(document.getElementsByClassName('chosen'));
      chosen.forEach(val => {
        val.classList.remove('chosen');
      });

      //heart section
      const heart = Array.from(document.querySelectorAll('.tries img'));
      heart.forEach( val => {
        val.src = 'images/liveHeart.png';
      });

    }

 }// Game class
