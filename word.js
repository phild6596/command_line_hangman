var Letter = require('./letter.js');

var Word = function (word) {
    this.wordHolder = [];

    this.addLetters = function () {
        for (i = 0; i < word.length; i++){
            var char = word[i];
            var letterObj = new Letter(char);
            this.wordHolder.push(letterObj);
        }
    };

    this.addLetters();

    this.displayWord = function () {
        var result = '';
        for (i = 0; i < this.wordHolder.length; i++){
            result += this.wordHolder[i].wordCheck();
        } 
        console.log(result);
        return result;
    }

    this.guessWord = function (guess) {
        for ( i = 0; i < this.wordHolder.length; i++) {
            this.wordHolder[i].letterCheck(guess);
        }
    }
}
module.exports = Word;
