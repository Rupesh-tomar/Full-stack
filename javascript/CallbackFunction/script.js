function add(a, b) {
  let x = a + 5;
  let y = b + 5;
  console.log(x + y);
}

function sum(m, n, jor) {
  let p = m * 2;
  let q = n * 2;

  jor(p, q);
}

sum(5, 6, add);

sum(8, 10, (a, b) => {
  let x = a + 5;
  let y = b + 5;
  console.log(x + y);
});

function divide(k,j)
{
   console.log(k,j);
   
}

function multiply(i,o,jor2)
{
  let j=i*2;
  let k=o*2;

  jor2(k,j);
}

multiply(10,40, divide)