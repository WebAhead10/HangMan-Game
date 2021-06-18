/* declearing variables  */
var wordsBank = ["academic", "dog","athletic", "camping", "conflict", "electric", "innocent", "language",
"positive", "tactical", "workshop","sting","bee","milk", "various", "feather", "purple", "thin", "island", "knife","travel",
"base","worm","haircut","rain","daughter","change","finger","exchange","fight"];
var HintBank = ["Relating to education and scholarship.", "Best friend for life","Someone who likes to do sport", "Living In the wild",
"a serious disagreement or argument, typically a protracted one", "SomeThing that ZAP's", "A baby feature", "How Do we comunicate?","+",
"relating to or constituting actions carefully planned to gain a specific military end", "Mario: So now please Start working on this ____.",
"Its just a bee what can can it do to you? MAN UP","A striped bug","Moooo", "more than one", "Its not like you have a ___ on your head !!","it may be a color,or not! ",
"Narrow","Trapped by water from all angles", "Don't cut your self with that","Every one's hobby Pretty much","the lowest part or edge of something",
"Man i love fishing! did you bring the BAIT???","20₪ for men, 1500₪ for wemen","The best thing in winter","A reason to get married",
"make (someone or something) different","You have 20 of them.","An act of giving one thing and receiving another (especially of the same type or value) in return",
"Take part in a violent struggle involving the exchange of physical blows or the use of weapons."];
var randomWordIndex = Math.floor(Math.random() * wordsBank.length);
var word = wordsBank[randomWordIndex]; // randomly select a word from the wordBank array of words
let mistakes = 0;
let corrects = 0;
let allLetters = "abcdefghijklmnopqrstuvwxyz";
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
let HintT = document.getElementById("hintText");
document.getElementById("number").textContent = word.length+"";
document.getElementById("opp").textContent = 7-mistakes+"";


for (let L = 0; L < word.length; L++) {
    var newDiv = document.createElement('div');
    newDiv.textContent = "_";
    newDiv.classList = 'unKnown';
    wordp.appendChild(newDiv);
}

for (let a = 0; a < allLetters.length; a++) {
    var newDiv = document.createElement('div');
    newDiv.textContent = allLetters[a].toUpperCase();
    lettersP.appendChild(newDiv);
    newDiv.classList = 'let';
}
// adding  hint button 
var HintDiv = document.createElement('div');
HintDiv.textContent = '?';
lettersP.appendChild(HintDiv);
HintDiv.classList = 'hintButton';
HintDiv.addEventListener('mouseenter',function getHint(){
    
        // add a hint text from the hint array for each word
        HintT.textContent = HintBank[randomWordIndex];

        // remove the hint after 3 seconds
        setTimeout(function() {
            HintT.textContent = "";
    }, 3000);
}, false);


/* Loop that Checks if a letter is selected*/
for (let i = 0; i < lettersP.childNodes.length-1; i++) {
    const child = lettersP.childNodes[i];
    child.addEventListener('click', function check() {
        let cor = false;
        if (child.className === 'let' && mistakes < 7)// if the letter still unselected and the player hasn't lost yet 
        {
            for (let j = 0; j < word.length; j++) { // checking every letter in the selected word, and checks if any of it is equivalent to the selected letter.
                if (word[j] === child.textContent.toLowerCase()) {
                    wordp.children[j].className = 'Known';
                    wordp.children[j].textContent = word[j].toLocaleUpperCase();
                    child.className = 'correct';
                    cor = true;
                    corrects++;
                 
                }
            }


            if (!cor && corrects < 7) { // if the selected letter is wrong but the player havent lost yet
                child.className = 'wrong';
                mistakes++;
                mainimage.src = images[mistakes];
                document.getElementById("opp").textContent = 7-mistakes+"";
            }
            if (corrects === word.length) // win 
            {
                mainimage.src = 'https://www.pngitem.com/pimgs/m/41-416521_left-troll-face-rage-meme-troll-face-hd.png';
            }
        }

    });
}


