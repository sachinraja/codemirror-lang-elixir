const { join } = require('path')

const modeFile = 'index.js'

module.exports = {
  input: modeFile,
  output: {
    file: modeFile.replace(/\.js$/, '.cjs'),
    format: 'cjs',
  },
  external: (id) => !/^(\.?\/|\w:)/.test(id),
}
