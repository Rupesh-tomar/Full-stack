//spread operaotr

let a = [10, 20, 30];

console.log(...a);


//rest operator

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);