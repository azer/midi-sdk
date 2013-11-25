var requireSDK = require("require-sdk");
var map = require("map");
var loadScript = require("load-script");

module.exports = requireMidi;

function requireMidi (dir, instruments) {
  var paths = [
    dir + '/build/MIDI.min.js',
    dir + '/inc/base64binary.js'
  ];

  var midi = requireSDK(undefined, 'MIDI');
  var ready = midi.trigger();

  map(loadScript, paths, function (error) {
    if (error) throw error;

    MIDI.loadPlugin({
      soundfontUrl: dir + "/soundfont/",
      instruments: instruments,
      callback: ready
    });
  });

  return midi;
}
