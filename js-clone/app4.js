const calculator={
plus: function(a,b){
    console.log(a+b);
},
minus: function(a,b){
    console.log(a-b);
},
times: function(a,b){
    console.log(a*b);
},
divide: function(a,b){
    console.log(a/b);
},
power: function(a,b){
    console.log(a**b);
},
};

calculator.plus(3,2);
calculator.minus(3,2);
calculator.times(3,2);
calculator.divide(3,2);
calculator.power(3,2);

const age=96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2;

}
const krAge=calculateKrAge(95);
console.log(krAge);