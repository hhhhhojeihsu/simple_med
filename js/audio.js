'use strict';

$(document).ready(function() {
  $("#audio_btn").click(function () {
    $(this).text("Restart");
    if(!$(this).hasClass("btn-danger"))
      $(this).addClass("btn-danger");
    $("#pause_btn").show();
  });
});