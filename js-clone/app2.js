const mon="mon";
const tue="tue";
const wed="wed";
const thu="thu";

const today=[mon,tue,wed,thu];
console.log(today[31]);
today.push("aa");
console.log(today);

const player={
    name: "최승호",
    points: 10,
    fat: true,

};
console.log(player.fat);
console.log(player.name);
console.log(player.points);
console.log(player);
player.name="d";
console.log(player.name);

player.lastName="d";