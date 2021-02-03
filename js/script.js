
var wheresMadiJS = document.getElementById("location");

var time = new Date().getHours();
var morning = 8; //8AM
var noon = 12; //12PM
var trainingTime = 12.5; //12:30PM
var afternoon = 13; //1:00PM
var walkTime = 15; //3:00PM
var evening = 18; //6:00PM
var message = "causin' ruckus";

//BEGIN wheresMadi function
var wheresMadi = function()
{
  if (time == morning) {
    message = "splorin' in da woodz";
  }
  else if (time == trainingTime) {
    message = "workin 4 treats";
  }
  else if (time == afternoon) {
    message = "nappin'";
  }
  else if (time == walkTime) {
    message = "little long pond with mah frenz";
  }
    else if (time < noon){
    message = "ma 'n da's bed";
  }
  else if (time > evening) {
    message = "dreamin' dreamz";
  }

};
//END wheresMadi function

//CALL wheresMadi function
wheresMadi();

//Make the message appear in HTML
wheresMadiJS.innerText = message;



