const lines = [

"Searching memory archive...",

"One unfinished story detected.",

"Touch to begin."

];

const terminalLines =
document.querySelectorAll(".line");

let current = 0;

function typeLine(){

if(current>=lines.length){

gsap.to("#continue",{

opacity:1,

duration:1

});

return;

}

const el=terminalLines[current];

el.style.opacity=1;

let text="";

let i=0;

const interval=setInterval(()=>{

text+=lines[current][i];

el.textContent=text;

i++;

if(i>=lines[current].length){

clearInterval(interval);

current++;

setTimeout(typeLine,600);

}

},35);

}

typeLine();

const ripple =
document.getElementById("ripple");

window.addEventListener("pointerdown",(e)=>{

ripple.style.left=e.clientX+"px";

ripple.style.top=e.clientY+"px";

gsap.fromTo(ripple,
{
opacity:1,
scale:0
},
{
opacity:0,
scale:14,
duration:1,
ease:"power3.out"
});

});
