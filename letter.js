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
            return true;
        }
        return false;
    };
    console.log(this.letter);
};

module.exports = Letter;

