let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const genCompChoice = ()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame =()=>{
    console.log("game was draw");
    msg.innerText="Game Draw. Play again.";
    msg.style.backgroundColor="black";

};

const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }else{
        console.log("you lose");
        msg.innerText="You Lose.";
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
};

const playGame= (userChoice)=>{
    
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper" ? false: true; 
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})