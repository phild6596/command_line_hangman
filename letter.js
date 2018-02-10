const Letter = function (letter) {
    this.letter = letter;
    this.appear = false;
    this.wordCheck = function () {
        if (this.appear === true) {
            return this.letter;
        } else {
            return '_';
        }
    };
    this.letterCheck = function (guess) {
        if (this.letter === guess) {
            this.appear = true;
        }
    };
    console.log(this.letter);
};
//var testOne = new Letter('d');
//var testTwo = new Letter('o');
//var testThree = new Letter ('g');
//testOne.letterCheck('d');
module.exports = Letter;

