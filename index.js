var Word = require('./word.js');
var inquirer = require('inquirer');

var listWord;
var guesses = 5;
var wordList = [
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

function chosenWords() {
     randWord = Math.floor(Math.random() * wordList.length);
     word = wordList[randWord];
     listWord = new Word(word);
     return listWord;
}

function letsPlay() {
inquirer.prompt([{
         name: 'userName',
         type: 'confirm',
         message: 'Play Star Wars Hangman?'
     }]).then(function (answer) {
         if (answer.userName) {
             console.log('Lets Play');
             chosenWords();
             gameFlow();
         } else {
             console.log('May the force be with you, goodbye.');
             return false;
         }
     })
 }

function gameFlow() {
     if (guesses > 0 ) {
         console.log('Guess a letter');
         inquirer.prompt([{
             name: 'guess',
             message: 'guess',
    }]).then(function (answer) {
        console.log(`Guess a letter: ${answer.guess}`);
        var correct = false;
        for (var i = 0; i < listWord.wordHolder.length; i++) {
            if (listWord.wordHolder[i].letterCheck(answer.guess)) {
                correct = true;
            } else {
                // decrement lives
            }
            

        }
        
        listWord.displayWord();

        if (listWord.displayWord().includes('_')) {
            gameFlow();
        }

    })
    }
}

 letsPlay();


