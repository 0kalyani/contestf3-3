function myFunc(){
  document.getElementById("main").style.display="none";
    document.getElementById("next").style.display="inline";
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
    console.log(name);
    console.log(email);
    console.log(pass);
    localStorage.setItem("fname",name);
    localStorage.setItem("email",email);
    localStorage.setItem("pass",pass);
    document.getElementById("fname").innerText=name;
    document.getElementById("mail").innerText=email;
    document.getElementById("word").innerText=pass;
  
}

function func(){
    document.getElementById("main").style.display="inline";
    document.getElementById("next").style.display="none";
    const name=document.getElementById("name")="";
    const email=document.getElementById("email")="";
    const pass=document.getElementById("pass")="";
 
}