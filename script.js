/* declearing variables  */ 
var wordsBank = ["academic" ,"athletic", "camping", "conflict", "electric", "innocent", "language", "positive", "tactical", "workshop"]

var word = wordsBank[Math.floor(Math.random() * wordsBank.length)]; // randomly select a word from the wordBank array of words
let mistakes =0; 
let corrects = 0;
var images = ['https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-1.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-2.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-3.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-4.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-5.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-6.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-hung.png',
'https://www.pngkit.com/png/full/967-9670677_game-over-monochrome.png'];

let mainimage = document.getElementById('mainPicture');
let wordPuzzle = document.getElementById('wordPuzzle');
let lettersP = document.getElementById("letters");
let wordp = document.getElementById("word");

/* Loop that Checks if a letter is selected*/
for (let i = 0; i < lettersP.childNodes.length; i++) { 
    const child = lettersP.childNodes[i];
   
    child.addEventListener('click',function check(){
        let cor = false;
        if(child.className === 'let' && mistakes < 7)// if the letter still unselected and the player hasn't lost yet 
        {
            for (let j = 0; j < word.length; j++) { // checking every letter in the selected word, and checks if any of it is equivalent to the selected letter.
                if(word[j]===child.textContent.toLowerCase()){
                    wordp.children[j].className = 'Known';
                    wordp.children[j].textContent = word[j].toLocaleUpperCase();
                    child.className = 'correct';
                    cor = true;
                    corrects++;
                }
            }
        

            if(!cor && corrects < 7){ // if the selected letter is wrong but the player havent lost yet
                child.className = 'wrong';
                mistakes++; 
                mainimage.src = images[mistakes];
            }
            if(corrects===8) // win 
            {
                mainimage.src = 'https://www.pngitem.com/pimgs/m/41-416521_left-troll-face-rage-meme-troll-face-hd.png';
            }
        }

    });
}


