//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAWtuUBWrah6eRmgsYtGhEf07vephu71pM",
    authDomain: "kwitter-b4f81.firebaseapp.com",
    projectId: "kwitter-b4f81",
    storageBucket: "kwitter-b4f81.appspot.com",
    messagingSenderId: "392705960774",
    appId: "1:392705960774:web:368ca857208e5bf8745347"
  };
firebase.initializeApp(firebaseConfig)

user_name = localstorage.getItem("user_name");

document.getElementById("h3user_name").innerHTML ="Welcome" + user_name + "!";

function addroom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
     porpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location ="index2.html";

    
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room  Name -" +Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML +=row;

    //End code
    });});}
getData();
