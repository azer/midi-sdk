var midi = require("./")('http://localhost:3000', ['acoustic_grand_piano']);

it('requires midi.js sdk', function(done){
  midi(function () {
    MIDI.noteOn(1, 55, 123, 0);
  });

  midi(function () {
    MIDI.noteOn(1, 75, 123, 0.4);
  });

  midi(function () {
    MIDI.noteOn(1, 100, 123, 0.8);
  });

  setTimeout(function () {
    MIDI.noteOn(1, 40, 123, 1.2);
    done();
  }, 600);
});
