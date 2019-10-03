const fs = require('fs')

const BASE = __dirname + '/src/components/'
console.log(BASE)

const files = fs.readdirSync(BASE)
console.log(BASE)
process.exit()
files.forEach(file => {
  if (!file.includes('.js')) {
    return
  }

  const [folder, suffix] = file.split('.')

  // console.log(BASE + file, BASE + folder, BASE + folder + '/index.js', BASE + folder + '/__tests__')
  // process.exit()

  let data = fs.readFileSync(BASE + file, 'utf8')
  data = data.replace(/from\s\'\.\.\//gi, "from '../../")
  data = data.replace(/from\s\'\.\//gi, "from '../")

  fs.unlinkSync(BASE + file)
  console.log('a')
  fs.mkdirSync(BASE + folder, { recursive: true })
  console.log('b')
  fs.writeFileSync(BASE + folder + '/index.js', data)
  console.log('c')
  fs.mkdirSync(BASE + folder + '/__tests__', { recursive: true })
  console.log('d')
})

console.log(files)
