let heading = document.querySelector("h1").innerHTML;

console.log(heading+" Rupesh Tomar");

function submit()
{
    console.log("clicked button");
    
    const nm = document.getElementById("fullName").value.trim();
    const em = document.getElementById("email").value.trim();
    const ph = document.getElementById("phone").value.trim();
    const db = document.getElementById("DOB").value.trim();
    const gder = document.getElementById("Gender").value.trim();

    console.log("fullname",nm);
    console.log("fullname",em);
    console.log("fullname",ph);
    console.log("fullname",db);
    console.log("fullname",gder);
}

function submit2()
{
    const data = [];

    document.querySelectorAll("input,select").forEach(function(item){
        data.push(item.value.trim());
    });

    for(var i=0; i<data.length; i++)
    {
        console.log(data[i]);
        
    }
    
}



