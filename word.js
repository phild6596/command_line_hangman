var Letter = require('./letter.js');
// Look up how to define class functions in Node, and in general read up about objects/classes 
const Word = function (word) {
    this.wordHolder = [];
    this.addLetters = function () {
        for (i = 0; i < word.length; i++)
            var character = word[i];
        var letterObj = new Letter(character);
        this.wordHolder.push(letterObj);
    }
    this.addLetters();
    this.displayWord = function () {
        // this is where you're storing all your stuff
        var result = "";
        for (i = 0; i < this.wordHolder.length; i++)
            // you need to add all these letters to your storage
            this.wordHolder[i].toString();
            result += i
            return this.wordHolder;
        // then return your storage at the end
    }
    console.log('This is the word: ' + this.wordHolder);
}


// Copy and paste work, or start typing.
//"" + "h" = "h"
//"h" + "e" + "l" = "hel"
//Word("hello");
