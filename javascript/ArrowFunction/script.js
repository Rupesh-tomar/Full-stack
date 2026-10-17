// () => {
//   console.log("this is Arrow Function");
// };

// console.log(() => {
//   let a = 10,
//     b = 5;
//   return a + b;
// });

const add = (a,b) =>{
  console.log(a+b);
  
}

add(10,2);

function game(score)
{
  callback(50);
}

game((score) => {
console.log(score)
});

function game(callback) {
    callback(50);
}

game((score) => {
    console.log("Score: " + score);
});