function send(){
    msg = document.getElementById("sendinput").value;
    localStorage.setItem("message", msg);
    firebase.database().ref("msg").push({
        Message=msg,
        like=0
    })
    document.getElementById("sendinput").value="";
}

var firebaseConfig = {
    apiKey: "AIzaSyDNZRpHjaXEsC2TVlH16CIIceRV2FBjysc",
    authDomain: "project-95-33b77.firebaseapp.com",
    databaseURL: "https://project-95-33b77-default-rtdb.firebaseio.com",
    projectId: "project-95-33b77",
    storageBucket: "project-95-33b77.appspot.com",
    messagingSenderId: "118423218938",
    appId: "1:118423218938:web:867883581f1f3370c33743"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

