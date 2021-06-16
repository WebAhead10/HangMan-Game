var word = 'accepted';
let mistakes =0; 
var images = ['https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-1.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-2.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-3.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-4.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-5.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-6.png',
'https://www.gamehangman.com/sites/all/modules/hangman/images/Hangman-hung.png'];
let mainimage = document.getElementById('mainPicture');

let lettersP = document.getElementById("letters");
let wordp = document.getElementById("word");

for (let i = 0; i < lettersP.childNodes.length; i++) {
    const child = lettersP.childNodes[i];
    let cor = false;
    child.addEventListener('click',function check(){

        for (let j = 0; j < word.length; j++) {
            if(word[j]===child.textContent.toLowerCase()){
                console.log(wordp.childNodes);
                wordp.children[j].className = 'Known';
                wordp.children[j].textContent = word[j].toLocaleUpperCase();
                child.className = 'correct';
                cor = true;
            }
        }
        if(!cor && mistakes>7)
        {
            
        }
        if(!cor)
        {
            child.className = 'wrong';
            mistakes++; 
            mainimage.src = images[mistakes];

        }
    });
}