//  GLOBAL VARIABLES
var textArea = $(".large-row");
var scheduleHour = $(".hour");


// Save Button variables
var nineAmSavebtn = $("#nine-am-savebtn");



// Creating a variable containing the current hour 
var today = moment();
var currentHour = today.format("HH");

// Timeblock variable string to compare

var nineAm = parseInt($("#nine-am").text());
var tenAm = parseInt($("#ten-am").text());
var elevenAm = parseInt($("#eleven-am").text());
var twelvePm = parseInt($("#twelve-pm").text());
var onePm = ((parseInt($("#one-pm").text())) + 12);
var twoPm = ((parseInt($("#two-pm").text())) + 12);
var threePm = ((parseInt($("#three-pm").text())) + 12);
var fourPm = ((parseInt($("#four-pm").text())) +12);
var fivePm = ((parseInt($("#five-pm").text())) + 12);



// Timeblock textarea variables
var nineAmTextarea = $("#nine-am-textarea");
var tenAmTextarea = $("#ten-am-textarea");
var elevenAmTextarea = $("#eleven-am-textarea");
var twelvePmTextarea = $("#twelve-pm-textarea");
var onePmTextarea = $("#one-pm-textarea");
var twoPmTextarea = $("#two-pm-textarea");
var threePmTextarea = $("#three-pm-textarea");
var fourPmTextarea = $("#four-pm-textarea");
var fivePmTextarea = $("#five-pm-textarea");

// Variables to display saved text


//  Display current day 

var displayCurrentDay = moment();
$("#currentDay").text(displayCurrentDay.format("dddd, MMMM Do YYYY"));

// FUNCTION: Coloring the time block grey, red or green
//  based on the current hour

function compareTime (timeblockHour, timeblockTextArea) {
    
// Present - red
if (timeblockHour == currentHour) {
   timeblockTextArea.addClass('present');

}
// Past - grey
else if (timeblockHour < currentHour) {
    timeblockTextArea.addClass('past');
}
// Future - green
else {
    timeblockTextArea.addClass('future');
}

}

// Calling the function to compare timeblocks 9am-5pm, coloring the blocks accordingly

compareTime(nineAm,nineAmTextarea);
compareTime(tenAm,tenAmTextarea);
compareTime(elevenAm,elevenAmTextarea);
compareTime(twelvePm,twelvePmTextarea);
compareTime(onePm,onePmTextarea);
compareTime(twoPm,twoPmTextarea);
compareTime(threePm,threePmTextarea);
compareTime(fourPm, fourPmTextarea);
compareTime(fivePm, fivePmTextarea);

// FUNCTION: Writing individual functions for each button to save and display on the screen

// 9am
nineAmSavebtn.on('click', function() {
  
    // Saving input value to a variable
    var savedWorkEvent  = $("#nine-am-textarea .textarea").val();

    // Save variable in a key to local storage 
localStorage.setItem("nineAm", savedWorkEvent);

})

// 



