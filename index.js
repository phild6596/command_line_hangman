var Word = require('./word.js');
var inquirer = require('inquirer');

var listWord;
var guesses = 5;
var wordList = [
    'luke skywalker',
    'darth vader',
    'death star',
    'princess leia',
    'chewbacca',
    'jedi',
    'sith',
    'lightsaber',
    'force',
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
             message: 'Guess a letter',
    }]).then(function (answer) {
        console.log(`Guess a letter: ${answer.guess}`);
        var correct = false;
        listWord.guessWord(answer.guess);
        if (listWord.displayWord().includes(answer.guess)){
            console.log('Correct guess');
            gameFlow();
        } else if (listWord.displayWord().includes('_')) {
            gameFlow();
        }else if (!listWord.displayWord().includes(answer.guess)) {
            guesses--;
            console.log('Incorrect guess');
            gameFlow();
        }
        //conditional statement for win 
        //else if (word chosen === all letters picked){
        //console.log('You Win!');
        //letsPlay();
       // }
    })
    }else {console.log('You lose');}
}

 letsPlay();



