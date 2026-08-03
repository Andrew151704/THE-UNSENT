const lines = [

"Searching memory archive...",

"One unfinished story detected.",

"Initializing experience..."

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

setTimeout(typeLine,700);

}

},40);

}

typeLine();
