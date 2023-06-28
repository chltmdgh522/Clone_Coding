const title = document.getElementById("title");
console.log(title);
console.dir(title);



const h1=document.querySelector("div.abc:first-child h1");
console.log(h1);

h1.style.color="red";

function handleTitleClick(){
   
    h1.style.color="blue";
}
h1.addEventListener("click",handleTitleClick);

function handleMouseEnter(){
    h1.innerText="바뀜";
}

h1.addEventListener("mouseenter",handleMouseEnter);

function handleMouseLeave(){
    h1.innerText="바뀜1";
}

h1.addEventListener("mouseleave",handleMouseLeave);
h1.onmouselinstenr=handleMouseLeave;

function handleWindowResize(){
    document.body.style.backgroundColor="aqua";
}

window.addEventListener("resize", handleWindowResize);

function handleWindowCopy(){
    alert("ㅎㅇ");
}

window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline(){
    alert("no wifi");
}
function handleWindowOnline(){
    alert("yes wifi");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);