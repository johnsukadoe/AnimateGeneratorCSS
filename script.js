const btns = document.querySelectorAll("button");

btns.forEach(btn=> {
    btn.addEventListener("click", addActiveBtn);
    btn.addEventListener("mouseover", addHoverBtn);
    btn.addEventListener("mouseout", removeHoverBtn);
})

// 1 anim
function addActiveBtn(event){
    event.target.classList.add('btn-active');
    window.setTimeout(function(e){
        event.target.classList.remove('btn-active');
    }, 500)
    
}

//2 anim
function addHoverBtn(event){
    event.target.classList.add('btn-hover');
}
function removeHoverBtn(event){
    event.target.classList.remove('btn-hover');
}

const mainText = document.querySelector(".main-text")
const codeText = document.querySelector('.code');
const pre = document.querySelector('pre');
 

//3 anim
const blinkBtn = document.querySelector("#blink");
blinkBtn.addEventListener("click", addBlink);
function addBlink(){
    mainText.style.animation= 'blink 2s ease 0s infinite normal forwards';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px red, 0 0 30px red, 0 0 40px red, 0 0 55px red, 0 0 75px red";
    //4 anim
    codeText.style.opacity = "1";
    codeText.style.color = "red";
    pre.innerText = `animation: bounce 2s ease 0s infinite normal forwards;
            
    @keyframes bounce {
        0%,
        50%,
        100% {
            opacity: 1;
        }
    
        25%,
        75% {
            opacity: 0;
        }
    }`;
}

//5 anim
const bounceBtn = document.querySelector("#bounce");
bounceBtn.addEventListener("click", addBounce);
function addBounce(){
    mainText.style.animation= 'bounce 2s ease 0s infinite normal forwards';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px blue, 0 0 30px blue, 0 0 40px blue, 0 0 55px blue, 0 0 75px blue";
    codeText.style.opacity = "1";
    codeText.style.color = "blue";
    pre.innerText = `animation: bounce 2s ease 0s infinite normal forwards;

    @keyframes bounce {
        0% {
            animation-timing-function: ease-in;
            opacity: 1;
            transform: translateY(-45px);
        }
    
        24% {
            opacity: 1;
        }
    
        40% {
            animation-timing-function: ease-in;
            transform: translateY(-24px);
        }
    
        65% {
            animation-timing-function: ease-in;
            transform: translateY(-12px);
        }
    
        82% {
            animation-timing-function: ease-in;
            transform: translateY(-6px);
        }
    
        93% {
            animation-timing-function: ease-in;
            transform: translateY(-4px);
        }
    
        25%,
        55%,
        75%,
        87% {
            animation-timing-function: ease-out;
            transform: translateY(0px);
        }
    
        100% {
            animation-timing-function: ease-out;
            opacity: 1;
            transform: translateY(0px);
        }
    }`;
}

const jelloBtn = document.querySelector('#jello');
jelloBtn.addEventListener("click", addJello);

function addJello(){
    mainText.style.animation= 'jello 2s ease 0s infinite normal forwards';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #f6ff00, 0 0 30px #f6ff00, 0 0 40px #f6ff00, 0 0 55px #f6ff00, 0 0 75px #f6ff00";
    codeText.style.opacity = "1";
    codeText.style.color = "#f6ff00";
    pre.innerText = `animation: jello 2s ease 0s infinite normal forwards;

    @keyframes jello {
        0% {
            transform: scale3d(1, 1, 1);
        }
    
        30% {
            transform: scale3d(1.25, 0.75, 1);
        }
    
        40% {
            transform: scale3d(0.75, 1.25, 1);
        }
    
        50% {
            transform: scale3d(1.15, 0.85, 1);
        }
    
        65% {
            transform: scale3d(0.95, 1.05, 1);
        }
    
        75% {
            transform: scale3d(1.05, 0.95, 1);
        }
    
        100% {
            transform: scale3d(1, 1, 1);
        }
    }`;
}


const pulseBtn = document.querySelector('#pulse');
pulseBtn.addEventListener("click", addPulse);

function addPulse(){
    mainText.style.animation= 'pulse 2s ease 0s infinite normal forwards';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #6aff00, 0 0 30px #6aff00, 0 0 40px #6aff00, 0 0 55px #6aff00, 0 0 75px #6aff00";
    codeText.style.opacity = "1";
    codeText.style.color = "#6aff00";
    pre.innerText = `animation: pulse 2s ease 0s infinite normal forwards;

    @keyframes pulse {
        0% {
            animation-timing-function: ease-out;
            transform: scale(1);
            transform-origin: center center;
        }
    
        10% {
            animation-timing-function: ease-in;
            transform: scale(0.91);
        }
    
        17% {
            animation-timing-function: ease-out;
            transform: scale(0.98);
        }
    
        33% {
            animation-timing-function: ease-in;
            transform: scale(0.87);
        }
    
        45% {
            animation-timing-function: ease-out;
            transform: scale(1);
        }
    }`;
}



const shakeBtn = document.querySelector('#shake');
shakeBtn.addEventListener("click", addShake);

function addShake(){
    mainText.style.animation = 'shake 2s ease 0s infinite normal forwards';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #00ffd5, 0 0 30px #00ffd5, 0 0 40px #00ffd5, 0 0 55px #00ffd5, 0 0 75px #00ffd5";
    codeText.style.opacity = "1";
    codeText.style.color = "#00ffd5";
    pre.innerText = `animation: shake 2s ease 0s infinite normal forwards;

    @keyframes shake {
        0%,
        100% {
            transform: translateX(0);
        }
    
        10%,
        30%,
        50%,
        70% {
            transform: translateX(-10px);
        }
    
        20%,
        40%,
        60% {
            transform: translateX(10px);
        }
    
        80% {
            transform: translateX(8px);
        }
    
        90% {
            transform: translateX(-8px);
        }
    }`;
}


const vibrateBtn = document.querySelector('#shavibrateke');
vibrateBtn.addEventListener("click", addVibrate);

function addVibrate(){
    mainText.style.animation = 'vibrate 2s ease-in 0s infinite normal both';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #bb00ff, 0 0 30px #bb00ff, 0 0 40px #bb00ff, 0 0 55px #bb00ff, 0 0 75px #bb00ff";
    codeText.style.opacity = "1";
    codeText.style.color = "#bb00ff";
    pre.innerText = `animation: vibrate 2s ease-in 0s infinite normal both;

    @keyframes vibrate {
        0% {
            transform: translate(0);
        }
    
        20% {
            transform: translate(-2px, 2px);
        }
    
        40% {
            transform: translate(-2px, -2px);
        }
    
        60% {
            transform: translate(2px, 2px);
        }
    
        80% {
            transform: translate(2px, -2px);
        }
    
        100% {
            transform: translate(0);
        }
    }`;
}