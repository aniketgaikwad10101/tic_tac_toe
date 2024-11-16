let boxs = document.querySelectorAll(".box");
let msg = document.querySelector(".win-msg");
// let restart = document.querySelector(".rb");
let newgame = document.querySelector(".new_game");
let count = 0;
let turn0 = true;
const arry = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
boxs.forEach((box) => {

    box.addEventListener("click", () => {
        count++;
        console.log("button is click");
        if (turn0) {//player0
            box.innerHTML = "o";
            turn0 = false;

        }
        else {//player1
            box.innerHTML = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();

    });


});
const reset = () => {
    turn0 = true;
    enablebox();
    count = 0;
};



const enablebox = () => {
    for (const box of boxs) {
        box.disabled = false;
        box.innerHTML = "";
        msg.innerHTML = "";

    };
};
const disablebox = () => {
    for (const box of boxs) {
        box.disabled = true;

    };
};

const showwin = (win) => {
    msg.innerHTML = "winner is " + win;
    // msg.classList.remove(".hiden");      
    disablebox();


};

const checkwinner = () => {

    for (let element of arry) {

        let pos0val = boxs[element[0]].innerHTML;
        let pos1val = boxs[element[1]].innerHTML;
        let pos2val = boxs[element[2]].innerHTML;
        console.log(pos0val,pos1val,pos2val);
        if (pos0val != "" && pos1val != "" && pos2val != "") {
            if (pos0val == pos1val && pos1val == pos2val) {
                console.log("winner", pos0val);
                showwin(pos0val);

            }
            else if ( count > 8 ) {
                
                msg.innerHTML = "Game is Tie";

            }

        }

    }
};
newgame.addEventListener("click", reset);
// r.addEventListener("click", reset);


