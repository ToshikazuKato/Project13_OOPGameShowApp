/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //let wordArray = [];

 class Phrase {
   constructor (phrase) {
      this.phrase = phrase.toLowerCase();
      this.wordArray = [];
   }
   // method
   addPhraseToDisplay() {
     const ul = document.querySelector('#phrase ul');
     this.wordArray = [...this.phrase];
     let liHTML;
     for(let word in this.wordArray){
       if(this.wordArray[word] === ' '){
         liHTML = `<li class="space"> </li>`;
       }else{
         liHTML = `<li class="hide letter ${this.wordArray[word]}">${this.wordArray[word]}</li>`;
       }
       ul.innerHTML += liHTML;
     }
   }

   checkLetter(letter) {
     return this.wordArray.includes(letter);
   }

   showMatchedLetter(matchedLetter) {
     const letter = document.getElementsByClassName(`${matchedLetter}`);
     
     for (var i = 0; i < letter.length; i++) {
       letter[i].classList.replace('hide','show');
     }
   }

 } //Phrase class

const test = new Phrase('a bcA BS ');
// console.log(test.wordArray);
 console.log(test.addPhraseToDisplay());
// console.log(test.wordArray);
// console.log(test.checkLetter('a'));
// console.log(test.checkLetter('d'));
console.log(test.showMatchedLetter('a'));