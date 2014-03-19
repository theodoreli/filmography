'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Movie = mongoose.model('Movie'),
    async = require('async');

exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.movies = function(req, res) {
	return Movie.find(function (err, data) {
		if (!err) {
			return res.json(data);
		} else {
			return res.send(err);
		}
	});
};