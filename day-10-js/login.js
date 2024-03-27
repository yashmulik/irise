function Login(event){
  event.preventDefault();
  // alert("working..")

  // console.log(document.getElementById("email ").value)

  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  // console.log(userEmail, userPassword)

  if(userEmail && userPassword){
    const userData ={email: userEmail, password: userPassword}
     localStorage.setItem("userCreds",JSON.stringify (userData ))
     doccument.getElementById("email"),value = "";
     doccument.getElementById("password").value = "";
     return alert("data added successfully")
  }
  else{
    alert("all fields are mandatory")
  }
}   