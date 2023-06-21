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
 


//14 anim
const leftContainer = document.querySelector(".left-animation");
window.addEventListener('DOMContentLoaded', addLeft);
function addLeft(){
    leftContainer.style.left = "40px";
}


//codeText.style.opacity = "1";
// codeText.style.color = "red";
// 3 anim

//4 anim

const blinkBtn = document.querySelector("#blink");
blinkBtn.addEventListener("click", addBlink);
function addBlink(){
    mainText.style.animation= 'blink 2s ease 0s infinite normal forwards';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px red, 0 0 30px red, 0 0 40px red, 0 0 55px red, 0 0 75px red";
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

//6 anim
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

//7 anim
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


//8 anim
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

//9 anim 

const vibrateBtn = document.querySelector('#vibrate');
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

//10 anim

const wobbleBtn = document.querySelector('#wobble');
wobbleBtn.addEventListener("click", addWobble);

function addWobble(){
    mainText.style.animation = 'wobble 2s ease-in 0s infinite normal both';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #ff00a6, 0 0 30px #ff00a6, 0 0 40px #ff00a6, 0 0 55px #ff00a6, 0 0 75px #ff00a6";
    codeText.style.opacity = "1";
    codeText.style.color = "#ff00a6";
    pre.innerText = `animation: vibrate 2s ease-in 0s infinite normal both;

    @keyframes vibrate {
        0%,
        100% {
            transform: translateX(0%);
            transform-origin: 50% 50%;
        }
    
        15% {
            transform: translateX(-30px) rotate(-6deg);
        }
    
        30% {
            transform: translateX(15px) rotate(6deg);
        }
    
        45% {
            transform: translateX(-15px) rotate(-3.6deg);
        }
    
        60% {
            transform: translateX(9px) rotate(2.4deg);
        }
    
        75% {
            transform: translateX(-6px) rotate(-1.2deg);
        }
    }`;
}

//11 anim

const rotateBtn = document.querySelector('#rotate');
rotateBtn.addEventListener("click", addRotate);

function addRotate(){
    mainText.style.animation = 'rotate 1s ease-in 0s infinite normal both';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #ffa200, 0 0 30px #ffa200, 0 0 40px #ffa200, 0 0 55px #ffa200, 0 0 75px #ffa200";
    codeText.style.opacity = "1";
    codeText.style.color = "#ffa200";
    pre.innerText = `animation: rotate 1s ease-in 0s infinite normal both;

    @keyframes rotate {
        0% {
            transform: rotate(0);
        }
    
        100% {
            transform: rotate(360deg);
        }
    }`;
}

//12 anim

const shadowBtn = document.querySelector('#shadow');
shadowBtn.addEventListener("click", addShadow);

function addShadow(){
    mainText.style.animation = 'shadow 2s ease 0s infinite normal both';
    mainText.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #ff0051, 0 0 30px #ff0051, 0 0 40px #ff0051, 0 0 55px #ff0051, 0 0 75px #ff0051";
    codeText.style.opacity = "1";
    codeText.style.color = "#ff0051";
    pre.innerText = `animation: shadow 1s ease-in 0s infinite normal both;

    @keyframes shadow {
        0% {
            box-shadow: 0 0 0 0 #ff0051;
        }
    
        100% {
            box-shadow: 0 0 20px 0px #ff0051;
        }
    }`;
}

//13 anim

const svgWave = document.querySelector("footer");
window.addEventListener('DOMContentLoaded', addSvgWave);

function addSvgWave(){
    svgWave.innerHTML = `<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
    <path d="M 0,600 C 0,600 0,200 0,200 C 88.133971291866,199.5980861244019 176.267942583732,199.19617224880383 282,211 C 387.732057416268,222.80382775119617 511.0622009569378,246.81339712918663 599,257 C 686.9377990430622,267.1866028708134 739.4832535885168,263.55023923444975 816,259 C 892.5167464114832,254.44976076555025 993.0047846889952,248.98564593301435 1101,239 C 1208.9952153110048,229.01435406698565 1324.4976076555024,214.50717703349284 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
    <path d="M 0,600 C 0,600 0,400 0,400 C 78.96650717703349,429.23444976076553 157.93301435406698,458.4688995215311 254,452 C 350.066985645933,445.5311004784689 463.23444976076564,403.35885167464113 579,383 C 694.7655502392344,362.64114832535887 813.1291866028707,364.0956937799043 893,367 C 972.8708133971293,369.9043062200957 1014.2488038277513,374.25837320574163 1099,380 C 1183.7511961722487,385.74162679425837 1311.8755980861242,392.87081339712915 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
    </svg>`;
}


//14 anim logo
//15 anim loader
//16 anim btn link
//17 anim left
//18 anim right
//19 anim bottom