let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let wm=document.querySelector(".win-msg");
let msg=document.querySelector("#msg");
let turnO =true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    wm.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText="O";
            box.style.color="green"
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="purple";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes=() => {
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
};

const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations!! Winner is ${winner} 🎉`;
    wm.classList.remove("hide");
    disableBoxes();
};

// Confetti effect function
const launchConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
};

const checkWinner=() =>{
    for(let p of winPatterns){
        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;
        if(p1 != "" &&  p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                console.log("Winner", p1);
                showWinner(p1);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);