let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rstbtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turn0 = true;

let  winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{

        if(turn0)
        {
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})


function unable()
{
    for(box of boxes)
    {
        box.disabled = false;
    }
}

function disnableb()
{
    for(box of boxes)
    {
        box.disabled = true;
    }
}

const showWinner = (winner) =>{

    msg.innerText = `Congratulations!! Winner is ${winner}`
    msgContainer.classList.remove('hide');

}

const resetGame = ()=>{

    msgContainer.classList.add('hide');
    for(let box of boxes)
    {
        box.innerText = "";
    }
    unable();
    turn0 = true;


}



const checkWinner = ()=>{

    for(let pattern of winPattern)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                showWinner(pos1);
                disnableb()
            }
        }

    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);