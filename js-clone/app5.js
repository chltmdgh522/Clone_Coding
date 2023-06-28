const age =parseInt(prompt("how old are you"));

console.log(typeof age + typeof parseInt(age));

 console.log(isNaN(age));

 if(isNaN(age)){
    console.log("숫자로 써줘");
 } else if(age<18){
    console.log("너무 어려");
 }else {
    console.log("굿");
 }