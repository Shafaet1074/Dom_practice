                // GAME FUNCTION:

// - Player must guess a number between a min and max

// - Player gets a certain amount of guesses

// - Notify player of guesses remaining

// - Notify the player of the correct answer if loose

// - Let player choose to play again


              //  CODE START FROM HERE

//initializing values:

let min=1,
    max=10,
    winningNum= getRandomNum(min,max),
    guessLeft =3;

//Grab UI Element

const game = document.querySelector("#game"),
      minNum=document.querySelector(".min"), 
      maxNum=document.querySelector(".max"),
      guessBtn=document.querySelector("#guess-btn"),
      guessInput=document.querySelector("#guess-input")  
      message=document.querySelector('.message')
//Assign min and max value 

  minNum.textContent=min;
  maxNum.textContent=max;

//Add  event listeners while clicking 

guessBtn.addEventListener('click',function(){
  let guess=parseInt(guessInput.value);

if(isNaN(guess) || guess<min || guess>max){
  setMessage(`Please enter a number between ${min} and ${max}`,`red`)
}
if(guess===winningNum){
  gameOver(true,`${winningNum} is correct,YOU WIN!`)
}
else{
  guessLeft-=1;

  if(guessLeft===0){
    gameOver(false,`Game Over,you lost.The correct number${winningNum}`)
  }else{

  guessInput.value =' ';

  setMessage(`${guess} is not correct,${guessLeft} guesses left`,'red');
}
}
});

function gameOver(won,msg){
  let color;
  won===true ?  color ='green' : color='red';

guessInput.disabled=true;
guessInput.style.borderColor=color;
message.style.color=color;
setMessage(msg);

guessBtn.value ='Play Again';
guessBtn.className += 'play-agin';
}

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

function getRandomNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg,color){
  message.style.color =color;
  message.textContent =msg;
}
   

