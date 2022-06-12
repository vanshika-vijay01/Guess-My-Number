'use strict';

let score=20;
let secretNumber=Math.trunc(Math.random()*20)+1;
let highScore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener("click",function(){
    const guess=Number(document.querySelector('.guess').value);  //Number is a function which converts string to integer
    console.log(guess);

 
    //If there is no Input

    if(!guess){  //if there is no guess
        displayMessage('No Number!') 
    }

    //Player Wins!
    else if(guess===secretNumber){
        displayMessage('Correct Number!')
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem'

        if(score > highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }

    //when guess is too wrong
    else if(guess!==secretNumber){
        if(score > 1){
            displayMessage(guess>secretNumber?'Too High!':'Too Low!');
            score--;
             document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent=0
        
        }
    }

}); 

document.querySelector('.again').addEventListener("click",function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    displayMessage("start guessing");
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
 
})