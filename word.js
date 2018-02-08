var inquirer = require("inquirer");
var Letter = require('./letter.js');
console.log(Letter);

const WordArray = [];


const GameWords = function ChosenWords() {
    const wordList = [
        'Luke Skywalker',
        'Darth Vader',
        'Death Star',
        'Princess Leia',
        'Chewbacca',
        'Jedi',
        'Sith',
        'Lightsaber',
        'Force',
    ];
    const randNum = Math.floor(Math.random() * wordList.length);
    gameWord = wordList[randNum];
    WordArray.push(gameWord);
}
GameWords();
console.log(WordArray);

module.exports = {
    GameWords: GameWords,
    WordArray: WordArray
};
//console.log(wordList);

