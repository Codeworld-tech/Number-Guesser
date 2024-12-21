let paral = document.querySelector(".Para");
let InpVal = document.querySelector(".Inp");
let SubBtn = document.querySelector(".Submitbtn");
let RestartBtn = document.querySelector(".Restart");

let NumberGenerate = Math.floor(Math.random()*20 +1);
let lifes = 3;

 function UpdateHearts(){
   let heart = document.querySelector(".hearts")
   heart.innerText = '♥'.repeat(lifes) + '♡'.repeat(3 - lifes);
 }

 function DisplayMessage(message , classname){
            paral.textContent = message;
            paral.className = `Para ${classname}`;
 }

 function restartGame() {
    NumberGenerate = Math.floor(Math.random()*20 + 1);
    lifes = 3;
    UpdateHearts();
    DisplayMessage('Guess a number between 1 and 20!');
    InpVal.disabled = false;
    SubBtn.classList.remove("Sub");
    RestartBtn.classList.add("Btn");
    InpVal.value = '';
}

 function ChecKing(){
    let Num = Number (InpVal.value);
    
    
    if(!Num || Num < 1 || Num > 20){
        DisplayMessage('Enter a Valid Number between 1 to 20');
        return;
    }
    if(Num === NumberGenerate){
        DisplayMessage('Congratulation! The number was ' + NumberGenerate, 'win' );
        endGame();
    }else{
        lifes--;
        if(lifes > 0){
            DisplayMessage(Num > NumberGenerate ? 'You high! Try again.':'You Low! Try again.');
            UpdateHearts();
        }else{
            DisplayMessage('Game Over! The number was ' + NumberGenerate, 'game_over');
            endGame();
        }
        
    }
    InpVal.value = "";
 }
 
 function endGame() {
    InpVal.disabled = true;
    SubBtn.classList.add("Sub");
    RestartBtn.classList.remove("Btn");
    
 }
UpdateHearts();


