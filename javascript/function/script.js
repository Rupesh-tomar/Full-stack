
function sum(a,b){
    let c = a+b;
    console.log(c);
}

sum(5,20);

function sum_with_d(x, y=10){
    console.log(x+y);
}

sum_with_d(7);//17
sum_with_d(10, 40); // 50

function Calculate(a,b,c){
    return a+b-c;
}
let answer = Calculate(5,6,7);
console.log(answer);


const greet = function(){
   console.log("welcome");  
}

greet();