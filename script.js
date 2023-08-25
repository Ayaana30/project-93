function nextpage(){
    //I need you to get the value from the input and store in a  variable
    var username=document.getElementById("name").value
    //lable:value, "",value
    localStorage.setItem("user name", username) 
window.location="index2.html"
    
}