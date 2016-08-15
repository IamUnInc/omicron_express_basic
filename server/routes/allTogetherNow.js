var songDupe = require('./songdup.js')
var addDate = require('./addDates.js')
var nullValue = require('./nullvalue.js')

module.exports.allTogetherNow = function (song, songs) {
  console.log(songDupe.checkForDuplicate(song, songs));
  
  addDate(nullValue(songDupe(song, songs)));
  return song;
}
