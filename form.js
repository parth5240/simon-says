
let gameseq = [];
let userseq = [];
let btns = ["red", "yellow", "purple", "green"];
let highestScore = 0;
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let p = document.querySelector("p"); 
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
})

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randColor = btns[randidx];
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randidx);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randBtn);

}
function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 250);
            highscore();
        }
    }
    else {
        if(level > highestScore){
            h2.innerHTML = `game over! wow, you create  the highest score. your score was ${level-1}<br> press any key to start`;    
        }
        else{
            h2.innerHTML = `game over!  your score was ${level-1}<br> press any key to start`;
        }
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);

}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function    highscore() {
    if (level > highestScore) {
      highestScore = level;
      document.getElementById('highestScore').innerText = highestScore;
    }
  }


