'use strict';

$(document).ready(function() {
  $("#inhale_sec").slider().on("change", function(slideEvt) {
    $("#inhale_sec_val").text(slideEvt.value.newValue.toFixed(1));
  });

  $("#exhale_sec").slider().on("change", function(slideEvt) {
    $("#exhale_sec_val").text(slideEvt.value.newValue.toFixed(1));
  });

  $("#break_sec").slider().on("change", function(slideEvt) {
    $("#break_sec_val").text(slideEvt.value.newValue.toFixed(1));
  });
});