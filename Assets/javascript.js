  // Initialize Firebase
var config = {
    apiKey: "AIzaSyA-UfZxJ6vZCmyIq1ds7h8fOxiid69jGK4",
    authDomain: "trainsceduler.firebaseapp.com",
    databaseURL: "https://trainsceduler.firebaseio.com",
    projectId: "trainsceduler",
    storageBucket: "trainsceduler.appspot.com",
    messagingSenderId: "419742041349"
};

firebase.initializeApp(config);

var database = firebase.database();
var trackNum = "";
var lineName = "";
var firstTrain = "";
var frequencyVal = "";

console.log(database);

$("#submitBtn").on("click", function() {
    event.preventDefault();
    
    trackNum = $("#trackInput").val().trim();
    lineName = $("#lineInput").val().trim();
    firstTrain = $("#firstTrainInput").val().trim();
    frequencyVal = $("#frequencyInput").val().trim();

    database.ref().push({
        TrackNumber: trackNum,
        LineName: lineName,
        FirstTrain: firstTrain,
        Frequency: frequencyVal
    })

})
