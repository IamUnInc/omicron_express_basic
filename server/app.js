var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var checkSong = require('./routes/allInOne');

var songs = []; //stores our songs

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
/**
 * POST /songs
 *
 * Places song into songs array
 */
app.post('/songs', function (req, res) {
  var song = req.body;
  console.log(song);
  var uno = false;
  var doce = false;
if(checkSong.checkBlanks(song) == true) {
    res.sendStatus(400);
  } else {
    uno = true;
  }


var dupes = false;
for(var i = 0; i < songs.length; i++) {
if(checkSong.checkDupes(song, songs[i])) {
  dupes = true
  }
}
if (dupes == true){
  res.sendStatus(400);
} else {
  doce = true;
}

if (uno == true && doce == true){
      checkSong.addDate(song);
      songs.push(song);
      res.sendStatus(201);
    }

    // var dupes = false;
    // for(var i = 0; i < songs.length; i++) {
    //   if(checkSong.checkDupes(song, songs[i])) {
    //     dupes = true;
    //   }
    // }

});

app.get('/songs', function (req, res) {
  res.send(songs);
});

app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';

  console.log('What is in req.params[0]?', req.params[0]);

  //console.log('dirname: ', __dirname);
  //console.log('path', path.join(__dirname, '../public', file));
  res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function () {
  console.log('Server now running at port ', app.get('port'));
});
