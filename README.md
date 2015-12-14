# ffmpeg-audio-worker

```javascript
const concatAudio = require('./concat-audio')
const path = require('path')
const fs = require('fs')

files = [
  '../tmp/coin.mp3',
  '../tmp/hammer.mp3',
  '../../../Music/U2 - Breathe.mp3'
]

concatAudio(
  files.map(f => fs.createReadStream(path.join(__dirname, f))),
  fs.createWriteStream(path.join(__dirname, '../tmp/output.aac'))
)
```
