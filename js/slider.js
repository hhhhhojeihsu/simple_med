'use strict';

$(document).ready(function() {
  $("#inhale_sec").slider();
  $("#inhale_sec").on("slide", function(slideEvt) {
    $("#inhale_sec_val").text(slideEvt.value);
  })

  $("#exhale_sec").slider();
  $("#exhale_sec").on("slide", function(slideEvt) {
    $("#exhale_sec_val").text(slideEvt.value);
  })
});