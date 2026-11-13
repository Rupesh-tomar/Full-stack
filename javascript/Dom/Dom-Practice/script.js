const fi= document.getElementById("div").innerText;
console.log(fi);

const gone = document.getElementById("div2").innerText;
console.log(gone);

const heading = document.getElementById("heading").innertext = "Everyone";
console.log(heading);

const ch = document.getElementById("div2");


function change()
{
    ch.innerText="Rupesh";
    console.log("button click");
}


// Access Element using getElementById()

// const heading = document.getElementById("heading");

console.log(heading);


// Access Element using querySelector()

const paragraph = document.querySelector("#description");

console.log(paragraph);


// Access Multiple Elements

const allParagraphs = document.querySelectorAll("p");

console.log(allParagraphs);


// Access Parent Element

const button = document.getElementById("btn");

console.log(button.parentElement);


// Access Children

const parent = document.getElementById("parent");

console.log(parent.children);


// First Child Element

console.log(parent.firstElementChild);


// Last Child Element

console.log(parent.lastElementChild);


// Next Element Sibling

const htmlHeading = document.querySelector("#parent h3");

console.log(htmlHeading.nextElementSibling);


// Previous Element Sibling

const cssParagraph = document.querySelector("#parent p");

console.log(cssParagraph.previousElementSibling);


//  Change Text Content

const course = "Web Development";

heading.textContent = course;


// Create New Element

const newElement = document.createElement("h2");

newElement.textContent = "Learning JavaScript DOM";

document.body.append(newElement);


// Button Click Event

const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function () {

    heading.textContent = "Heading Changed Successfully!";

});

