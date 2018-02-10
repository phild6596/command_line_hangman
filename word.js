var Letter = require('./letter.js');
// Look up how to define class functions in Node, and in general read up about objects/classes 
var Word = function (word) {
    this.wordHolder = [];

    this.addLetters = function () {
        for (i = 0; i < word.length; i++){
            var char = word[i];
            var letterObj = new Letter(char);
            this.wordHolder.push(letterObj);
        }
        // console.log('line 10 :' + this.wordHolder);
        //console.log('Line 11: ' + letterObj);
    };

    this.addLetters();

    this.displayWord = function (guess) {
        var result = '';
        for (i = 0; i < this.wordHolder.length; i++){
            this.wordHolder[i].letterCheck(guess);
            result += this.wordHolder[i].wordCheck();
            //console.log('What is this:' + result);
        } 
        console.log(result);
    }
}
module.exports = Word;
//var phil = new Word('phil');
//var sam  = new Word('l');
//phil.addLetters(); 
//phil.displayWord('p');
//phil.displayWord('l');
//sam.addLetters();
//var testTwo = new Word('ant');
//var testThree = new Word('turtle');
// Copy and paste work, or start typing.
//"" + "h" = "h"
//"h" + "e" + "l" = "hel"
//Word("hello");
