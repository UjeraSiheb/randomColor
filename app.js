let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let div=document.querySelector("div");
btn.addEventListener("click",function(){
    let randomcolor=getRandomColor();
    h1.innerText=randomcolor;
    div.style.backgroundColor=randomcolor;
})
function getRandomColor(){
    let red=Math.floor(Math.random()*255+1);
    let green=Math.floor(Math.random()*255+1);
    let blue=Math.floor(Math.random()*255+1);
    let color=`rgb(${red},${green},${blue})`
    return color;
}