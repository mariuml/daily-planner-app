//  GLOBAL VARIABLES
var textArea = $(".large-row");
var scheduleHour = $(".hour");

// Creating a variable containing the current hour 
var today = moment();
var currentHour = today.format("ha");

// Timeblock variable string to compare

var nineAm = $("#nine-am").text();
var tenAm = $("#ten-am").text();
var elevenAm = $("#eleven-am").text();
var twelvePm = $("#twelve-pm").text();
var onePm = $("#one-pm").text();
var twoPm = $("#two-pm").text();
var threePm = $("#three-pm").text();
var fourPm = $("#four-pm").text();
var fivePm = $("#five-pm").text();


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

