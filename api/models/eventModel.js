'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
  name: {
    type: String,
  },
  start_time: {
    type: Date,
    default: Date.now
  },
  duration: {
    type: Number,
    default: 1
  },
  isLive: {
      type: Boolean,
      default: false
  }
});


module.exports = mongoose.model('Events', EventsSchema);