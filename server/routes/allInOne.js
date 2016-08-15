module.exports.checkBlanks = function(song) {
  if (song.name == '' || song.artist == '') {
    return true;
  }

  return false;
}

module.exports.checkDupes = function(userSong, arraySong) {
  // return true or false;
  if(userSong.artist == arraySong.artist && userSong.name == arraySong.name) {
    return true;
  }
  return false;
}

module.exports.addDate = function(song) {
  var date = new Date();
   song['theDate'] = date.toDateString();
   return song;
}

// module.exports.checkBlanks = checkBlanks;



// module.exports.checkItOut = function (songs, song){
// if (compThem(songs, song)); === true
//  &&
//  (if (song.name == '' || song.title == ''){
//     return false;
//   } else {
//     return true;  }); === true)
//   {var date = new Date();
//    song[theDate] = date.toDateString();
//    songs.push(song);
//    res.sendStatus(200);
//  } else {
//    res.sendStatus(400);
//  }
//
// function compThem (songs, song) {
//  songs.forEach(if(songs.name == song.name || songs.title == song.title){
//      return false;
//    } else {
//      return true;
//    });
