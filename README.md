## midi-sdk
Require [MidiJS](https://github.com/mudcube/MIDI.js)' SDK Asynchronously

```js
midi = require('midi-sdk')('path/to/midi', ['acoustic_grand_piano', 'synth_drum'])

midi(function () {
  MIDI.noteOn(1, note, velocity, delay)
})
```

## Install

```bash
$ npm install midi-sdk
```
