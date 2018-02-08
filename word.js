
const gameWords = function ChosenWords() {
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
}
gameWords();
console.log(gameWord);
module.exports = {gameWords: gameWords};
//console.log(wordList);

