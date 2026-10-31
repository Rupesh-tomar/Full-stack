const { isValidElement } = require("react");

const Form= document.getElementById("form");

Form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const formData = new FormData(Form);

    const nm = formData.get("fullName")

    const valid =true;

   for(var i=0; i<nm.length; i++)
   {
       if((nm.charAt(i)>="A" && nm.charAt(i)<="Z") || (nm.charAt(i) >= "a" && nm.charAt(i) <="z") || (nm.charAt(i) === " "))
       {
          valid =true;
       }
       else
       {
          valid =false;
          break;
       }
   }
   console.log(valid ? "valid":"invalid");
   
   
})

