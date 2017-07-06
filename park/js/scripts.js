$(document).ready(function() {
  var height = parseInt(prompt("How tall are you(in inches)?"));

  if (height >= 54) {
    $('#rides').show();
  } else {
    $('#under-54').show();
  }
});
