// Created by Sarthak
//Added by mouhammad zein eddine
$(document).ready(function(){
    initializeTimer();
    createHoursLabels();
    createMinutesTicks();
});

function initializeTimer(){
    let hr = document.querySelector("#hr");
    let mn = document.querySelector("#mn");
    let sc = document.querySelector("#sc");
    setInterval(()=> {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * 6;
        let ss = day.getSeconds() * 6;
        hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
})
}

function createMinutesTicks(){
    for(let i = 0;i<=60;i++){
        $('#minutes').append(`<span style="--i: ${i}"><b></b></span>`)
    }
}

function createHoursLabels(){
    for(let i = 1;i<=12;i++){
        $('.numbers').prepend(`<span style="--i: ${i}"><b>${i}</b></span>`)
    }
}


window.addEventListener("mouseover", play);
window.addEventListener("click", play);

function play() {
    try{
  document.getElementById("a").play();
  }
  catch{
      
  }
};