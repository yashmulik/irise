// Store
// localStorage.setItem("name",JSON.stringify(value))

// retrive
// JSON.parse(localStorage.getItem("name",))

// delete
// localStorage.removeItem("name")

function Storedata(){
    var myclass ={noofStudents: 20, totalassignsub: 100}
    localStorage.setItem("mydata", JSON.stringify(myclass))
     alert("data added to LS successfully.")
    return
} 

function retrivedata(){

    const datafromLs = JSON.parse(localStorage.getItem("mydata"))
    console.log(datafromLs, "- data here")
    alert('${datafromLs.noofStudents} - no of students.')
    return
 }

 function deletedata(){
    localStorage.removeItem("mydata");
    alert("data deleted successfully done. ")
 }