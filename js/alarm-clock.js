AlarmClock = function() {
};

AlarmClock.prototype.alarmClock = function(time) {
  return moment(time, "HH:mm").format("hh:mm a");
};

AlarmClock.prototype.currentTime = function() {
  return moment().format("hh:mm a");
};

exports.alarmClockModule = AlarmClock;
