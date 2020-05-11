const FileOperation = require('../FileOperation')
const BSTSet = require('./BSTSet')
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
  const set1 = new BSTSet()
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    set1.add(element)
  }
  console.log('Total different words: ', set1.getSize())
}
