AlarmClock = function() {
};

AlarmClock.prototype.alarmClock = function(time) {
  if (moment(time, "HH:mm").diff(moment()) <= 0) {
    window.alert("Alarm Triggered");
    return;
  } else {
    setTimeout(arguments.callee, 1000, time);
  }
};


AlarmClock.prototype.currentTime = function() {
  return moment().format("hh:mm a");
};

exports.alarmClockModule = AlarmClock;
