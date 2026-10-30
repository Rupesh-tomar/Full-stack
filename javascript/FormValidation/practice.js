function LoginForm(){
const un=document.getElementById("userName").value.trim();
const ps=document.getElementById("password").value;

console.log(un,ps);

}
const loginform=document.getElementById("userName");

loginform.addEventListener("submit",(e)=>{
e.preventDefault();
})

