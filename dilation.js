/*Super useful for interacting with webpages (implement in separate .js)
grab info from iframe doc:  https://www.w3schools.com/jsref/met_document_adoptnode.asp;

*/

//globals for initPlayer()
var playerContainer = document.getElementById("stream-container");
var player = document.getElementById("stream-container-player");
var isPlaying = false;
var playButton = document.getElementById("play-button");
//globals for initProgressBar()
var length = player.duration;
var totalLength = calculateTotalValue(length);
var progressbar = document.getElementById("seek-container-progress");

function main(){

  $(document).ready(initPlayer());

};

function initPlayer(){

  //add play button event listener
  playButton.addEventListener("click", function(){
    togglePlay();
  });

};

function updateProgressBar(){

  //update current time
  var current_time = player.currentTime;
  document.getElementById("seek-container-end").innerHTML = totalLength;

  //update end time
  var currentTime = calculateCurrentValue(current_time);
  document.getElementById("seek-container-start").innerHTML = currentTime;

  progressbar.value = (player.currentTime / player.duration);

  //add seek event listener
  progressbar.addEventListener("click", seek);

  //--I don't know what this is but maybe it'll make sense later...
  if(player.currentTime == player.duration){
    document.getElementById("play-button").className = "";
  };

};

function calculateCurrentValue(currentTime){

  var current_hour = parseInt(currentTime / 3600) % 24;
  var current_minute = parseInt(currentTime / 60) % 60;
  var current_seconds_long = currentTime % 60;
  var current_seconds = current_seconds_long.toFixed();
  var current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

  return current_time;

};

function togglePlay(){

  //if playyer is playing...pause it
  if(player.paused === false){

    player.pause();
    isPlaying = false;
    document.getElementById("play-button").className = "";

  //if player is paused...play it
  }else{

    player.play();
    document.getElementById("play-button").className = "pause";
    isPlaying = true;

  };
};

function seek(event){

  var percent = event.offsetX / this.offsetWidth;

  //update audio time
  player.currentTime = percent * player.duration;
  //update progress bar time
  progressbar.value = percent / 100;

};

//function for calculating total length of audio file
function calculateTotalValue(length){

  var minutes = Math.floor(length / 60);
  var seconds_int = length - minutes * 60;
  var seconds_str = seconds_int.toString();
  var seconds = seconds_str.substr(0, 2);
  var time = minutes + ':' + seconds;

  return time;

};

$(document).ready(main);
