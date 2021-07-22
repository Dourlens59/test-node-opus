import runFilterScript from './src/scripts/filter.script.js'
import runCountScript from './src/scripts/count.script.js'

const isFilterScript = process.argv.find(argument => argument.includes('--filter'))
const isCountScript = process.argv.find(argument => argument.includes('--count'))

if (isFilterScript) {
  const arg = isFilterScript.split('=')[1]
  runFilterScript(arg)
}

if (isCountScript) {
  runCountScript()
}

