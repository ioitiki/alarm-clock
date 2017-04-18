var AlarmClock = require('./../js/alarm-clock.js').alarmClockModule;

$(document).ready(function() {
  var simpleAlarmClock = new AlarmClock();
  $('#time-form').submit(function(time) {
    event.preventDefault();
    var input = $('#time').val();
    simpleAlarmClock.alarmClock(input);
  });
  $('#current-time-form').submit(function() {
    event.preventDefault();
    var output = simpleAlarmClock.currentTime();
    window.alert(output);
  });
});
