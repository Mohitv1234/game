function bubblesshow(){
    var clutter = "";
    for(var i=0;i<140;i++){
        var rn =  Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bubbles").innerHTML=clutter;
}
function settime(){
    setInterval(function(){
       if(time>0){
        time--;
        document.querySelector("#timer").textContent = time;
       }else{
        document.querySelector("#bubbles").innerHTML = `<h1>Game Over</h1>`
       }
    },1000)
}
function hitshow(){
    var hit = Math.floor(Math.random()*10);
    document.querySelector("#hitb").textContent = hit;
}
var score = 0;
function setscore(newscore){
    score += newscore;
    document.querySelector("#scoreb").textContent = score;
}
var time = 60;
setscore(score);
hitshow();
bubblesshow();
settime();
    document.querySelector("#bubbles").addEventListener("click",function(){
        if(Number(event.target.textContent)===Number(document.querySelector("#hitb").textContent)){
            setscore(10); 
            hitshow();
        }
        else{
            console.log("Sorry");
        }

    })