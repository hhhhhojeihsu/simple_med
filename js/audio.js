'use strict';

var flag = false;
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
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function start_med() {
  flag = false;

  // Get value
  var inhale_sec = $("#inhale_sec_val").text();
  var exhale_sec = $("#exhale_sec_val").text();
  var break_sec = $("#break_sec_val").text();

  // Pause audio
  $("#inhale_mp3")[0].pause();
  $("#exhale_mp3")[0].pause();

  // Set audio to the beginning
  $("#inhale_mp3").prop("currentTime", 0);
  $("#exhale_mp3").prop("currentTime", 0);

  // Mute exhale
  $("#exhale_mp3").prop("muted", true);
  // Unmute inhale
  $("#inhale_mp3").prop("muted", false);

  // Calculate playbackRate
  var inhale_playbackRate = inhale_length / inhale_sec;
  var exhale_playbackRate = exhale_length / exhale_sec;
  $("#inhale_mp3").prop("playbackRate", inhale_playbackRate);
  $("#exhale_mp3").prop("playbackRate", exhale_playbackRate);

  $("#inhale_mp3")[0].play();
  $("#exhale_mp3")[0].play();

  flag = true;

  // Play audio
  while(flag)
  {
    if(flag)
      $("#exhale_mp3").prop("muted", true);
    else
      break
    if(flag)
      $("#inhale_mp3").prop("currentTime", 0);
    else
      break
    if(flag)
      $("#inhale_mp3").prop("muted", false);
    else
      break
    if(flag)
      await sleep(inhale_sec * 1000);
    else
      break
    if(flag)
      $("#inhale_mp3").prop("muted", true);
    else
      break
    if(flag)
      $("#exhale_mp3").prop("currentTime", 0);
    else
      break
    if(flag)
      $("#exhale_mp3").prop("muted", false);
    else
      break
    if(flag)
      await sleep(exhale_sec * 1000);
    else
      break
    if(flag)
      $("#exhale_mp3").prop("muted", true);
    else
      break
    if(flag)
      await sleep(break_sec * 1000);
    else
      break
  }
}

function pause_med() {
  // Terminate while loop in start_med()
  flag = false;

  // Mute all audio
  $("#inhale_mp3")[0].pause();
  $("#exhale_mp3")[0].pause();
}
