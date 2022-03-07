"use strict";

var mongoose = require("mongoose");
var Events = mongoose.model("Events");

exports.getAllEvents = function (req, res) {
  Events.find({}, function (err, _event) {
    if (err) res.send(err);

    let live, not_live;
    _event.map((i) => {
      if (i.start_duration.getTime() - new Date().getTime() <= 10) {
        i.isLive = true;
        live.push(i);
      } else {
        not_live.push(i);
      }
      return;
    });
    res.json({ upcoming: not_live, live: live });
  });
};
