function sayHello(nameOfPerson,age){
    
    console.log(nameOfPerson+age);
}

sayHello("승호",24);
sayHello("세현",26);


const player={
    name: "승호",
    sayHello: function(){
        console.log("hello");
    },
};
console.log(player.name);

player.sayHello();
