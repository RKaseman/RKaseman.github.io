
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBBLsnOiPUrdDk2pWlQkR6eN9NmhXA5iFM",
    authDomain: "githubcontactdb.firebaseapp.com",
    databaseURL: "https://githubcontactdb.firebaseio.com",
    projectId: "githubcontactdb",
    storageBucket: "githubcontactdb.appspot.com",
    messagingSenderId: "642765346011"
};

firebase.initializeApp(config);

var name = "";
var guestEmail = "";
var message = "";

$("#sendForm").on("click", function(event) {
    event.preventDefault();
    name = $("#name").val().trim();
    guestEmail = $("#guestEmail").val().trim();
    message = $("#message").val().trim();
    console.log("name : " + name);
    console.log("guestEmail : " + guestEmail);
    console.log("message : " + message);

    // push to firebase
    firebase.database().ref().push({
        name: name,
        guestEmail: guestEmail,
        message: message,
    });

    $("form")[0].reset();

});

