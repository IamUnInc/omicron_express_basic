
module.exports.checkForDuplicate = function (songs, song){
  if(songs.name == song.name || songs.title == song.title){
    return false;
  } else {
    return song;
  }
}
