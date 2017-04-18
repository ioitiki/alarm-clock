var AlarmClock = require('./../js/alarm-clock.js').alarmClockModule;

$(document).ready(function() {
  var simpleAlarmClock = new AlarmClock();
  $('#time-form').submit(function(time) {
    event.preventDefault();
    var input = $('#time').val();
    var output = simpleAlarmClock.alarmClock(input);
    window.alert(output);
  });
  $('#current-time-form').submit(function() {
    event.preventDefault();
    var output = simpleAlarmClock.currentTime();
    window.alert(output);
  });
});
