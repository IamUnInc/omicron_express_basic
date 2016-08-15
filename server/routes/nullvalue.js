module.exports.noValue = function (song) {
  if (song.name == '' || song.title == ''){
    return false;
  } else {
    return song;
  }
}
