
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
var subject = "";

$("#sendForm").on("click", function(event) {
    event.preventDefault();
    name = $("#name").val().trim();
    guestEmail = $("#guestEmail").val().trim();
    message = $("#subject").val().trim();
    console.log("name : " + name);
    console.log("guestEmail : " + guestEmail);
    console.log("message : " + message);

    // push back time 1 year
    var arrivalConvert = moment(departure, "HH:mm").subtract(1, "years");
    console.log("arrivalConvert = " + moment(departure, "HH:mm").subtract(1, "years"));

    // get & format current time
    var currentTime = moment();
    console.log("currentTime = " + moment(currentTime).format("hh:mm"));

    // calculate time difference
    var arrivalCalc = moment().diff(moment(arrivalConvert), "minutes");
    console.log("arrivalCalc = " + moment().diff(moment(arrivalConvert), "minutes"));

    // time remainder
    var timeRem = arrivalCalc % frequency;
    console.log("timeRem = " + (arrivalCalc % frequency));

    // minutes until arrival
    var arrival = frequency - timeRem;
    console.log("arrival = " + (frequency - timeRem));

    // push to firebase
    firebase.database().ref().push({
        name: name,
        destination: destination,
        arrival: arrival,
        departure: departure,
        frequency: frequency
    });

    $("form")[0].reset();

});

// append schedule to table
firebase.database().ref().on("child_added", function(snapshot){
    console.log(snapshot.val());
    $("#sched").append("<tr><td>" 
        + snapshot.val().name 
        + "</td><td>" 
        + snapshot.val().destination 
        + "</td><td>" 
        + snapshot.val().arrival + " min(s)"
        + "</td><td>" 
        + snapshot.val().departure 
        + "</td><td>" 
        + snapshot.val().frequency 
        + "</td></tr>");
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
});

