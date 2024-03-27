function  Register(event){
    event. preventDefault(); 
    // alert("function calling..")
//    console.log(document.getElementById("Name").value) 

   var name =document.getElementById("Name").value;
   var number =document.getElementById("Number").value;
   var email =document.getElementById("email").value;
   var password =document.getElementById("Password").value;
//    console.log(name, "-name", email, "-email", password, "-password", Number, "-number")

   var userData = {username: name, usernumber: number, useremail: email, userPassword: password  };
   console.log(userData,"userDta")

   localStorage.setItem("user", JSON.stringify (userData));


   document.getElementById("Name").value = '';
   document.getElementById("Name").value = '';
   document.getElementById("Name").value = '';
   document.getElementById("Name").value = '';  

   alert("Dta stored in LS")


}

