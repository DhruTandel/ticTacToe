const choices = document.querySelectorAll(".choice");
const userScore=document.getElementById("user-score");
const compScore=document.getElementById("comp-score");
let msg=document.getElementById("msg-para");

//user ne computer na score mate
let userScoreCount=0;
let compScoreCount=0;

//badhi image pan click event listner mate
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userSelected = choice.getAttribute("id");
    playgame(userSelected);
  });
});

//computer random select karse aa mate
const compChoice = () => {
  const selected = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * selected.length);
  return selected[randIndex];
};

//hover eefect mouse sathe
choices.forEach(choice => {
    const hoverText = choice.querySelector(".hover-text");

    choice.addEventListener("mouseenter", (e) => {
        hoverText.style.display = "block";
    });

    choice.addEventListener("mousemove", (e) => {
        hoverText.style.left = e.pageX + 15 + "px";
        hoverText.style.top = e.pageY + 15 + "px";
    });

    choice.addEventListener("mouseleave", () => {
        hoverText.style.display = "none";
    });
});
//main game no logic
const playgame = (userSelected) => {
    let compResult=compChoice();
    console.log("User selected :", userSelected);
    console.log("computer selected:",compResult)
    if(compResult===userSelected){
        console.log("Draw");
        msg.innerText="Draw play again!!";
        msg.style.backgroundColor="black";

    }else{
        let userWin=true;
        if(userSelected==="paper"){
            userWin=compResult==='rock'?true:false;
        }else if(userSelected==='scissor'){
            userWin=compResult==='paper'?true:false;
        }else{
            userWin=compResult==="scissor"?true:false;
        }
        showWinner(userWin,compResult,userSelected);
    }
};
//jitva pachi screen pan output mate
const showWinner=(userWin,compResult,userSelected)=>{
    if(userWin){
        console.log("you win");
        userScoreCount++;
        userScore.innerText=userScoreCount;
        msg.innerText=`You win!! Your ${userSelected} beats computer's ${compResult}` 
        msg.style.backgroundColor="green";
        
    }else{
        console.log("Computer win");
        compScoreCount++;
        compScore.innerText=compScoreCount;
        msg.innerText=`You loose!! COmputer ${compResult} beats your's ${userSelected}` 
        msg.style.backgroundColor="red";

    }
}