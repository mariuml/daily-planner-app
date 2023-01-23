//  GLOBAL VARIABLES
var textArea = $(".large-row");
var scheduleHour = $(".hour");

// Creating a variable containing the current hour 
var today = moment();
var currentHour = today.format("ha");

// Timeblock variables
var elevenAm = $("#eleven-am").text();


// Timeblock textarea variables
var elevenAmTextarea = $("#eleven-am-textarea");

//  Display current day 

var displayCurrentDay = moment();
$("#currentDay").text(displayCurrentDay.format("dddd, MMMM Do YYYY"));

// FUNCTION: Coloring the time block grey, red or green
//  based on the current hour

//  If time is in the past, apply class .past

//  Need to compare hour with the current hour - comparing strings

function compareTime (timeblockHour, timeblockTextArea) {
    
// Present
if (timeblockHour === currentHour) {
   timeblockTextArea.addClass('present');

}
// Past
else if ()



}

// Calling the function to compare timeblocks 9am-5pm, coloring the blocks accordingly
compareTime(elevenAm,elevenAmTextarea);