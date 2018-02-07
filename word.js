
function ChosenWords() {
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
    console.log(gameWord);
}
ChosenWords();
console.log('line 29: ' + gameWord);

//console.log(wordList);

