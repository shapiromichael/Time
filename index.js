'use strict';

var Milisecond = 1,
    Second = Milisecond * 1000,
    Minute = Second * 60,
    Hour = Minute * 60,
    Day = Hour * 24,
    Week = Day * 7;

var time = function(value) {
  if (typeof value === 'undefined') {
    return {
      milisecond: Milisecond,
      second: Second,
      minute: Minute,
      hour: Hour,
      day: Day,
      week: Week
    }
  }

  if (typeof value !== 'number') {
    value = 0;
  }

  return {
    miliseconds: value * Milisecond,
    seconds: value * Second,
    minutes: value * Minute,
    hours: value * Hour,
    days: value * Day,
    weeks: value * Week
  }
}

module.export = time;
