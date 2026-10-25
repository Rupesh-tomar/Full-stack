const ary = ["Apple", 2.5, 99, "Himacal", "a"];

console.log("With For Each");

ary.forEach((X) =>{
    console.log(X);
})


console.log("map");

 const arr=ary.map((element)=>{
     return element
})
console.log(arr);

console.log("filter");
const filter= ary.filter((item) =>{return item});

console.log(filter);
