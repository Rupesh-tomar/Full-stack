


const heading = document.getElementById("heading");

const para = document.getElementById("para");

const changeBtn = document.getElementById("changeBtn");

const addBtn = document.getElementById("addBtn");



changeBtn.addEventListener("click", function() {

    heading.innerText = "Welcome to DOM Manipulation";

    para.innerText = "Text successfully changed!";

});



addBtn.addEventListener("click", function() {

    const newPara = document.createElement("p");

    newPara.innerText = "This is a new paragraph";

    document.body.appendChild(newPara);

});
