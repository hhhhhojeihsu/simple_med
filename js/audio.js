'use strict';

var flag = false;
var break_sec = 2.0;
var inhale_length = 4.0;
var exhale_length = 3.3;

$(document).ready(function() {
  $("#audio_btn").click(async function () {
    $(this).text("Restart");
    if(!$(this).hasClass("btn-danger"))
      $(this).addClass("btn-danger");
    $("#pause_btn").show();

    start_med();
  });

  $("#pause_btn").click(function () {
    pause_med();
  });

  $("#inhale_mp3").on("ended", function () {
    if(flag)
      $("#exhale_mp3")[0].play();
  });
  $("#exhale_mp3").on("ended", async function () {
    await sleep(break_sec * 1000);
    if(flag)
      $("#inhale_mp3")[0].play();
  });
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function start_med() {
  flag = true;

  // Get value
  var inhale_sec = $("#inhale_sec_val").text();
  var exhale_sec = $("#exhale_sec_val").text();
  break_sec = $("#break_sec_val").text();

  // Pause all audio
  $("#inhale_mp3")[0].pause();
  $("#exhale_mp3")[0].pause();

  // Set volume
  $("#inhale_mp3").prop("volume", 1.0);
  $("#exhale_mp3").prop("volume", 1.0);

  // Set audio to the beginning
  $("#inhale_mp3").prop("currentTime", 0);
  $("#exhale_mp3").prop("currentTime", 0);

  // Calculate playbackRate
  var inhale_playbackRate = inhale_length / inhale_sec;
  var exhale_playbackRate = exhale_length / exhale_sec;
  $("#inhale_mp3").prop("playbackRate", inhale_playbackRate);
  $("#exhale_mp3").prop("playbackRate", exhale_playbackRate);

  // Play audio
  if(flag)
    $("#inhale_mp3")[0].play();
}

function pause_med() {
  // Terminate while loop in start_med()
  flag = false;

  // Pause all audio
  $("#inhale_mp3")[0].pause();
  $("#exhale_mp3")[0].pause();
}
