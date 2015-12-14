const ffmpeg = require('ffmpeg-stream').ffmpeg
const CombinedStream = require('combined-stream2')

module.exports = function concatAudio(streamsArray, outputStream) {

  const combinedStream = CombinedStream.create()

  streamsArray.forEach(s => combinedStream.append(s))

  const converter = ffmpeg()
  const input = converter.input({})
  combinedStream.pipe(input)

  const output = converter.output({
    //'codec:a': 'libfdk_aac',
    //'vbr': 4
    'b:a': '96k',
    f: 'adts'
  })
  output.pipe(outputStream)

  converter.run()
}
