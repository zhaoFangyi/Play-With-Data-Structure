const FileOperation = require('../FileOperation')
const LinkedListMap = require('./LinkedListMap')
const path = require('path')

const fileOperation = new FileOperation()

console.log('Pride and Prejudice')

const words1 = {
  total: 0,
  list: []
}

const filePath = path.resolve(__dirname, '../pride-and-prejudice.txt')
console.log('filePath', filePath)

if (fileOperation.readFile(filePath, words1)) {
  const { total, list } = words1
  console.log('Total words: ', total)
  const map1 = new LinkedListMap()
  for (let index = 0; index < list.length; index++) {
    const word = list[index]
    if (map1.contains(word)) {
      map1.set(word, map1.get(word) + 1)
    } else {
      map1.add(word, 1)
    }
  }
  console.log('Total different words: ', map1.getSize())
  console.log('Frequency of PRIDE: ', map1.get('pride'))
  console.log('Frequency of Prejudice: ', map1.get('prejudice'))
}
