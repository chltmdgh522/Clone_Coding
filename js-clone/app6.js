const title = document.getElementById("title");
console.log(title);
console.dir(title);



const title1=document.querySelector("div.abc:first-child h1");
console.log(title1);

title1.style.color="red";

function handleTitleClick(){
   
    title1.style.color="blue";
}
title1.addEventListener("click",handleTitleClick);

function handleMouseEnter(){
    title1.innerText="바뀜";
}

title1.addEventListener("mouseenter",handleMouseEnter);

function handleMouseLeave(){
    title1.innerText="바뀜1";
}

title1.addEventListener("mouseleave",handleMouseLeave);
