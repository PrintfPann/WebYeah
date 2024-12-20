let RockButton = document.querySelector('#Rock');
let PaperButton = document.querySelector('#Paper');
let ScissorsButton = document.querySelector('#Scissors');
let player;
bot=Math.floor(Math.random()*3);
RockButton.addEventListener('click', ()=>{player=0;
    if(bot==0 && player==0){
        pTag.innerHTML="Draw! | Player: Rock | Bot: Rock";
    }
    else if(bot==1 && player==0){
        pTag.innerHTML="You Lose! | Player: Rock | Bot: Paper";
    }
    else{
        pTag.innerHTML="You Win! | Player: Rock | Bot: Scissors";
    }
    bot=Math.floor(Math.random()*3);
});
PaperButton.addEventListener('click', ()=>{player=1
    if(bot==0 && player==1){
        pTag.innerHTML="You Win! | Player: Paper | Bot: Rock";
    }
    else if(bot==1 && player==1){
        pTag.innerHTML="Draw! | Player: Paper | Bot: Paper";
    }
    else{
        pTag.innerHTML="You Lose! | player: Paper | Bot: Scissors";
    }
    bot=Math.floor(Math.random()*3);
});
ScissorsButton.addEventListener('click', ()=>{player=2
    if(bot==0 && player==2){
        pTag.innerHTML="You Lose! | Player: Scissors | Bot: Rock";
    }
    else if(bot==1 && player==2){
        pTag.innerHTML="You Win! | Player: Scissors | Bot: Paper";
    }
    else{
        pTag.innerHTML="Draw! | Player: Scissors | Bot: Scissors";
    }
    bot=Math.floor(Math.random()*3);
});

let pTag = document.querySelector("p")