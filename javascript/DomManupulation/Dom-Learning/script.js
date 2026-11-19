// let heading = document.getElementById("heading").innerText="Welcome to DOM";

// let message = document.getElementById("message").innerText="DOM is easy";

// let course=document.getElementById("course").innerText="Frontend Development";

// console.log(heading);
// console.log(message);
// console.log(course);

//container
let container = document.getElementById("container");

let heading = document.createElement("h1");

heading.innerText="My Profile";

let para = document.createElement("p");

para.innerText="My name is Rupesh";

container.appendChild(para);

container.appendChild(heading);

console.log(container);

//list create multiple list 
let list = document.getElementById("list");
let createli=document.createElement("li");
createli.innerText="java";
list.appendChild(createli);


