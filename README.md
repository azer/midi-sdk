## midi-sdk
Require [MidiJS](https://github.com/mudcube/MIDI.js)' SDK Asynchronously

```js
midi = require('midi-sdk')('path/to/midi/repo', ['acoustic_grand_piano', 'synth_drum'])

midi(function () {
  MIDI.noteOn(1, note, velocity, delay)
})
```

## Install

```bash
$ npm install midi-sdk
```

## Usage

Clone MidiJS to an accessible folder and require `midi-sdk` by passing the path like below:

```js
midi = require('midi-sdk')('path/to/midi/repo')
```

The `midi` defined above is a function that wraps your midi-dependent code and calls whenever MidiJS is loaded.

```js
midi(function () {
  MIDI.noteOn(1, note, velocity, delay)
})
```
