// 컴퓨터는 게임이 시작할때 랜덤한 숫자를 뽑는다 ok
// 유저는 숫자를 입력할 수 있다 ok
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다 ok
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다ok
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That's right이라고 뜨고 게임이 종료된다. ok
// 유저는 총 5번의 기회가 있다 ok
// 게임이 종료되면 버튼은 비활성화된다 ok
// 리셋버튼을 누르면 게임이 초기화된다 ok
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다 ok
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다

let computerNum = 0
let userInput = document.getElementById("user-input");
let userEnter = document.getElementById("btn-enter");
let userReset = document.getElementById("btn-reset");
let userText = document.getElementById("content");
let chanceText = document.getElementById("chance-number");
let chance = 5;
let gameOver = false;
let userValueList = [];


userEnter.addEventListener("click",play);
userReset.addEventListener("click",reset);

console.log(computerNum)

function play(){
  let userInput = document.getElementById("user-input").value;

  if(userValueList.includes(userInput)){
    userText.textContent = "같은 숫자를 입력했습니다.";
    return;
  }
  if(userInput < 1 || userInput > 100){
    userText.textContent = "1부터 100사이에 숫자를 입력해주세요";
    return;
  }

  chance --;

  userValueList.push(userInput);
  chanceText.textContent = `남은기회 : ${chance}`;
  if ( userInput < computerNum ){
    userText.textContent = "UP";
    console.log("UP");
  }else if( userInput > computerNum ){
    userText.textContent = "DOWN";
    console.log("DOWN");
  }else{
    userText.textContent = "맞췄습니다";
    gameOver = true;
  }
  
  if(chance == 0){
    gameOver = true;
  }

  if(gameOver == true) {
    userEnter.disabled = true;
  }
}

userInput.addEventListener("focus",()=>{
  userInput.value ="";
});


function pickRandomNumber() {
  // 랜덤숫자 뽑기
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function reset(){
    pickRandomNumber();
    chance = 5;
    userEnter.disabled = false;
    gameOver = false;
    chanceText.textContent = `남은기회 : ${chance}`;
    userText.textContent = "숫자를 입력해주세요";

}

pickRandomNumber();