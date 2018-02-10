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
     inquirer
     .prompt([{
         name: 'userName',
         type: 'confirm',
         message: 'Play Star Wars Hangman?'
     }]).then(function (answer) {
         if (answer.userName) {
             console.log('Lets Play');
             chosenWords();
             gameFlow();
         } else {
             console.log('May the force be with you');
             return false;
         }
     })
 }

function gameFlow() {
     if (guesses > 0 ) {
         console.log('Guess a letter');
         inquirer.prompt([{
             name: 'name',
             type: 'input',
             message: 'testing'
    }])
    }
}
 letsPlay();
console.log(WordArray);


