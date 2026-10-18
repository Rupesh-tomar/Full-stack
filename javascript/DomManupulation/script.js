const headingText=document.getElementById("heading").innerText;
const paraText=document.getElementById("studentMessage").textContent;

const btnlabel=document.getElementById("coursebutton").innerHTML;

console.log(headingText);
console.log(paraText);
console.log(btnlabel);




function updateMyName(){
    const myName =document.getElementById("myName").value.trim();
    paraText.innerText="Welcome TO YOUR LEARNING";
}
