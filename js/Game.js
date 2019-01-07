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

    handleInteraction(letter) {

    }

    removeLife() {
      this.missed += 1;
      const heart = document.querySelector('.tries img');
      this.missed < 5 ? heart.src = 'images/lostHeart.png' : this.gameOver();
    }
    // check if there's any element having hide class.
    //yes(some letters are stilll hidden) => false,
    //no(all letters are revealed) => true
    checkForWin() {
      const letters = document.querySelectorAll('.hide');
      let result;
      letters.length === 0 ? result = true : result = false;
      return result;
    }

    gameOver() {

    }

 }// Game class

 //debug
 // const test = new Game();
 // console.log(test.startGame());
 // console.log(test.getRandomPhrase());
 // console.log(test.removeLife());
 // console.log(test.checkForWin());
