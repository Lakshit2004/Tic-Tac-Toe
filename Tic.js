let boxes = document.querySelectorAll(".box");
let msg_container = document.querySelector(".message_container")
let msg = document.querySelector("#message");
let ngbtn = document.querySelector("#NewGame");
let flag = true;
let count = 0;

boxes.forEach((element) => {
    element.addEventListener("click" , () =>{
        if(flag){
            element.innerText = "X";
            flag = false;
        }
        else{
            element.innerText = "O";
            flag = true;
        }

        element.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count == 9 && !isWinner){
            gameDraw();
        }

    });
});

const enableBoxes =() =>{
    for(ele of boxes){
        ele.disabled = false;
        ele.innerText = "";
    }
}

const disableBoxes = () =>{
    for(let ele of boxes){
        ele.disabled = true;
        boxes.innerText = "";
    }
}

const resetGame =() => {
    msg_container.classList.add("hide");
    flag = true;
    count = 0;
    enableBoxes();
}


const gameDraw = () =>{
    msg.innerText = "Game was a Draw";
    msg_container.classList.remove('hide');
    disableBoxes();
}

const showWinner = (winner) =>{
    msg.innerText = `congrats winner is ${winner}`;
    msg_container.classList.remove('hide');
    disableBoxes();
}

ngbtn.addEventListener("click" , () =>{
    resetGame();
});

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const checkWinner =() =>{
    for(let p of WinPatterns){

        let val1 = boxes[p[0]].innerText;
        let val2 = boxes[p[1]].innerText;
        let val3 = boxes[p[2]].innerText;

        if(val1!= "" && val2!= "" && val3!="'"){
            if(val1 == val2 && val2 == val3){
                showWinner(val1);
                return true;
            }
        }

    }
}