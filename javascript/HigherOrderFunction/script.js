
function calculate(x,y,operation){
  operation(x,y);
}

const add = (x,y) => {
 console.log(x+y);
}

const multi = (x,y) => {
    console.log(x*y);
    
}


calculate(5,10,add);
calculate(5,10,multi);