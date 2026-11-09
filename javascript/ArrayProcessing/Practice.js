let arr =["sumit", "chotu","manish","rajput"];

for(var i =0; i<arr.length; i++)
{
     console.log(arr[i]);
}

let arr2=[1,2,3,4,5];
console.log(Math.max(...arr2));
let numbers = [10, 50, 20, 90, 30];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > max) {
        max = numbers[i];
    }

}

console.log(max);



