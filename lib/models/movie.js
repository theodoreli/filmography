'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var MovieSchema = new Schema({
  imgPath: String,
  title: String,
  year: Number,
  synop: String,
  actors: [String],
  awards: [{
  	year: Number,
  	awardBody: [{
	  	awardBodyName: String,
	  	awardNames: [String]
	  }]
  }]
});

// Validations...to do later
// MovieSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Movie', MovieSchema);
