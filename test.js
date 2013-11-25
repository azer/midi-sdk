var midi = require("./")('http://localhost:3000', ['acoustic_grand_piano']);

it('requires midi.js sdk', function(done){
  midi(function () {
    MIDI.noteOn(1, 55, 123, 0);
    MIDI.noteOn(1, 55, 123, 0.25);
    MIDI.noteOn(1, 55, 123, 0.75);
    done();
  });
});
