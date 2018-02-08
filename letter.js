const Letter = function (letter) {
    this.letter = letter;
    this.appear = false;

    this.toString = function () {
        if (this.appear) {
            return this.letter;
        } else {
            return '_';
        }
    }
    this.letterCheck = function (letterGuessed) {
        if (letterGuessed == this.letter) {
            this.appear = true;
        }
    }
    console.log(this.letter);
}
var testing = new Letter('b');
module.exports = Letter;