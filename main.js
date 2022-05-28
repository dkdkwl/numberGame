
let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chancesArea = document.getElementById("chances-Area");
let chances = 5;
let gameOver = false;


playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);


function pickRandomNum(){
  computerNum = Math.floor(Math.random() * 100) +1 ;  
  console.log(computerNum)
}

function play(){
  let userValue = userInput.value;

  chances --;

  chancesArea.textContent = `남은기회 : ${chances} 번`;


  if(userValue < computerNum){
    resultArea.textContent = "UP!!";
  }else if(userValue > computerNum){
    resultArea.textContent = "DOWN";
  }else{
    resultArea.textContent = "맞췄습니다";
  }

  if(chances < 1){
    gameOver = true;
  }

  if(gameOver == true){
    playButton.disabled = true;
  }

  console.log("chances",chances)


}

function reset() {
// user input 창이 깨끗하게 정리되고  
  userInput.value =""
  // 새로운 번호가 생성되고
  pickRandomNum();
  resultArea.textContent = "결과값이 여기 나옵니다";
}

pickRandomNum();